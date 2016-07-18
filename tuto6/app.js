var app = angular.module('myApp',['ngRoute']);

app.config(function($routeProvider) {
  $routeProvider.when('/', {templateUrl : 'tuto6/partials/home.html', controller: 'PostsController'});
  $routeProvider.when('/comments/:id', {templateUrl : 'tuto6/partials/comments.html', controller : 'CommentsController'});
  $routeProvider.otherwise({redirectTo : '/'});
});
