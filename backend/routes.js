const  manageSkill = require('./helper/manageSkill');
const validator = require('./validator');
module.exports = function (app) {
    app.post('/apis/skill/add', validator.common, manageSkill.add);
    app.get('/apis/skill/list', manageSkill.list);
    app.post('/apis/skill/edit', validator.common, manageSkill.edit);
    app.post('/apis/skill/updatestatus', validator.common, manageSkill.edit);
    app.post('/apis/skill/search', validator.search, manageSkill.search)
};
