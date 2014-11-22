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
