
app.controller('CommentsController', function($scope, PostsService, $routeParams) {
  $scope.loading = true;
  PostsService.getPost($routeParams.id).then( function(post) {
    $scope.loading = false;
    $scope.title = post.name;
    $scope.comments = post.comments;
  }, function(msg) {
    $scope.loading = false;
  });
});
