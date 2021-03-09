(function () {
'use strict';

// step 7: declare Angular module
angular.module('LunchCheck', [])
.controller('LunchCheckController', LunchCheckController);

// step 10: inject scope to protect from minification
LunchCheckController.$inject = ['$scope'];

function LunchCheckController($scope) {
  $scope.lunchList = "";
  $scope.responseMessage = "";

  $scope.checkIfTooMuch = function() {
    $scope.responseMessage = getResponseMessage($scope.lunchList);
    $scope.getStyleForResult = getStyleForResult();
  };

  // helper function to return the number of "empty" input elements
  function getNumEmpty(listElements) {
    var numEmpty = 0;
    for(const listItem of listElements) {
      if(listItem.trim() == '') {
        numEmpty += 1;
      }
    }
    return numEmpty;
  };

  // logic to determine the response message based on the input list
  function getResponseMessage(list) {
    var listElements = list.split(',');
    var numElements = listElements.length - getNumEmpty(listElements);
    if(numElements == 0) {
      return "Please enter data first";
    } else if(numElements > 3) {
      return "Too Much";
    } else {
      return "Enjoy!";
    }
  };

  // return style to apply for error or normal result
  function getStyleForResult() {
    if($scope.responseMessage.includes('Please')) {
      return "error";
    } else if($scope.responseMessage.includes('Enjoy') || $scope.responseMessage.includes('Much')){
      return "normal";
    } else {
      return "";
    }
  };
  
};

})();
