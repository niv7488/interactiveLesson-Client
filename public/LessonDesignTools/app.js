// create angular app
var DesToolsApp = angular.module('DesToolsApp', []);



// create angular controller
DesToolsApp.controller('mainController', ['$scope', '$http', function($scope, $http) {
    $scope.popupClick = function(){
        $("#popup").toggleClass("invisible");
    }

    $scope.MCbutton = function(){
        $("#popup").toggleClass("invisible");
        if($("#mcIcon").hasClass("nonexistent")){
            $("#mcIcon").toggleClass("nonexistent");
        }
        
    }
    $scope.deleteAct = function(){
       if(!$("#mcIcon").hasClass("nonexistent")){
            $("#mcIcon").toggleClass("nonexistent");
        } 
    }
}]);

