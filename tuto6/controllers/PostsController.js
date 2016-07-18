app.controller('PostsController', function($scope, PostsService) {
  $scope.loading = true;
  PostsService.getPosts().then( function(posts) {
    $scope.loading = false;
    $scope.posts = posts;
  }, function(msg) {
    $scope.loading = false;
    alert(msg);
  });
});
