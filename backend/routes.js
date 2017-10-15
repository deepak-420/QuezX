/**
 * @file This file includes all the API routes.
 * @author Deepak Mali <mail2deepakmali@gmail.com>
 * @description All the API routes are defined in this file.
 * @version 1.0.0
 */

'use strict';
const  manageSkill = require('./helper/manageSkill');
const validator = require('./validator');

/**
 *  @function default function
 *  @param {object} app - Instance of all the Initialized data when server starts.
 *  @description This function is used for creating a pipeline of processes such as API route definition, validating API request and sending it to proper helper function for processing.
 */
module.exports = function (app) {
    app.post('/apis/skill/add', validator.common, manageSkill.add);
    app.get('/apis/skill/list', manageSkill.list);
    app.post('/apis/skill/edit', validator.common, manageSkill.edit);
    app.post('/apis/skill/updatestatus', validator.common, manageSkill.updateStatus);
    app.post('/apis/skill/search', validator.search, manageSkill.search)
};
