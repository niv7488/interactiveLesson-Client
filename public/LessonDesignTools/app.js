// create angular app
var DesToolsApp = angular.module('DesToolsApp', []);

DesToolsApp.directive("ngFileSelect",function(){    
  return {
    link: function($scope,el){          
      el.bind("change", function(e){          
        var f = (e.srcElement || e.target).files[0];
        var reader = new FileReader();
        // Closure to capture the file information.
        reader.onload = (function(theFile) {
            console.log("here");
            return function(e) {
                console.log(e);
              // Render thumbnail.
              $scope.file = e.target.result;
              //$scope.getFile();
            };
        })(f);

        // Read in the image file as a data URL.
        reader.readAsDataURL(f);
        
      });          
    }        
  }
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