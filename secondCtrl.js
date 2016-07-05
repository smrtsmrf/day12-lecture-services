angular.module('angularService').controller('secondCtrl', function($scope, secondSrv) {

	$scope.reallyLike = secondSrv.reallyLike;
	$scope.kindOfLike = secondSrv.kindOfLike;

	$scope.addArtist = function () {
		 var artistObj = buildArtist();
		 secondSrv.addNewArtist(artistObj);
		 clearInputField();
	}

	function buildArtist() { 
		return {
			name: $scope.artist,
			genre: $scope.genre,
			rating: $scope.rating
		}};

	function clearInputField() {
		$scope.artist='';
		$scope.genre='';
		$scope.rating='';
	
}
})