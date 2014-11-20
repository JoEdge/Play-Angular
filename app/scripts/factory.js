(function () {

  angular.module('GiftList')
  .factory('factory', ['$rootScope', '$http', function ($rootScope, $http) {

    var url = 'http://tiy-atl-fe-server.herokuapp.com/collections/angJoanna1/'


    function getGiftee () {
      return $http.get(url);
    }

    function getGifted (id) {
      return $http.get(url + id);
    }

    return {

      getGiftee: getGiftee,
      getGifted: getGifted,

    };

  }]);

}())
