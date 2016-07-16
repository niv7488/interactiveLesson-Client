// create angular app
var DesToolsApp = angular.module('DesToolsApp', []);
var formData = new FormData();
DesToolsApp.directive('fileFormAppend', function () {
    return {
        restrict: 'A',
        scope: true,
        link: function (scope, element, attr) {

            element.bind('change', function () {
                formData.append('image', element[0].files[0]);
                
            });

        }
    };
});

// create angular controller
DesToolsApp.controller('mainController', ['$scope', '$http', function($scope, $http) {
    $scope.popupClick = function(){
        $("#popup").toggleClass("invisible");
    }
    $scope.getFile = function() {
        console.log($scope.file);
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
    $scope.saveLesson = function() {
        var tmp = $("#lessonId").val();
        console.log(tmp);
        formData.append("id",tmp);
        $http({
                method: 'POST',
                //url: 'http://interactive-lesson.herokuapp.com/updateLesson',
                url: 'http://localhost:3000/updateLesson',
                data: formData,
                transformRequest: angular.identity,
                headers: {'Content-Type': undefined}
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
    $("#fileSelector").change(handleFileSelect);
}]);

function GetAllPictures() {
  
}

function handleFileSelect(evt) {
    console.log("here3");
    var files = evt.target.files; // FileList object
    // Loop through the FileList and render image files as thumbnails.
    for (var i = 0, f; f = files[i]; i++) {

      // Only process image files.
      if (!f.type.match('image.*')) {
        continue;
      }

      var reader = new FileReader();

      // Closure to capture the file information.
      reader.onload = (function(theFile) {
        return function(e) {
          // Render thumbnail.
          //var span = document.createElement('span');
          //span.innerHTML = ['<img class="thumb" src="', e.target.result,
               //             '" title="', escape(theFile.name), '"/>'].join('');
         // document.getElementById('list').insertBefore(span, null);
         console.log(e);
         $("#background").attr("src",e.target.result);
        };
      })(f);

      // Read in the image file as a data URL.
      reader.readAsDataURL(f);
    }
  }

  function OnLoad () {
    document.getElementById('files').addEventListener('change', handleFileSelect, false);
  }