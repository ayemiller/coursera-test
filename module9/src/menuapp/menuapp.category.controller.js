(function () {
    'use strict';
    
    angular.module('MenuApp').controller('MenuAppCategoryController', MenuAppCategoryController);
    
    MenuAppCategoryController.$inject = ['categories'];
    function MenuAppCategoryController(items) {
      var mainList = this;
      mainList.items = items;
    }
    
})();