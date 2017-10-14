const db = require('../lib/dbUtils');

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

module.exports.list = function (request, response) {

    db.listSkill((res) => {
        response.json({
            code : 200,
            message : "Success",
            data : res
        })
    })
}

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

module.exports.search = function (request, response) {

    db.searchSkill(request.body, (res) => {
            response.json({
                code : 200,
                message : "Success",
                data : res
            })
    })
}
