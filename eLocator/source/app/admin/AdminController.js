//Admin Controllers
elocator.controller('AdminCtrl', ['$scope', 'CompaniesService', function ($scope, CompaniesService) {
  $scope.newCompany = { name: '', remaining: 0, status: 'Active' };
  $scope.currentCompany = null;

  $scope.companies = CompaniesService.getCompanies();
  $scope.addCompany = function () {
    CompaniesService.addCompany(angular.copy($scope.newCompany));
    $scope.newCompany = { name: '', remaining: 0, status: ''};
  };

  $scope.updateCompany = function (id) {
    CompaniesService.updateCompany(companyId);
  };

  $scope.removeCompany = function (id) {
    CompaniesService.removeCompany(id);
  };
}]);

elocator.factory('CompaniesService', ['$firebase', 'FIREBASE_URI','$location', function ($firebase, FIREBASE_URI,$location) {
  var ref = new Firebase(FIREBASE_URI + "company");
  var sync = $firebase(ref);
  var companies = sync.$asArray();

  var getCompanies = function () {
    return companies;
  };
  var goToCompanyLocation = function(name){
    console.log("clicked");
    var index = companies.$indexFor(name);
    $location.path('company/'+index);
  }
  var getCompany = function(id){
    var ref_this = new Firebase(FIREBASE_URI + "company/" + id);
    var sync = $firebase(ref_this);
    var company = sync.$asObject();
    return company
  }

  var addCompany = function (company) {
    companies.$add(company);
  };

  var updateCompany = function (id) {
    companies.$save(id);
  };

  var removeCompany = function (id) {
    companies.$remove(id);
  };

  return {
    firebaseref: ref,
    goToCompanyLocation: goToCompanyLocation,
    getCompanies: getCompanies,
    getCompany: getCompany,
    addCompany: addCompany,
    updateCompany: updateCompany,
    removeCompany: removeCompany
  }
}]);
