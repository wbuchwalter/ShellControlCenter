'use strict';

angular.module('shellControlCenterApp')
  .controller('MainCtrl', function ($scope, $http) {
    $scope.shells = [];

    $http.get('/api/shells').success(function(shells) {
      $scope.shells = shells;
    });

/*    $scope.addThing = function() {
      if($scope.newThing === '') {
        return;
      }
      $http.post('/api/things', { name: $scope.newThing });
      $scope.newThing = '';
    };

    $scope.deleteThing = function(thing) {
      $http.delete('/api/things/' + thing._id);
    };*/
  });
