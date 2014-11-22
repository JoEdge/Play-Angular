(function (){

  var app = angular.module('GiftList', []);

  app.controller ('ListController', function(){
    //persons is a property of the controller
    this.persons = giftees;
  });

  app.controller('TabController', function() {
    this.tab = 1;

    this.setTab = function(set) {
      this.tab = set;
    };

    this.isSet = function(setValue) {
      return this.tab === setValue;
    };

  });

  app.controller('AddController', function(){

  });

    var giftees = [
    {
      name: 'Jonas',
      age: 13,
      address: '123 Main St.',
      likes: 'Cardistry',
      gift: '...',
      sendGift: true,
      giftsent: false
    },
    {
      name: 'Will',
      age: 11,
      address: '123 Main St.',
      likes: 'Soccer',
      gift: '...',
      sendGift: true,
      giftsent: false
    },
    {
      name: 'Catherine',
      age: 1,
      address: '123 Main St.',
      likes: 'Doll',
      gift: '...',
      sendGift: false,
      giftsent: true
    }
  ];

}());
