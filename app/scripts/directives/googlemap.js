'use strict';

/**
 * @ngdoc directive
 * @name angularMapGoogleApp.directive:googleMap
 * @description
 * # googleMap
 */
angular.module('angularMapGoogleApp')
  .directive('googleMap', function (Map) {
    return {
      restrict : 'E',
      template : '<div id="map" ></div>',
      replace : true,
      link: function postLink($scope, element, attrs) {
        var count = 0;
        var map = Map.initMap(attrs.id, 48.893926, 2.354034);
        Map.addMarker(new google.maps.LatLng(48.893926, 2.354034), map, "Felix" );

        google.maps.event.addListener(map, 'click', function(event) {
          count++;
          Map.setClickPos(event.latLng.lat(), event.latLng.lng());
          Map.addMarker(new google.maps.LatLng(Map.getClickPos().clickLat, Map.getClickPos().clickLong), map, "marker n°" + count);
          $scope.$emit('updatePos');
        });


            }
          };
        });


