angular.module('cndapp', ['ui.router']).config(function($urlRouterProvider, $stateProvider){
  $urlRouterProvider.otherwise('/');
  $stateProvider
  .state('sports', {
    url: '/sports',
    templateUrl: '../views/sports.html',
    controller: 'sportsctrl'
  })
});
