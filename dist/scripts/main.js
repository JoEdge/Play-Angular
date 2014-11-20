(function (){

  angular.module('GiftList', ['ngRoute'])

  .constant ({
    'appUrl': 'http://tiy-atl-fe-server.herokuapp.com/collections/angJoanna1'
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

    $routeProvider.when('/single/:gifteeid', {
      templateUrl: 'templates/single-template.html',
      controller: 'SingleController'
    });

    $routeProvider.otherwise({
      templateUrl: 'templates/other-template.html',
      controller: 'OtherController'
    });

  });

}());

(function (){

  angular.module('GiftList')

  .controller('OtherController', [ function () {

  }]);

}());

(function (){

  angular.module('GiftList')

  .controller('ListController',
    ['$scope', '$http', '$location', 'appUrl', function ($scope, $http, $location, appUrl) {

    $http.get(appUrl).success( function (results){
      $scope.giftee = results;
    });

    $scope.viewMore = function (gifted) {
      $location.path('/single/' + gifted._id);
    };


  }]);

}());

(function () {

  angular.module('GiftList')
  .controller('AddController',
    ['$scope', '$http', '$location', 'appUrl', function ($scope, $http, $location, appUrl) {

    $scope.gifted = {};

    $scope.addPerson = function () {

      $http.post(appUrl, $scope.gifted).success( function (data) {
        $location.path('/');
      });

    };

  }]);


}());

(function () {

  angular.module('GiftList')
  .controller('SingleController',
    ['$scope', '$http', '$routeParams', '$location', 'appUrl', function ($scope, $http, $routeParams,$location, appUrl) {

    $scope.gifted = {

      $http.get(appUrl + $routeParams).success( function (results){
        $scope.giftee = results;
      });

    };

    $scope.updatePerson = function () {

      $http.post(appUrl, $scope.gifted).success( function (data) {
        $location.path('/single/:gifteeid');
      });

    };

  }]);

}());
