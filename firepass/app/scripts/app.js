'use strict';

/**
 * @ngdoc overview
 * @name fireApp
 * @description
 * # fireApp
 *
 * Main module of the application.
 */
angular
  .module('fireApp', [
    'ngAnimate',
    'ngAria',
    'ngCookies',
    'ngMessages',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch',
    'firebase'
  ])




  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'SampleCtrl',
        controllerAs: 'main'
      })
      .when('/about', {
        templateUrl: 'views/about.html',
        controller: 'AboutCtrl',
        controllerAs: 'about'
      })
       .when('/data', {
        templateUrl: 'views/data.html',
        controller: 'SampleCtrl',
        controllerAs: 'main'
      })
      .otherwise({
        redirectTo: '/'
      });
  })
  
.constant("masterPwd", "-your_password-")
.constant("db", "-your_main_firebase_db_link-")
.constant("dbgruppi", "-your_firebase_groups_tab-")
.constant("dbcredentials", "-your_firebase_credentials_tab-")
  
  .controller("SampleCtrl", function($rootScope,  $scope, $firebaseArray, $firebaseObject, $location, masterPwd, db, dbgruppi, dbcredentials) {
  var ref = new Firebase(db);
 $scope.gruppos= $firebaseArray(ref);

  var rif = new Firebase(dbgruppi);
 $scope.gruppi= $firebaseArray(rif);

  var raf = new Firebase(dbcredentials);
 $scope.credentials= $firebaseArray(raf);


$scope.deleteCred = function(idgruppo,element){
  $scope.tem = [];
  $scope.gruppos.$remove(idgruppo.credentials);
  



};
 
  // add new items to the array
  // the message is automatically added to our Firebase database!


$scope.addGruppo = function(){

$scope.gruppi.$add({ gruppo : "new"});

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
      } );

      kkk.newUser="";
      kkk.newPass="";
      kkk.newDescr="";
  };



  $scope.login = function() {
    if ($scope.password==masterPwd) {
      $rootScope.loggedUser = "giusto";
      $scope.nascondi== false;
      $location.path( "/data" );

    };
  }




    


  
  // click on `index.html` above to see $remove() and $save() in action
})




.run( function($rootScope, $location) {

    // register listener to watch route changes
    $rootScope.$on( "$routeChangeStart", function(event, next, current) {
      if ( $rootScope.loggedUser == null ) {
        // no logged user, we should be going to #login
        if ( next.templateUrl == "views/main.html" ) {
          // already going to #login, no redirect needed
        } else {
          // not going to #login, we should redirect now
          $location.path( "/" );
        }
      }         
    });
 })
