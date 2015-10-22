var app = angular.module('serviceapp', []);

app.controller('ControllerOne', ['$scope', 'myName', 'users', 'userFact', 'Users', function($scope, myName, users, userFact, Users){
  var c1 = this;

  Users.getUsers(function(res){
      c1.users = res;
  });
  c1.data = myName;
  c1.removeUser = function(index){
    userFact.remove(index);
  };

}]);

app.controller('ControllerTwo', ['$scope', 'myName', 'users', 'userSvc', function($scope, myName, users, userSvc){
  var c2 = this;

  c2.users = users;
  c2.data = myName;
  c2.removeUser = function(index){
    userSvc.remove(index);
  };

}]);

app.value('myName', {
  name: 'JaZahn Clevenger'
});

app.factory('userFact', ['users', function(users){
  var remove = function(index){
    users.splice(index, 1);
  };
  return {
    remove: remove
  };
}]);

app.service('userSvc', ['users', function(users){
  this.remove = function(index){
    users.splice(index, 1);
  };
}]);

app.factory('Users', ['$http', function($http){
  return {
    getUsers: function(callback){
      $http.get('http://jsonplaceholder.typicode.com/users').success(callback);
    }
  };
}]);
