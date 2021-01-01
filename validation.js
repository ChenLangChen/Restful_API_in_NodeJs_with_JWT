// VALIDATION 
const { date } = require('@hapi/joi');
const Joi = require('@hapi/joi');

// Register validation 
const registerValidation = (data) => {
    const schema = Joi.object({
        name: Joi.string().min(6).required(),
        email: Joi.string().min(6).required().email(),
        password: Joi.string().min(6).required()
    });
    return schema.validate(data); // Extracting the error from the validation results
}

// Login validation 
const loginValidation = (data) => {
    const schema = Joi.object({
        email: Joi.string().min(6).required().email(),
        password: Joi.string().min(6).required()
    });
    return schema.validate(data);
    
}



module.exports.loginValidation = loginValidation;
module.exports.registerValidation = registerValidation;