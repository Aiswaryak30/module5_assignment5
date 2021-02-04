(function(){
    'use strict';

    angular.module('restaurant')
    .config(RoutesConfig);

    RoutesConfig.$inject=['$stateProvider','$urlRouterProvider'];
    function RoutesConfig($stateProvider,$urlRouterProvider){

        $urlRouterProvider.otherwise('/');

        $stateProvider
        .state('home',{
            url:'/home',
            templateUrl:'src/templates/home.html'
        })
        .state('signin',{
            url:'/sign_in',
            templateUrl:'src/templates/signin.html',
            controller:'RegController as Reg'
         
           
        })
        // .state('submit',{
        //     url:'/submit/{categoryShortName}',
        //     templateUrl:'/src/templates/signin.html',
        //     controller:'menuItemController as menu',
         
           
        // })
        .state('login',{
            url:'/login',
            templateUrl:'src/templates/myinfo.html',
            controller: 'MyInfoController',
            controllerAs: 'myInfoCtrl',
            resolve: {
                user: ['MyInfoService', function(MyInfoService) {
                  return MyInfoService.getinfo();
                }]
              }
      
        });
    }
})();