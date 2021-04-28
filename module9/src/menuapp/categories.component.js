(function () {
'use strict';

angular.module('MenuApp')
.component('categories', {
  templateUrl: 'src/menuapp/templates/category.template.html',
  bindings: { items: '<' }
});

})();