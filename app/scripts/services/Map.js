'use strict';

/**
 * @ngdoc service
 * @name angularMapGoogleApp.geoCode
 * @description
 * # geoCode
 * Service in the angularMapGoogleApp.
 */
angular.module('angularMapGoogleApp')
  .service('Map', function () {

    var _clickPos = {
      clickLat : 0,
      clickLong : 0
    };

   this.initMap = function(att, lat, long) {
     var pos = new google.maps.LatLng(lat, long);
     var options = {
       center : pos,
       zoom : 17,
       mapTypeId : google.maps.MapTypeId.ROADMAP
     };
     return new google.maps.Map(document.getElementById(att),options);
   };

    this.addMarker = function (markPos, markerMap, name) {
      return new google.maps.Marker({
        position : markPos,
        map : markerMap,
        Name : name,
        animation : google.maps.Animation.BOUNCE
      })
    };

    this.setClickPos = function(lat, long) {
        console.log("clicked");
          _clickPos.clickLat = lat;
          _clickPos.clickLong = long;

    };

    this.getClickPos = function() {
      return _clickPos;
    };


  });
