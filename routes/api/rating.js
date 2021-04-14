const express = require('express')
const router = express.Router()
const mongoose = require('mongoose')
const passport = require('passport')
const Dispensary = require('../../models/Dispensary.js')
require('../../config/passport.js')(passport)
const Rating = require('../../models/Rating')
const validateRatingInput = require('../../validation/rating')

router.get('/test', (req, res) => res.json({msg: "this is rating"}))

router.post('/', passport.authenticate('jwt', {session: false}), async function (req, res) {
    const {errors, isValid} = validateRatingInput(req.body)

    if (!isValid) {
        return res.status(400).json(errors)
    }

    const newRating = new Rating({
        user: req.user.id,
        dispensary: req.body.dispensaryId,
        rating: req.body.rating,
        review: req.body.review,
    })

    const oldDispensary = await Dispensary.findOne({ _id: req.body.dispensaryId }).catch(err => res.send(err));
    const oldRatings = await Rating.find({ dispensary: req.body.dispensaryId }, 'user rating').exec();

    for (let i in oldRatings) {
        if (oldRatings[i].user.toString() === req.user.id) {
            return res.status(400).json({review: 'Can not make duplicate review'});
        }
    }

    const newAvg = (parseFloat(oldDispensary.avgRating) * oldRatings.length + parseInt(req.body.rating)) / (oldRatings.length + 1);
    await Dispensary.updateOne({ _id: req.body.dispensaryId }, { avgRating: newAvg }).catch(err => res.send(err));

    // newDispensary.save()
    newRating.save().then(rating => res.json(rating))
})

router.get('/dispensary/:dispensaryId', async function (req, res) {
    const reviews = await Rating.find({
      dispensary: req.params.dispensaryId,
    }).catch((err) => res.status(400).json(err));

    let data = [];

    for (let i in reviews) {
        let review = reviews[i].toJSON();
        let userId = reviews[i].user;
        let user = await User.findOne({_id: userId})
        review.username = user.username;
        data.push(review);
    }

    res.json(data);
})

router.delete('/:ratingId', async function (req, res) {
    // res.send("got delete")
    const deleteRating = await Rating.deleteOne({_id: req.params.ratingId}).catch(err => res.status(400).json(err))
    res.send(deleteRating)
})

module.exports = router