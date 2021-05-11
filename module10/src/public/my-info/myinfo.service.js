(function () {
	'user strict';
	angular.module('public')
	.service('MyInfoService', MyInfoService);

	MyInfoService.$inject = [];
	function MyInfoService() {
		var service = this;

		service.myinfo = {
			signedUp: false,
			firstName: null,
			lastName: null,
			email: null,
			phone: null,
			favoriteShortName: null
		};

		service.saveMyInfo = function (firstName, lastName, email, phone, favoriteShortName) {
			service.myinfo.firstName = firstName;
			service.myinfo.lastName = lastName;
			service.myinfo.email = email;
			service.myinfo.phone = phone;
			service.myinfo.favoriteShortName = favoriteShortName;
		};

		service.getMyInfo = function () {
			return service.myinfo;
		};
	}

})();