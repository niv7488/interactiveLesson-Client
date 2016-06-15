// create angular app
var validationApp = angular.module('validationApp', []);

// create angular controller
validationApp.controller('mainController', ['$scope', '$http', function($scope, $http) {

    // function to submit the form after all validation has occurred            
    $scope.submitForm = function(isValid) {

        // check to make sure the form is completely valid
        if (isValid) { 
            console.log(isValid);
            var encodedString = 'Keyword=' +
                encodeURIComponent($scope.user.Keyword) +
                '&Description=' +
                encodeURIComponent($scope.user.Description);

            $http({
                method: 'POST',
                url: 'http://interactive-lesson.herokuapp.com/createKeyWord',
                data: encodedString,
                headers: {'Content-Type': 'application/x-www-form-urlencoded'}
            })
            .success(function(data, status, headers, config) {
                console.log(data);
                if(data.success == true) {
                    window.location.href = '../LessonOptions.html';
                }
                else{
                    $scope.errorMsg = "Details of Keyword are not correct";
                }
            })
            .error(function(data, status, headers, config) {
                $scope.errorMsg = 'Unable to submit form';
            })
        }

    };

}]);