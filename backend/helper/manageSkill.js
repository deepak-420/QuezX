/**
 * @file This file includes all the functionalities.
 * @author Deepak Mali <mail2deepakmali@gmail.com>
 * @description This file has functionalities such as listing skills, adding skill, searching skill, editing skill name, updating skill status
 * @version 1.0.0
 */

'use strict';
const db = require('../lib/dbUtils');

 /**
  *  @function add
  *  @param {object} request - API request object containing payload(data) sent from client.
  *  @param {object} response - To send API response.
  *  @description This function is used for adding a skill.
  */
module.exports.add= function (request, response) {

    db.addSkill(request.body, (err, res) => {
            if(err){
                response.json({
                    code : 400,
                    message : res
                });
            } else {
                response.json({
                    code : 200,
                    message : res
                })
            }
    })
}

/**
 *  @function list
 *  @param {object} request - API request object containing payload(data) sent from client.
 *  @param {object} response - To send API response.
 *  @description This function is used for fetching all the skills.
 */
module.exports.list = function (request, response) {

    db.listSkill((res) => {
        response.json({
            code : 200,
            message : "Success",
            data : res
        })
    })
}

/**
 *  @function edit
 *  @param {object} request - API request object containing payload(data) sent from client.
 *  @param {object} response - To send API response.
 *  @description This function is used for editing a skill name.
 */
module.exports.edit = function (request, response) {

    db.editSkill(request.body, (err, res) => {
            if(err){
                response.json({
                    code : 400,
                    message : res
                });
            } else {
                response.json({
                    code : 200,
                    message : res
                })
            }
    })
}

/**
 *  @function updateStatus
 *  @param {object} request - API request object containing payload(data) sent from client.
 *  @param {object} response - To send API response.
 *  @description This function is used for approving or rejecting a skill.
 */
module.exports.updateStatus = function (request, response) {

    db.updateSkillStatus(request.body, (err, res) => {
            if(err){
                response.json({
                    code : 400,
                    message : res
                });
            } else {
                response.json({
                    code : 200,
                    message : res
                })
            }
    })
}

/**
 *  @function search
 *  @param {object} request - API request object containing payload(data) sent from client.
 *  @param {object} response - To send API response.
 *  @description This function is used for searching a skill.
 */
module.exports.search = function (request, response) {

    db.searchSkill(request.body, (res) => {
            response.json({
                code : 200,
                message : "Success",
                data : res
            })
    })
}
