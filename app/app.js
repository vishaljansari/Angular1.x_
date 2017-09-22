var myNinjaApp = angular.module('myNinjaApp', ['ngRoute']);


myNinjaApp.config(['$routeProvider', function($routeProvider){

    $routeProvider
        .when('/home',{
            templateUrl: 'views/home.html'
        })
        .when('/directory', {

            templateUrl: 'views/directory.html',
            controller: 'NinjaController'
        }).otherwise({

            redirectTo: '/home'
        })
}])

myNinjaApp.controller('NinjaController', ['$scope', function($scope){


    $scope.removeNinja = function(ninja){
        let removedNinja = $scope.ninjas.indexOf(ninja);
        $scope.ninjas.splice(removedNinja,1)
    }

    $scope.addNinja = function(){

        $scope.ninjas.push({
            name : $scope.newninja.name,
            belt : $scope.newninja.belt,
            rate : parseInt($scope.newninja.rate),
            available : true
        })

        $scope.newninja.name = ""
        $scope.newninja.belt = ""
        $scope.newninja.rate = ""

    }

    $scope.ninjas = [
    
        {
            name : "Vishal",
            belt : "green",
            rate : 50,
            available : true
        },
        {
            name : "Naman",
            belt : "black",
            rate : 70,
            available : false
            
        },
        {
            name : "Jacky",
            belt : "blue",
            rate : 110,
            available : true
            
        },
        {
            name : "Hukka",
            belt : "yellow",
            rate : 90,
            available : true
            
        }
    ];

}]);