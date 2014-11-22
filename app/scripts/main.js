(function (){

  var app = angular.module('GiftList', ['ngRoute']);

  app.constant ({
    'appUrl': 'http://tiy-atl-fe-server.herokuapp.com/collections/JoannaAngular4/'
  })

  .config( function ($routeProvider) {

    $routeProvider.when('/', {
      templateUrl: 'templates/list-template.html',
      controller: 'ListController'
    });

    $routeProvider.when('/add', {
      templateUrl: 'templates/add-template.html',
      controller: 'AddController'
    });

    $routeProvider.otherwise({
      templateUrl: 'templates/other-template.html',
      controller: 'OtherController'
    });

  });


}());
