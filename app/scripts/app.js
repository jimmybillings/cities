'use strict';

/**
 * @ngdoc overview
 * @name sandboxApp
 * @description
 * # sandboxApp
 *
 * Main module of the application.
 */
angular.module('sandboxApp', [
    'ngResource',
    'ui.router'
]).config(function ($stateProvider, $urlRouterProvider, $locationProvider) {

    $urlRouterProvider.otherwise('/');
    $locationProvider.html5Mode(false);
    $stateProvider
      .state('cities', {
        url: '/',
        templateUrl: '/views/cities.html',
        controller: 'Cities as CityCtl'
      });
});
