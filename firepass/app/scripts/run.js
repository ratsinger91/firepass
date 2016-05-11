app.run(function($rootScope, $location,$cookieStore) { 
	$rootScope.$on('$routeChangeStart', function(next, current) { 
  		$rootScope.loggedUser= $cookieStore.get('auth');
		if ($rootScope.loggedUser == "yup"){
			$location.path( "/data" );
			}else{
    		$location.path( "/" );
  		}
 	});
})