(function () {
'use strict';

angular.module('ShoppingListCheckOff', [])
.controller('ToBuyController', ToBuyController)
.controller('AlreadyBoughtController', AlreadyBoughtController)
.service('ShoppingListCheckOffService', ShoppingListCheckOffService)
.filter('ThreeDollarSignCurrency', ThreeDollarSignsFilter);

ToBuyController.$inject = ['ShoppingListCheckOffService'];
AlreadyBoughtController.$inject = ['ShoppingListCheckOffService'];

function ToBuyController(ShoppingListCheckOffService) {
  var buy = this;

  buy.items = ShoppingListCheckOffService.getToBuyList();

  buy.perform = function(itemIndex) {
    ShoppingListCheckOffService.buyItem(itemIndex);
  }

}

function AlreadyBoughtController(ShoppingListCheckOffService) {
  
  var boughtList = this;
  boughtList.items = ShoppingListCheckOffService.getBoughtList();

  // calculates the total cost of a quanity of items
  boughtList.totalCost = function(item) {
    return item.pricePerItem*item.quantity;
  };
}

function ShoppingListCheckOffService() {
  var service = this;
  var toBuyList = [
    { name: "flour", quantity: 1, pricePerItem: 4.99 },
    { name: "sugar", quantity: 2, pricePerItem: 3.99 },
    { name: "eggs", quantity: 3, pricePerItem: .37 },
    { name: "apples", quantity: 7, pricePerItem: 1.67 },
    { name: "cinnamon", quantity: 2, pricePerItem: 0.33 },
    { name: "oranges", quantity: 5, pricePerItem: .99 }
  ];

  var boughtList = [];

  service.buyItem = function (itemIndex) {
    boughtList.push(toBuyList[itemIndex]);
    toBuyList.splice(itemIndex, 1);
  };

  service.getToBuyList = function() {
    return toBuyList;
  };

  service.getBoughtList = function() {
    return boughtList;
  };
}

// filter which chains the default currency filter along with two more dollar signs
function ThreeDollarSignsFilter($filter) {
  return function (input) {
    input = input || "";
    input = $filter('currency')(input);
    return "$$".concat(input);
  };
}

})();