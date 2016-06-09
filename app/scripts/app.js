'use strict';

/**
 * @ngdoc overview
 * @name angularMapGoogleApp
 * @description
 * # angularMapGoogleApp
 *
 * Main module of the application.
 */
angular
  .module('angularMapGoogleApp', [
    'ngAnimate',
    'ngRoute'
  ])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl',
        controllerAs: 'main'
      })
      .otherwise({
        redirectTo: '/index.html'
      });
  });
