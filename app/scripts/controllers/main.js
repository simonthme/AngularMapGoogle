'use strict';

/**
 * @ngdoc function
 * @name angularMapGoogleApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the angularMapGoogleApp
 */
angular.module('angularMapGoogleApp')
  .controller('MainCtrl', function ($scope, $timeout, Map) {

    $scope.dateToday = new Date();
    $scope.timeNow = new Date();


    $scope.showLatitude = 0;
    $scope.showLongitude = 0;

    $scope.$on('updatePos', function () {
      $scope.showLatitude = Map.getClickPos().clickLat;
      $scope.showLongitude = Map.getClickPos().clickLong;
      $scope.$apply();
    });

    var updateTime = function() {
      $scope.timeNow = new Date();
      $timeout(updateTime, 1000);
    };

    $timeout(updateTime, 1000);


  });
