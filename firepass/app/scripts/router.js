app.config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'loginController',
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



