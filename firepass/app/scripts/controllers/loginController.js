app.controller("loginController", function($rootScope , $scope, $location, masterPwd, $cookieStore) {
	$scope.login = function() {
    	if ($scope.password==masterPwd) {
     		$cookieStore.put("auth", "yup");
      		$rootScope.loggedUser = "giusto";
      		$scope.nascondi== false;
      		$location.path( "/data" );
      	};
  	}
})