(function () {
  'use strict';

  angular.module('MenuApp')
  .component('items', {
    templateUrl: 'src/menuapp/templates/item.template.html',
    bindings: { items: '<' }
  });
  
})();