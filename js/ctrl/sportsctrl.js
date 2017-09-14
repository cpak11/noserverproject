angular.module('cndapp').controller('sportsctrl', function($scope, cndserv){

  // var promise = cndserv.getsports();
  // promise.then(function(data){
  //   $scope.getsports = data;
  //   console.log($scope.getsports);
  // })
  cndserv.getSports().then(function(response) {
    console.log(response);
    $scope.gs = response.articles;
  })
});
