(function () {

  angular.module('GiftList')
  .controller('AddController',
    ['$scope', '$http', '$location', 'appUrl', function ($scope, $http, $location, appUrl) {

      var appUrl = 'http://tiy-atl-fe-server.herokuapp.com/collections/angJoanna1/'

    $scope.gifted = {};

    $scope.addPerson = function () {

      $http.post(appUrl, $scope.gifted).success( function (data) {
        $location.path('/');
      });

    };

  }]);


}());
