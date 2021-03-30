const Validator = require('validator');
const validText = require('./valid-text')

module.exports = function validateDispensaryInput(data) {
    let errors = {};

    data.dispensaryName = validText(data.dispensaryName) ? data.dispensaryName : "";
    data.description = validText(data.description) ? data.description : "";
    data.address = validText(data.address) ? data.address : "";
    data.website = validText(data.website) ? data.website : "";


    return {
        errors,
        isValid: Object.keys(errors).length === 0
    }
}