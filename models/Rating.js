const mongoose = require('mongoose') 
const Schema = mongoose.Schema 

const RatingSchema = new Schema({ 
    user: { 
        type: Schema.Types.ObjectId, 
        ref: 'users' 
    }, 
    dispensary: { 
        type: Schema.Types.ObjectId, 
        ref: 'dispensary' 
    }, 
    rating: { 
        type: Number, 
        required: true 
    }, 
    review: { 
        type: String, 
        required: true 
    },
    date: { 
        type: Date, 
        default: Date.now
    }
}) 
    
module.exports = Rating = mongoose.model("rating", RatingSchema)