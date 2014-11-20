(function (){

  angular.module('GiftList')

  .controller('ListController',
    ['factory', '$scope', function ($scope) {

    factory.getGiftee().success( function (results){
      $scope.giftee = results;
    });

    $scope.viewMore = function (gifted) {
      $location.path('/single/' + gifted._id);
    };


  }]);

}());
