angular.module('angularService').service('secondSrv', function () {
	 
	this.reallyLike = [];
	this.kindOfLike = [];

	this.addNewArtist = function(artistObj) {
		if (artistObj.rating >= 50) {
			this.reallyLike.push(
				{
					name: artistObj.name, 
					genre: artistObj.genre, 
					rating: artistObj.rating
				}
					);
		}
		else {
			this.kindOfLike.push(
				{
					name: artistObj.name, 
					genre: artistObj.genre, 
					rating: artistObj.rating
				}
					);
		}
	};
})