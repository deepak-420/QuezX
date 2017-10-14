const loki = require('lokijs');

//Initialize database.
let  db= new loki('db.json');
let skills = db.addCollection('../skills.json');

addSkill =  function(data, callback) {
    try{
        searchSkill(data, (res) => {
            if(res.length){
                    callback(1, "Data Already Exist")
            } else {
                skills.insert(data);
                callback(0,"Success");
            }
        })
    } catch(e){
        callback(1, "Something went wrong.")
    }
}

editSkill = function(data, callback) {
    try{
        var dataToBeUpdated = skills.find({
            id: {
                    '$eq' : data.id
                }
        });
        dataToBeUpdated[0].name = data.name;
        dataToBeUpdated[0].status = data.status;
        skills.update(dataToBeUpdated);
        callback(0, "Success")
    } catch(e){
        callback(1, "Something went wrong")
    }
}

searchSkill = function(data, callback) {
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

listSkill = function(callback) {
    try {
        let res = skills.find({ });
        callback(res)
    } catch(e) {
        callback([])
    }
}

updateSkillStatus = function(data, callback) {
    try{
        var dataToBeUpdated = skills.find({
            id: {
                    '$eq' : data.id
                }
        });
        dataToBeUpdated[0].status = data.status;
        console.log(dataToBeUpdated);
        skills.update(dataToBeUpdated);
        callback(0, "Success")
    } catch(e){
        callback(1, "Something went wrong")
    }
}

module.exports = {
    addSkill : addSkill,
    editSkill : editSkill,
    searchSkill : searchSkill,
    listSkill : listSkill,
    updateSkillStatus : updateSkillStatus
};
