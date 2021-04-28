(function () {
    'use strict';
    
    angular.module('MenuApp').controller('MenuAppItemController', MenuAppItemController);
    
    MenuAppItemController.$inject = ['items'];
    function MenuAppItemController(items) {
      var itemsDetail = this;
      itemsDetail.category = items.category;
      itemsDetail.items = items.menu_items;
    }
    
})();