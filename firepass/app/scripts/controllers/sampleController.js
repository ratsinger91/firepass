app.controller("SampleCtrl", function($rootScope ,firebaseConnect, $scope, $firebaseArray, $firebaseObject) {
	$scope.gruppos=firebaseConnect.gruppos;
	$scope.gruppi=firebaseConnect.gruppi;
	$scope.credentials=firebaseConnect.credentials;
	$scope.tipo="password";

	$scope.deleteCred = function(idgruppo,element){
 		$scope.tem = [];
 		$scope.gruppos.$remove(idgruppo.credentials);
	};

	$scope.addGruppo = function(){
		$scope.gruppi.$add({ gruppo : "new"});
		$scope.groupFilter="";
	};

	$scope.clearBox = function(kkk, gruppo) {
    	kkk.newUser="";
    	kkk.newPass="";
    	kkk.newDescr="";
	};

	$scope.addMessage = function(kkk, gruppo) {    
    	$scope.credentials.$add({ 
	    	gruppo: gruppo,
    		user: kkk.newUser,
    		password: kkk.newPass,
    		desc: kkk.newDescr
    	});
    	kkk.newUser="";
    	kkk.newPass="";
    	kkk.newDescr="";
	};
})
 