angular.module('postExample', [])
    .controller('PostController', ['$scope', '$http', function($scope, $http) {
        
        this.postForm = function() {
        
            var encodedString = 'username=' +
                encodeURIComponent(this.inputData.username) +
                '&password=' +
                encodeURIComponent(this.inputData.password);
                
            $http({
                method: 'GET',
                url: 'http://interactive-lesson.herokuapp.com/teacherLogin/'+ this.inputData.username + '/' + this.inputData.password
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