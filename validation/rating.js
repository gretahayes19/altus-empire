const Validator = require('validator');
const validText = require('./valid-text')

module.exports = function validateRatingInput(data) {
    let errors = {};

    return {
        errors,
        isValid: Object.keys(errors).length === 0
    };
}