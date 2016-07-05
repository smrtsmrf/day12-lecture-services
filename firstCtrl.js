angular.module('angularService').controller('firstCtrl', function($scope) {
	$scope.users = ['peter', 'sally', 'barb'];

	$scope.addUser = function() {
		$scope.users.push($scope.userFirstName);
		$scope.userFirstName = "";
	}




})