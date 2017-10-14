app.controller('testController', ($scope, $http) => {

    $scope.skillList = [];
    $scope.showAdd = false;
    $scope.addSkills = {
        "id": "",
        "name": "",
        "status": null
    }

    // List
    $scope.list = function () {
        $http
        .get('http://127.0.0.1:5000/apis/skill/list')
        .then((res) => {
            $scope.skillList = res.data.data;
        });
    }
    $scope.list();

    //Add
    $scope.addSkill = function() {
        $http
        .post('http://127.0.0.1:5000/apis/skill/add', { id: $scope.skillList.length + 1, name: $scope.addSkills.name, status : $scope.addSkills.status})
        .then((res) => {
            console.log(res);
            if(res.data.code == 400){
                alert(res.data.message);
            } else {
                $scope.list();
            }
        });
    }


    // Edit
    $scope.changeSkill = function(index) {
        $http
        .post('http://127.0.0.1:5000/apis/skill/edit', { id: index.id, name: index.name, status: index.status })
        .then((res) => {
            $scope.list();
        });
    }

    // Approve/Reject
    $scope.changeStatus = function(obj){
        $http
        .post('http://127.0.0.1:5000/apis/skill/updatestatus', { id: obj.id, name: obj.name, status: obj.status })
        .then((res) => {
            alert('This skill is ' + (obj.status === 1 ? 'Approved' : 'Rejected'));
        });
    }

    //search
    $scope.search = function(name) {
        if(name){
            $http
            .post('http://127.0.0.1:5000/apis/skill/search', { name : name })
            .then((res) => {
                if(res.data.data.length){
                    $scope.skillList = res.data.data;
                } else {
                    alert("No records found.");
                    $scope.list();
                }
            });
        } else {
            $scope.list();
        }
    }
})
