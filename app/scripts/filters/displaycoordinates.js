'use strict';

/**
 * @ngdoc filter
 * @name angularMapGoogleApp.filter:displayCoordinates
 * @function
 * @description
 * # displayCoordinates
 * Filter in the angularMapGoogleApp.
 */
angular.module('angularMapGoogleApp')
  .filter('displayLat', function () {
    return function (input) {

      var northSouth = input > 0 ? "N" : "S";
      var degree = Math.floor(Math.abs(input));
      var min = Math.floor((input - degree) * 60);
      var sec = Math.floor((input - degree - min/60)*3600);
      return degree + "°" + min + "'" + sec + "''" + northSouth;
    };
  });

angular.module('angularMapGoogleApp')
.filter('displayLong', function () {
  return function (input) {

    var eastWest = input > 0 ? "E" : "W";
    var degree = Math.floor(Math.abs(input));
    var min = Math.floor((input - degree) * 60);
    console.log(input + "  " + degree);
    var sec = Math.floor((input - degree - min/60)*3600);
    return degree + "°" + min + "'" + sec + "''" + eastWest;
  };
});
