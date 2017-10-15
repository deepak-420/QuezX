/**
 * @file This file includes all the validation functions.
 * @author Deepak Mali <mail2deepakmali@gmail.com>
 * @description This file has functionalities to validate incoming API requests.
 * @version 1.0.0
 */

'use strict';
const Joi = require('joi');


/**
 *  @function common
 *  @param {object} req - API request object containing payload(data) sent from client.
 *  @param {object} res - To send API response.
 *  @param {function} next - When called it passes control to next middleware function.
 *  @description This function is used for validatinng the incoming request for adding/editing/listing/changing status of a skill..
 */
module.exports.common = function (req, res, next) {

    const schema = Joi.object().keys({
        id: Joi.number().required(),
        name: Joi.string().required(),
        status : Joi.boolean().only([0, 1, null]).required()
    })
    Joi.validate ( req.body , schema, (error, response) => {
        if(error){
            return res.json({
                code : 400,
                message : "Bad Request."
            })
        }
        next();
    })
}


/**
 *  @function search
 *  @param {object} req - API request object containing payload(data) sent from client.
 *  @param {object} res - To send API response.
 *  @param {function} next - When called it passes control to next middleware function.
 *  @description This function is used for validatinng the incoming request for searching a skill..
 */
module.exports.search = function (req, res, next) {

    const schema = Joi.object().keys({
        name: Joi.string().required()
    })
    Joi.validate ( req.body , schema, (error, response) => {
        if(error){
            return res.json({
                code : 400,
                message : "Bad Request."
            })
        }
        next();
    })
}
