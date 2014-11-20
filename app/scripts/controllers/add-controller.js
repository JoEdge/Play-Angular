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
