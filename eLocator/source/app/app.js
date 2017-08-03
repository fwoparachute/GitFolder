var elocator = angular.module('elocator', ['firebase', 'ngRoute']);

elocator.constant('FIREBASE_URI', 'https://elocator.firebaseio.com/');

elocator.config(function ($routeProvider) {
  $routeProvider.when('/',
    {
      templateUrl:"app/main/elocator.html"
    })
    .when('/admin', {
      templateUrl:"app/admin/admin.html",
      controller:"AdminCtrl"
    })
    .when('/company/:id', {
      templateUrl:"app/admin/company/company.html",
      controller:"CompanyCtrl"
    })
    .when('/build-elocator', {
      templateUrl:"app/admin/templatizer/build-elocator.html"
    })
    .otherwise({
      template: "This doens't exist!"
    })
  })
;
