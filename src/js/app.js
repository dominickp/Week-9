var app = angular.module('serviceapp', []);

app.controller('ControllerOne', ['NameVal', 'Users', 'UserFact', function(NameVal, Users, UserFact){
  var c1 = this;
  c1.nameVal = NameVal;
  c1.users = Users;

  c1.removeUser = function(index){
    UserFact.remove(index);
  };

}]);

app.controller('ControllerTwo', ['NameVal', 'Users', 'UserFact', function(NameVal, Users, UserFact){
  var c2 = this;
  c2.nameVal = NameVal;
  c2.users = Users;


}]);

app.value('NameVal', {name: "JaZahn"});

app.factory('UserFact', ['Users', function(Users){
  var remove = function(index){
    Users.splice(index, 1);
  };
  return {
    remove: remove
  };
}]);
