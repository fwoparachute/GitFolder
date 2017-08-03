elocator.controller('CompanyCtrl', ['$scope', '$routeParams', 'CompaniesService', 
	function ($scope, $routeParams, CompaniesService){
 		 	var ref = CompaniesService.firebaseref;
 		 	$scope.companies = CompaniesService.getCompanies();
 		 	$scope.GoTo = CompaniesService.goToCompanyLocation();

 		 	$scope.company =   CompaniesService.getCompany($routeParams.id);
  			$scope.currentCompany = ($routeParams.name);
}]);
