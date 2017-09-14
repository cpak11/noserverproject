angular.module('cndapp').service('cndserv', function($http, $q){


  // var deferred = $q.defer();
  // $http.get('https://newsapi.org/v1/articles?source=espn&sortBy=top&apiKey=7bead52a24814cf790e5d68602838fd2').then(function(data){
  //   deferred.resolve(data);
  // })
  // this.getsports = function(){
  //   return deferred.promises;
  // }
  this.getSports = function() {
    return $http({
      method: "GET",
      url: 'https://newsapi.org/v1/articles?source=espn&sortBy=top&apiKey=7bead52a24814cf790e5d68602838fd2',
    }).then(function(response) {
      return response.data;
    })
  }



})
