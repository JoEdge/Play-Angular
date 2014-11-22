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

(function () {

  angular.module('GiftList')

  .controller('TabController', function() {
    this.tab = 1;

    this.setTab = function(set) {
      this.tab = set;
    };

    this.isSet = function(setValue) {
      return this.tab === setValue;
    };

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
    $scope.persons = results;
  });

  $scope.viewMore = function (person) {
    $location.path('/single/' + person._id);
  };


  }]);

}());

(function () {

  angular.module('GiftList')

  .controller('AddController',
  
  ['$scope', '$http', '$location', 'appUrl', function ($scope, $http, $location, appUrl) {

    $scope.person = {};

    $scope.addPerson = function () {

      $http.post(appUrl, $scope.person).success( function (data) {
        $location.path('/');
      });

    };

  }]);

}());


