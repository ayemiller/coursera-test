(function () {
    'use strict'
    
    angular.module('public').controller('NewsletterSignUpController', NewsletterSignUpController);
    NewsletterSignUpController.$inject = ['$http', 'ApiPath', 'MyInfoService'];

    function NewsletterSignUpController($http, ApiPath, MyInfoService) {
        var ctrl = this;
        var myInfo = MyInfoService.getMyInfo();
        ctrl.firstName = myInfo.firstName;
        ctrl.lastName = myInfo.lastName;
        ctrl.email = myInfo.email;
        ctrl.phone = myInfo.phone;
        ctrl.favoriteShortName = myInfo.favoriteShortName;

        ctrl.favoriteShortName = myInfo.signedUp ? myInfo.favoriteShortName.short_name : null;
        ctrl.favoriteShortName = myInfo.favoriteShortName.short_name;
        ctrl.isFavoriteValid = false;
        
        ctrl.checkIfShortNameValid = function() {
            var onSuccess = function (response) {
                ctrl.isFavoriteValid = true;
            };
            var onError = function (response) {
                ctrl.isFavoriteValid = false;
            };
            $http.get(ApiPath + '/menu_items/' + ctrl.favoriteShortName + '.json').then(onSuccess, onError);
        };

        ctrl.submit = function() {
            var onSuccess = function (response) {
                ctrl.signedUp = true;
                MyInfoService.saveMyInfo(ctrl.firstName, ctrl.lastName, ctrl.email, ctrl.phone, ctrl.favoriteShortName);
                ctrl.isFavoriteValid = true;
            };
            var onError = function (response) {
                ctrl.signedUp = false;
                ctrl.isFavoriteValid = false;
            };
            $http.get(ApiPath + '/menu_items/' + ctrl.favoriteShortName + '.json').then(onSuccess, onError);
        };
    }

})();