var myApp=angular.module("myModule",['ngRoute']);
myApp.config(["$routeProvider", function ($routeProvider) 
{
	$routeProvider
	.when('/singlepageapplication',{
		template:"<h1 style='color:pink'> this is singlepageapplication </h1>"
	})
	.when('/home',{
		template:"we are displaying the static data of the page"

	})
	.when('/profile',{	
		templateUrl:'profile.html',
	})
	.when('/users',{
		templateUrl:'users.html',
		controller:'userController'
	})
	.when('/error',{
		template:'Invalide url. Please try again.. <a href="#/home">Take me to home page</a>'
	})
	.when('/users/:id',
	{
    templateUrl:'users_details.html',
    controller:'userDetailsController'
    })
	.otherwise({
		redirectTo:'/error'
	})
}]);
myApp.controller('userController',function($scope,$rootScope){
	$scope.profile="my name is manasa, i'm 26, from us";
	$scope.users_obj=[
	{'name':'manasa','email':'manasa@gmail.com','location':'us'},
	{'name':'venu','email':'venu@gmail.com','location':'us'},
	{'name':'haritha','email':'haritha@gmail.com','location':'india'}
	];
	$rootScope.users = $scope.users_obj;
});

my_app.controller('userDetailsController', function($scope, $routeParams, $rootScope) 
{
  $scope.user_details = $rootScope.users[$routeParams.id];

});
