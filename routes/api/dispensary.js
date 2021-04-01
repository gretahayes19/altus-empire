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


// router.post('/:id/photo', allowCrossDomain, [auth], async (req, res) => {
//     try {
//         const dispensary = await Dispensary.findById(req.params.id);

//         if(!dispensary) {
//             return res.status(404).json({ msg: 'Dispensary not found' });
//         }

//         if (!req.files) {
//             res.status(400).json({
//                 errors: [
//                     {
//                         msg: 'Please upload a file'
//                     }
//                 ]
//             });
//         }
//         const file = req.files.file

//         if (!file.mometype.startsWith('image')) {
//             res.status(400).json({
//                 errors: [
//                     {
//                         msg: 'Images only'
//                     }
//                 ]
//             });
//         }

//         file.name = `photo_${post._id}${path.parse(file.name).ext}`;
        
//         var Blob = req.files.file.data;

//         const S3_BUCKET = 'mybucketname';
//         const AWS_ACCESS_KEY_ID = 'Enter here';
//         const AWS_SECRET_ACCESS_KEY = 'Enter Here';

//         AWS.config.update({
//             accessKeyId: AWS_ACCESS_KEY_ID,
//             secretAccessKey: AWS_SECRET_ACCESS_KEY
//         });

//         const s3 = new AWS.S3();

//         var params = {
//             Bucket: S3_BUCKET,
//             Key: file.name,
//             Body: Blob
//         };
//         s3.upload(params, function(err, data) {
//             console.log(err, data);
//         });
        
//         let newPhoto = await Dispensary.findByIdAndUpdate(
//             req.params.id,
//             {
//                 postphoto: file.name
//             },
//             { new: true }
//         );
        
//         res.json(newPhoto);
//     } catch (err) {
//         // is this the correct return?
//         return res.status(404).json(err)
//     }
// });

module.exports = router;