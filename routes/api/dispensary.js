const express = require('express');
const router = express.Router();
const Dispensary = require("../../models/Dispensary")
const jwt = require('jsonwebtoken');
const keys = require('../../config/keys');
const passport = require('passport');
const validateDispensaryInput = require('../../validation/dispensary')
require('../../config/passport.js')(passport)

// AWS
require('dotenv').config()
const multer = require('multer')
let AWS = require('aws-sdk')

let storage = multer.memoryStorage()
let upload = multer({ storage: storage })

router.get('/all', (req, res) => {
    Dispensary
        .find({})
        .then((dispensaries) => res.json(dispensaries))
        .catch(err => res.status(404).json(err))
})

const AWS_FILE_URL_LINK = ""
const AWS_ACCESS_KEY_ID = ""
const AWS_SECRET_ACCESS_KEY = ""
const AWS_BUCKET_NAME = ""


// router.post("/upload", upload.single('file'), function(req, res) {
//     const file = req.file
//     const awsFileURL = process.env.AWS_FILE_URL_LINK

//     let s3bucket = new AWS.S3({
//         accessKeyId: process.env.AWS_ACCESS_KEY_ID,
//         secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY,
//         region: process.env.AWS_REGION,
//     })

//     let params = {
//         Bucket: process.env.AWS_BUCKET_NAME,
//         Key: file.originalname,
//         Body: file.buffer,
//         ContentType: file.mimetype,
//         ACL: "public-read",
//     }

//     s3bucket.upload(params, function (err, data) {
//         if (err) {
//         res.status(500).json({ error: true, Message: err });
//         } else {
//         res.send({ data });
        
//         let newFileUploaded = {
//                 post_id: req.body.post_id,
//                 description: req.body.description,
//                 fileLink: s3FileURL + file.originalname,
//                 s3_key: params.Key,
//         };
        
//         let photo = new PHOTO(newFileUploaded);
//             photo.save(function (error, newFile) {
//                     if (error) {
//                         throw error;
//                     }
//             })
//         }
//     })
// })


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