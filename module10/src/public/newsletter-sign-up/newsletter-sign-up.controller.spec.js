describe("Test for newsletter-sign-up.controller.js - ", function () {
    var $httpBackend;
    var ApiPath;
    var $controller;
    var newsletterSignUpController;

    // Sample data to mock http requests
    var testData = {
      menuItem: {
        id: 658,
        short_name: "A1",
        name: "Won Ton Soup with Chicken",
        description: "chicken-stuffed won tons in clear chicken broth with white meat chicken pieces and a few scallions",
        price_small: 2.55,
        price_large: 5,
        small_portion_name: "pint",
        large_portion_name: "quart",
        created_at: "2016-08-05T19:42:00.140Z",
        updated_at: "2016-08-06T11:25:51.229Z",
        category_short_name: "A",
        image_present: true
      }
    };
    beforeEach(function () {
      module('public');
  
      inject(function ($injector) {
        
        $httpBackend = $injector.get('$httpBackend');
        ApiPath = $injector.get('ApiPath');
        $controller = $injector.get('$controller');

        newsletterSignUpController = $controller('NewsletterSignUpController', {
            ApiPath: ApiPath
        });

      });
    });
  
    it('Testing the A1 checks out as a valid dish', function() {
      newsletterSignUpController.favoriteShortName = "A1";
      $httpBackend.whenGET(ApiPath + '/menu_items/' + newsletterSignUpController.favoriteShortName + '.json').respond(testData.menuItem);
      
      expect(newsletterSignUpController.isFavoriteValid).toEqual(false);
      newsletterSignUpController.checkIfShortNameValid()
      
      $httpBackend.flush();
      expect(newsletterSignUpController.isFavoriteValid).toEqual(true);
    });
  
    it('Testing the abc checks out as an invalid dish', function() {
      newsletterSignUpController.favoriteShortName = "abc";
      $httpBackend.whenGET(ApiPath + '/menu_items/' + newsletterSignUpController.favoriteShortName + '.json').respond(500, {});
      
      expect(newsletterSignUpController.isFavoriteValid).toEqual(false);
      newsletterSignUpController.checkIfShortNameValid()
      
      $httpBackend.flush();
      expect(newsletterSignUpController.isFavoriteValid).toEqual(false);
    });
  });
  