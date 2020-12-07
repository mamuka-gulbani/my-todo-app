var app = angular.module('myApp' , []);

app.controller('todoCtrl', function($scope) {
	$scope.todolist = [{todoText: 'Waking up',done:false},
					  {todoText: '5min. Jump Rope',done:false},
					  {todoText: 'Eating High-Carb Breakfast',done:false},
					  {todoText: 'Coding',done:false},
					  {todoText: 'Back/Biceps Workout',done:false},
					  {todoText: 'Eating High-Protein Meal',done:false},
					  {todoText: 'Sleep',done:false}
	];

	$scope.todoAdd = function(){
		$scope.todolist.push({todoText:$scope.todoinput, done:false});
		$scope.todoinput = "";
	};
	$scope.remove = function(){
		var oldlist = $scope.todolist;
		$scope.todolist = [];
		angular.forEach(oldlist, function(x){
			if (!x.done) $scope.todolist.push(x);
		});
	};
	
});