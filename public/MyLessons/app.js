// create angular app
var DesToolsApp = angular.module('DesToolsApp', []);
var model = {lessons: []};


// create angular controller
DesToolsApp.controller('mainController', ['$scope', '$http', function($scope, $http) {
    $scope.model = model;
   $http({
                method: 'GET',
                url: 'http://interactive-lesson.herokuapp.com/getAllLessons',
                
            })
            .success(function(data, status, headers, config) {
                console.log(data);
                $scope.model.lessons = data;
                console.log($scope.model.lessons);
                
            })
            .error(function(data, status, headers, config) {
                $scope.errorMsg = 'Unable to submit form';
            })

}]);


