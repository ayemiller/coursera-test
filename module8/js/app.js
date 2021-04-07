(function () {
'use strict';

angular.module('NarrowItDownApp', [])
.controller('NarrowItDownController', NarrowItDownController)
.service('MenuSearchService', MenuSearchService)
.directive('foundItems', FoundItems)
.constant('MenuItemsPath', "https://davids-restaurant.herokuapp.com/menu_items.json");

NarrowItDownController.$inject = ['MenuSearchService'];
MenuSearchService.$inject = ['$http', 'MenuItemsPath'];

function NarrowItDownController (MenuSearchService) {
  var controller = this;

  controller.searchTerm = "";
  controller.found = null;

  controller.search = function () {
    controller.found = MenuSearchService.getMatchedMenuItems(controller.searchTerm).then(function(response) {
      controller.found = response;
    }).catch(function(error) {
      console.log("Something went wrong.");
    });
  };

  controller.remove = function (itemIndex) {
    controller.found.splice(itemIndex, 1);
  };

  controller.displayNothingFound = function () {
    return controller.found && controller.found.length==0;
  };

}

function MenuSearchService($http, MenuItemsPath) {
  var service = this;

  service.getMatchedMenuItems = function (searchTerm) {
    var response = $http({
      method: "GET",
      url: MenuItemsPath
    });

    var filterResults = function (response) {
      var matchedMenuItems = [];
      searchTerm = (searchTerm || "").toLowerCase();
      if(searchTerm.length > 0) {
        var data = response.data.menu_items;
        data.forEach(item => {
          var description = item.description || ""
          if(description.toLowerCase().includes(searchTerm)) {
            matchedMenuItems.push(item);
          }
        });
      }
      return matchedMenuItems;
    }
    return response.then(filterResults);
  };
}

function FoundItems() {
  var ddo = {
    templateUrl: 'loader/listItems.html',
    scope: {
      list: '< searchResults',
      onRemove: '&',
      noItemsFound: '&'
    },
    controller: NarrowItDownController,
    controllerAs: 'controller',
    bindToController: true
  };
  return ddo;
}

})();