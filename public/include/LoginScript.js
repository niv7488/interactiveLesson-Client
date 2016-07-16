angular.module('postExample', [])
    .controller('PostController', ['$scope', '$http', function($scope, $http) {
        
        this.postForm = function() {
        
            var encodedString = 'id=' +
                encodeURIComponent(this.inputData.id) +
                '&pass=' +
                encodeURIComponent(this.inputData.pass);
                
            $http({
                method: 'POST',
                url: 'http://interactive-lesson.herokuapp.com/teacherLogin',
                data: encodedString,
                headers: {'Content-Type': 'application/x-www-form-urlencoded'}
            })
            .success(function(data, status, headers, config) {
                console.log(data);
                if ( data.success === true) {
                    window.location.href = 'main.html';
                } else {
                    $scope.errorMsg = "Login is not correct";
                }
            })
            .error(function(data, status, headers, config) {
                $scope.errorMsg = 'Unable to submit form';
            })
        }
        
    }]);