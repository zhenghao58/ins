angular.module('Instagram')
  .factory('API', function($http) {
 
    return {
      getFeed: function() {
        return $http.get('http://localhost:3000/api/feed');
      },
      getMediaById: function(id) {
        return $http.get('http://localhost:3000/api/media/' + id);
      },
      likeMedia: function(id) {
        return $http.post('http://localhost:3000/api/like', { mediaId: id });
      },
      getAgencyList: function() {
        var params = { api_token: '159e39d2710df0222c0ec9738cd2fd6c1f42f8da'};
        return $http({
        method: 'GET', 
        url: 'http://challenge.mediamath.com/api/agencies',
        params: params
      });

      }
    }
 
  });