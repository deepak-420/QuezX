const db = require('../lib/dbUtils');

module.exports.listSkill = function (request, response) {
    db.listSkill(request.body, (err, res) => {
        console.log(err, res);
            if(err){
                response.json({
                    code : 400,
                    message : "Something went wrong"
                });
            } else {
                response.json({
                    code : 200,
                    message : "Success",
                    data : res
                })
            }
    })
}
