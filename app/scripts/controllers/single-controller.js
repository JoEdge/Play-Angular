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
