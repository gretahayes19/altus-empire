const express = require('express')
const router = express.Router()
const mongoose = require('mongoose')
const passport = require('passport')
const Dispensary = require('../../models/Dispensary.js')
require('../../config/passport.js')(passport)
const Rating = require('../../models/Rating')
const validateRatingInput = require('../../validation/rating')

router.get('/test', (req, res) => res.json({msg: "this is rating"}))

router.post('/new', passport.authenticate('jwt', {session: false}), async function (req, res) {
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

    const oldDispensary = await Dispensary.findOne({ _id: req.body.dispensaryId }).catch(err => console.log(err))
    const oldRatings = await Rating.find({ dispensary: req.body.dispensaryId }, 'rating').exec();
    const newAvg = (parseFloat(oldDispensary.avgRating) * oldRatings.length + parseInt(req.body.rating)) / (oldRatings.length + 1);
    await Dispensary.updateOne({ _id: req.body.dispensaryId }, { avgRating: newAvg }).catch(err => console.log(err));

    // newDispensary.save()
    newRating.save().then(rating => res.json(rating))
})

router.get('/dispensary', (req, res) => {
    Rating
        .find({dispensary: req.body.dispensaryId})
        .then(ratings => res.json(ratings))
        .catch(err => res.status(400).json(err))
})

module.exports = router