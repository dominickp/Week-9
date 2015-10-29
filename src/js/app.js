var app = angular.module('serviceapp', []);

app.controller('ControllerOne', ['NameVal', 'Users', 'UserFact', function(NameVal, Users, UserFact){
  var c1 = this;
  c1.name = NameVal;
  c1.users = Users;

  c1.removeUser = function(index){
    UserFact.remove(index);
  };

}]);

app.controller('ControllerTwo', ['NameVal', 'Users', 'UserSvc', function(NameVal, Users, UserSvc){
  var c2 = this;
  c2.name = NameVal;
  c2.users = Users;

  c2.removeUser = function(index){
    UserSvc.remove(index);
  };

}]);

app.value('NameVal', {name: "JaZahn Clevenger"});

app.factory('UserFact', ['Users', function(Users){
  var remove = function(index){
    Users.splice(index, 1);
  };
  return {
    remove: remove
  };
}]);

app.service('UserSvc', ['Users', function(Users){
  this.remove = function(index){
    Users.splice(index, 1);
  };
}]);
