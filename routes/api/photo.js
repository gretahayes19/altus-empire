const express = require('express');
const router = express.Router();
const passport = require('passport');
require('../../config/passport.js')(passport)

// AWS
require('dotenv').config()
const multer = require('multer')
let AWS = require('aws-sdk')
const Photo = require('../../models/Photo')

let storage = multer.memoryStorage()
let upload = multer({ storage: storage })

const AWS_FILE_URL_LINK = "https://s3-us-east-1.amazonaws.com/altus-empire-seeds/"
const AWS_ACCESS_KEY_ID = "AKIA3KJF7TLUJCRCFEP4"
const AWS_SECRET_ACCESS_KEY = "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"
const AWS_BUCKET_NAME = "altus-empire-seeds"
const AWS_REGION = "us-east-1"

router.get('/test', (req, res) => res.json({msg: "photo route connected"}))

router.post("/upload", upload.single('file'), function(req, res) {
    // console.log(req.body.file)
    const file = req.body.file
    console.log(req.file)
    const awsFileURL = AWS_FILE_URL_LINK

    let s3bucket = new AWS.S3({
        accessKeyId: AWS_ACCESS_KEY_ID,
        secretAccessKey: AWS_SECRET_ACCESS_KEY,
        region:  AWS_REGION,
    })

    // console.log(s3bucket)

    let params = {
        Bucket: AWS_BUCKET_NAME,
        Key: file.originalname,
        Body: file.buffer,
        ContentType: file.mimetype,
        ACL: "public-read",
    }

    s3bucket.upload(params, function (err, data) {
        if (err) {
        res.status(500).json({ error: true, Message: err });
        } else {
        res.send({ data });
        
        let newFileUploaded = {
                postId: req.body.post_id,
                fileLink: awsFileURL + file.originalname,
                s3Key: params.Key,
        };
        
        let photo = new Photo(newFileUploaded);
            photo.save(function (error, newFile) {
                    if (error) {
                        throw error;
                    }
            })
        }
    })
})

module.exports = router;

