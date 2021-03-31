const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const PhotoSchema = new Schema({
    postId: {
        type: Schema.Types.ObjectId,
        ref: 'dispensary'
    },
    fileLink: {
        type: String
    },
    s3Key: {
        type: String
    },
    date: { 
        type: Date, 
        default: Date.now
    }
})

module.exports = Photo = mongoose.model("photo", PhotoSchema)