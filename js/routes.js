'use strict';

myApp.
  config(['$routeProvider', '$locationProvider', function($routeProvider, $locationProvider) {
    $routeProvider.
      when('/', {
        templateUrl: 'partials/index.html',
        controller: 'DemoCtrl'
      })
      .when('/charts', {
        templateUrl: 'partials/charts.html',
        controller: 'DemoCtrl'
      })
      .when('/tables', {
        templateUrl: 'partials/tables.html'
      })
      .when('/forms', {
        templateUrl: 'partials/forms.html'
      })
      .when('/typography', {
        templateUrl: 'partials/typography.html'
      })
      .when('/bootstrap-elements', {
        templateUrl: 'partials/bootstrap-elements.html'
      })
      .when('/bootstrap-grid', {
        templateUrl: 'partials/bootstrap-grid.html'
      })
      .when('/blank-page', {
        templateUrl: 'partials/blank-page.html'
      })
      .otherwise({
        redirectTo: '/'
      });
    $locationProvider.html5Mode(true);
  }]);
