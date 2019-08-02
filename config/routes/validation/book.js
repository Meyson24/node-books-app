const Joi = require('joi');

module.exports = {

    create: {
        body: {
            title: Joi.string().min(1).required(),
            description: Joi.string().required(),
            price: Joi.string().max(10).required(),
        },
    },

};