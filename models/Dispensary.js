const mongoose = require('mongoose')
const Schema = mongoose.Schema

const DispensarySchema = new Schema({
    photoId: {
        type: Schema.Types.ObjectId, 
        ref: 'photo' 
    },
    dispensaryName: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    latitude: {
        type: Number,
        required: true
    },
    longitude: {
        type: Number,
        required: true
    },
    phone: {
        type: Number,
        required: true
    },
    address: {
        type: String,
        required: true
    },
    website: {
        type: String,
        required: true
    },
    postphoto: {
        type: String
    },
    zipCode: {
        type: Number,
        require: true
    },
    avgRating: {
        type: mongoose.Types.Decimal128
    }
})

module.exports = Dispensary = mongoose.model("dispensary", DispensarySchema)

