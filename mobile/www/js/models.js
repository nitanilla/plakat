var urlDomain = 'http://localhost:5000'

angular.module('plakatstart.models', ['ngResource'])

.factory('Poster', function($resource) {
	var facPoster = {};
  		
	facPoster.getPosters = function(){
		return $resource(urlDomain + '/index.php/plakat/posters').query();
	}

	facPoster.getPoster = function(id){
		return $resource(urlDomain + '/index.php/plakat/poster/' + id).query();	
	}

	return facPoster

});
