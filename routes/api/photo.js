const express = require('express');
const router = express.Router();
const passport = require('passport');
require('../../config/passport.js')(passport)

// AWS
// require('dotenv').config()
const multer = require('multer')
let AWS = require('aws-sdk')
const Photo = require('../../models/Photo')

let storage = multer.memoryStorage()
let upload = multer({ storage: storage })

const keys = require('../../config/keys_dev');

router.get('/test', (req, res) => res.json({msg: "photo route connected"}))

router.post("/upload", upload.single('file'), function(req, res) {
    const file = req.file
    const awsFileURL = keys.AWS_FILE_URL_LINK

    let s3bucket = new AWS.S3({
        accessKeyId: keys.AWS_ACCESS_KEY_ID,
        secretAccessKey: keys.AWS_SECRET_ACCESS_KEY,
        region:  keys.AWS_REGION,
    })

    let params = {
        Bucket: keys.AWS_BUCKET_NAME,
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

