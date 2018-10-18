angular.module('starter.services', [])
.factory('ProjectsService', function() {
  return {

    index : function(http) {
      return http.get('http://www.labelo.fr:3000/projects')
      .success(function(response) {
        return response.data;
      })
    },

    show : function(http, id) {
      return http.get('http://www.labelo.fr:3000/projects/' + id)
      .success(function(response) {
        return response.data;
      })
    },

    create : function(http, attributes) {
      headers = { headers: { 'Content-Type': 'application/x-www-form-urlencoded' } }
      return http.post('http://www.labelo.fr:3000/projects/', attributes, headers)
      .success(function(response) {
        return response.data;
      })
    }
  }
});
