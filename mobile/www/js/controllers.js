angular.module('plakatstart.controllers', [])

.controller('AppCtrl', function($scope) {

})

.controller('HomeCtrl', function($scope, Poster) {
  
  $scope.posters = Poster.getPosters()

});
