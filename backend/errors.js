module.exports.Success = {
    code : 200,
    message : res
};

module.exports.successWithData = {
    code : 200,
    message : "Success",
    data : res
};

module.exports.SomethingWentWrong = {
    code : 400,
    message : res
};

module.exports.badRequest = {
    code : 400,
    message : "Bad Request."
}
