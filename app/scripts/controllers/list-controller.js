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
