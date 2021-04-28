(function () {
'use strict';

angular.module('Data')
.service('MenuDataService', MenuDataService)
.constant('MenuCategories', 'https://davids-restaurant.herokuapp.com/categories.json')
.constant('MenuItemsForCategoryPath', 'https://davids-restaurant.herokuapp.com/menu_items.json?category=');
MenuDataService.$inject = ['$http', 'MenuCategories', 'MenuItemsForCategoryPath'];


function MenuDataService($http, MenuCategories, MenuItemsForCategoryPath) {
  var service = this;

  service.getAllCategories = function () {

    var retrieve = $http({
      method: 'GET',
      url: (MenuCategories)
    });

    var data = retrieve.then(function (retriever) {
      return retriever.data;
    }).catch(function (error) {
      console.error(error);
    });

    return data;
  };

  service.getItemsForCategory = function (categoryShortName) {
    var retrieve = $http({
      method: 'GET',
      url: (MenuItemsForCategoryPath + categoryShortName)
    });
    var data = retrieve.then(function (retriever) {
      return retriever.data;
    }).catch(function (error) {
      console.error(error);
    });
    return data;
  };

}

})();