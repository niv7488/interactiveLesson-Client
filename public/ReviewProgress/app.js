var app = angular.module("ListApp", []);
var colors = [
	{
		min: -10,
		max: -1,
		color: "blue"
	},
	{
		min: 0,
		max: 49,
		color: "red"
	},
	{
		min: 50,
		max: 74,
		color: "yellow"
	},
	{
		min: 75,
		max: 100,
		color: "green"
	}
]
var model = {
	students: [
		{
			name: "Adi Avrahami",
			gender: "girl",
			mood: "happy",
			grades: [20, -1, 86, 80, 76, 61, 73]
		},
		{
			name: "Ben Banai",
			gender: "boy",
			mood: "sad",
			grades: [56, 39, 82, 72, 100, 90, 84]
		},
		{
			name: "Carmel Cohen",
			gender: "girl",
			mood: "glasses",
			grades: [79, 73, 75, 83, 64, -1, 94]
		},
		{
			name: "Daniel Dahan",
			gender: "boy",
			mood: "anxious",
			grades: [69, -1, 79, 89, -9, 59, 99]
		},
		{
			name: "Einat Eden",
			gender: "girl",
			mood: "cheerful",
			grades: [72, 74, 78, -1, 21, 40, 63]
		}
	]
}

app.controller("mainController", function($scope, $http) {
	console.log("Woohoo");
	$scope.model = model;
	$scope.presentStudents = function() {

	}
	$scope.determinColor = function(grade) {
		for(var i = 0; i < colors.length; ++i) {
			if((grade >= colors[i].min) && (grade <= colors[i].max)) {
				return colors[i].color;
			}
		}
	}
	$("#attendence").val($scope.model.students.length);
	var total = 0;
	var count = 0;
	for(var i = 0; i < $scope.model.students.length; ++i) {
		for(var j = 0; j < $scope.model.students[i].grades.length; ++j) {
			total += $scope.model.students[i].grades[j];
			++count;
		}
	}
	var avarage = Math.floor(total / count);
	$("#performance > div").html(avarage);
	$("#performance > div").toggleClass($scope.determinColor(avarage).toString());
	$("#performance > div").toggleClass($scope.determinColor(avarage).toString() + "Border");
});