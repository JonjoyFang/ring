/**
 * Created by Administrator on 2017/3/8 0008.
 */

// 定义路由
angular.module('myApp',['ng','ngRoute'])
    .config(function($routeProvider) {
        $routeProvider
            .when('/nav1', {
                  templateUrl: 'template/home.html',
                  controller: 'firstCtrl'
            })
            .when('/nav2', {
                   templateUrl: 'template/solids.html',
                   controller: 'secondCtrl'
            })
            .when('/nav3', {
                templateUrl: 'template/liquids.html',
                controller:"thirdCtrl"
            })
            .when('/nav4', {
                templateUrl: 'template/spray.html',
                controller:"fourthCtrl"
            })
            .when('/nav5', {
                templateUrl: 'template/electric.html',
                controller:"fifthCtrl"
            })
            .when('/nav6', {
                templateUrl: 'template/for cars.html',
                controller:"sixthCtrl"
            })
            .when('/nav7', {
                templateUrl: 'template/all pages.html',
                controller:"seventhCtrl"
            })
            .otherwise('/nav1');


    })
    
    
     .controller('firstCtrl',['$scope','$rootScope',
       function($scope,$rootScope){

    }])
     
       .controller('secondCtrl',['$scope',
        function($scope){

    }])
     
      .controller('thirdCtrl',['$scope','$location',
       function($scope,$location){
            // $scope.jump=function(){
            //    $location.path('/nav1');
            // }
    }])
      .controller('fourthCtrl',['$scope',
        function($scope){

    }])
      .controller('fifthCtrl',['$scope',
        function($scope){

    }])
      .controller('sixthCtrl',['$scope',
        function($scope){

    }])
      .controller('seventhCtrl',['$scope',
        function($scope){

    }])
     