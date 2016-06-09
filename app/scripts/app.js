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
        templateUrl: 'view/index.html',
        controller: 'MainCtrl',
        controllerAs: 'main'
      })
      .otherwise({
        redirectTo: '/view/index.html'
      });
  });
