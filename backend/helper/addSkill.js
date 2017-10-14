const db = require('../lib/dbUtils');

module.exports.addSkill = function (request, response) {
    request.body.status = null;
    db.addSkill(request.body, (err, res) => {
            if(err){
                response.json({
                    code : 400,
                    message : "Something went wrong"
                });
            } else {
                response.json({
                    code : 200,
                    message : "Success"
                })
            }
    })
}
