const Joi = require('joi');

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

// module.exports.edit = function (req, res, next) {
//     const schema = Joi.object().keys({
//         id: Joi.number().required(),
//         name: Joi.string().required(),
//         status : Joi.boolean().only([0, 1, null])
//     })
//     Joi.validate ( req.body , schema, (error, response) => {
//         if(error){
//             return res.json({
//                 code : 400,
//                 message : "Bad Request."
//             })
//         }
//         next();
//     })
// }
// //
// module.exports.updateStatus = function(req, res, next) {
//     const schema = Joi.object().keys({
//         id: Joi.number().required(),
//         name: Joi.string().required(),
//         status: Joi.boolean().only([0, 1]).required()
//     })
//     Joi.validate ( req.body , schema, (error, response) => {
//         if(error){
//             return res.json({
//                 code : 400,
//                 message : "Bad Request."
//             })
//         }
//         next();
//     })
// }


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
