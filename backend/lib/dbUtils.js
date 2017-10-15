/**
 * @file Database related functionalities.
 * @author Deepak Mali <mail2deepakmali@gmail.com>
 * @description This file creates a database connection and has definition of requires queries.
 * @version 1.0.0
 */

'use strict';
const loki = require('lokijs');

//Initialize database.
let  db= new loki('db.json');
let skills = db.addCollection('../skills.json');

/**
 *  @function addSkill
 *  @param {object} data - Payload(data) sent from client.
 *  @param {function} callback - To send error and result back to helper function.
 *  @description This function defnes and executes query for adding a skill.
 */
var addSkill =  function(data, callback) {
    try{
        let res = skills.find({
            name : {
                '$eq': data.name
            }
        });
        if(res.length){
            callback(1, "Data Already Exist")
        } else {
            skills.insert(data);
           callback(0,"Success");
        }
    } catch(e){
        callback(1, "Something went wrong.")
    }
}

/**
 *  @function editSkill
 *  @param {object} data - Payload(data) sent from client.
 *  @param {function} callback - To send error and result back to helper function.
 *  @description This function defnes and executes query for editing a skill.
 */
var editSkill = function(data, callback) {
    try{
        let res = skills.find({
            name : {
                '$eq': data.name
            }
        });
        if(res.length){
            callback(1, "Data Already Exist")
        } else {
            var dataToBeUpdated = skills.find({
                id: {
                    '$eq' : data.id
                }
            });
            dataToBeUpdated[0].name = data.name;
            dataToBeUpdated[0].status = data.status;
            skills.update(dataToBeUpdated);
            callback(0, "Success")
        }

    } catch(e){
        callback(1, "Something went wrong")
    }
}

/**
 *  @function searchSkill
 *  @param {object} data - Payload(data) sent from client.
 *  @param {function} callback - To send error and result back to helper function.
 *  @description This function defnes and executes query for searching a skill.
 */
var searchSkill = function(data, callback) {
    try {
        let res = skills.find({
            name : {
                '$regex': [data.name, 'i']
            }
        });
        callback(res);
    } catch(e) {
        callback([])
    }
}

/**
 *  @function listSkill
 *  @param {function} callback - To send error and result back to helper function.
 *  @description This function defnes and executes query for listing a skill.
 */
var listSkill = function(callback) {
    try {
        let res = skills.find({ });
        callback(res)
    } catch(e) {
        callback([])
    }
}

/**
 *  @function updateSkillStatus
 *  @param {object} data - Payload(data) sent from client.
 *  @param {function} callback - To send error and result back to helper function.
 *  @description This function defnes and executes query for updating a skill status.
 */
var updateSkillStatus = function(data, callback) {
    try{
        var dataToBeUpdated = skills.find({
            id: {
                    '$eq' : data.id
                }
        });
        dataToBeUpdated[0].status = data.status;
        skills.update(dataToBeUpdated);
        callback(0, "Success")
    } catch(e){
        callback(1, "Something went wrong")
    }
}

/**
 *  export all the functions.
 */
module.exports = {
    addSkill : addSkill,
    editSkill : editSkill,
    searchSkill : searchSkill,
    listSkill : listSkill,
    updateSkillStatus : updateSkillStatus
};
