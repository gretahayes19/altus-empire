const express = require('express')
const router = express.Router()
const mongoose = require('mongoose')
const passport = require('passport')
require('../../config/passport.js')(passport)
const Rating = require('../../models/Rating')
const validateRatingInput = require('../../validation/rating')

router.get('/test', (req, res) => res.json({msg: "this is rating"}))

router.post('/new', passport.authenticate('jwt', {session: false}), (req, res) => {
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

    // const oldDispensary = Dispensary.findOne({
    //     _id: req.body.dispensaryId
    // })

    // newDispensary.save()
    newRating.save().then(rating => res.json(rating))
})

module.exports = router