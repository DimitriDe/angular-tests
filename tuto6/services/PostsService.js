app.service('PostsService', function($http, $q) {
  var that = this;
  that.posts = false;

  that.getPosts = function(data, status) {
    var deferred = $q.defer();
    if(that.posts != false) {
      deferred.resolve(that.posts);
    } else {
      $http.get('tuto6/posts.json')
        .success( function(data, status) {
          that.posts = data;
          deferred.resolve(that.posts);
        })
        .error( function() {
          deferred.reject('Impossible de récupérer les données');
        });
    }

    return deferred.promise;
  }

  that.getPost = function(id) {
    var deferred = $q.defer();
    var post = {};
    var posts = this.getPosts().then( function(posts) {
      angular.forEach( posts, function(value, key) {
        if(value.id == id) {
          post = value;
        }
      });
      deferred.resolve(post);
    }, function(msg) {
      deferred.reject(msg);
    });
    return deferred.promise;
  }

});
