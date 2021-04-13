const express = require('express');
const router = express.Router();
const Dispensary = require("../../models/Dispensary")
const jwt = require('jsonwebtoken');
const keys = require('../../config/keys');
const passport = require('passport');
const validateDispensaryInput = require('../../validation/dispensary')
require('../../config/passport.js')(passport)


router.get('/all', (req, res) => {
    Dispensary
        .find({})
        .then((dispensaries) => res.json(dispensaries))
        .catch(err => res.status(404).json(err))
})

router.get('/:keyword', async (req, res) => {
    await Dispensary
        .find(
            {"dispensaryName" : {"$regex" : `${req.params.keyword}`, "$options": "i" } },
                function(err, names) {
                    const namesArray = []
                    for (let i = 0; i < names.length; i++){
                        namesArray.push(names[i])
                    }
                    res.json(namesArray)
                }
        )
})

module.exports = router;