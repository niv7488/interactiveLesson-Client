// create angular app
var validationApp = angular.module('validationApp', []);

// create angular controller
validationApp.controller('mainController', ['$scope', '$http', function($scope, $http) {
    
    // function to submit the form after all validation has occurred            
    $scope.submitForm = function(isValid) {

        // check to make sure the form is completely valid
        if (isValid) { 
            console.log(isValid);
            var encodedString = 'Question=' +
                encodeURIComponent($scope.user.Question) +
                '&Answer1=' +
                encodeURIComponent($scope.user.Answer1)+
                '&Answer2=' + 
                encodeURIComponent($scope.user.Answer2)+
                '&Answer3=' +
                encodeURIComponent($scope.user.Answer3);

            $http({
                method: 'POST',
                url: 'http://interactive-lesson.herokuapp.com/createLesson',
                data: encodedString,
                headers: {'Content-Type': 'application/x-www-form-urlencoded'}
            })
            .success(function(data, status, headers, config) {
                console.log(data);
                if(data.success == true) {
                    window.location.href = '../LessonOptions.html';
                }
                else{
                    $scope.errorMsg = "Details of Q&A are not correct";
                }
            })
            .error(function(data, status, headers, config) {
                $scope.errorMsg = 'Unable to submit form';
            })
        }

    };

}]);