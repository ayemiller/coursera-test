(function () {
    'use strict';

    angular.module('public').controller('MyInfoController', MyInfoController);
    MyInfoController.$inject = ['ApiPath', 'myInfo'];
    function MyInfoController(ApiPath, myInfo) {
        var infoController = this;
        infoController.basePath = ApiPath;
        infoController.myInfo = myInfo;
    }
})();