describe('ControllerOne', function(){

});
describe('ControllerTwo', function(){

});
describe('userFact', function(){
  var userFact, users;
  beforeEach(module('serviceapp'));
  beforeEach(function(){
    // mock the users
    module(function($provide){
      $provide.value('users', [
        {name: "one"},
        {name: "two"}
      ]);
    });
    inject(function($injector) {
      userFact = $injector.get('userFact');
      users = $injector.get('users');
    });
  });
  describe('remove', function(){
    it("should remove one item from users", function(){
      var length = users.length;
      userFact.remove(0);
      expect(users.length).toBe(length - 1);
    });
  });
});

describe('userSvc', function(){
  var userSvc, users;
  beforeEach(module('serviceapp'));
  beforeEach(function(){
    // mock the users
    module(function($provide){
      $provide.value('users', [
        {name: "one"},
        {name: "two"}
      ]);
    });
    inject(function($injector) {
      userSvc = $injector.get('userSvc');
      users = $injector.get('users');
    });
  });
  describe('remove', function(){
    it("should remove an item from users", function(){
      var length = users.length;
      userSvc.remove(0);
      expect(users.length).toBe(length - 1);
    });
  });
});

describe('Users', function(){
  var Users, $httpBackend;
  beforeEach(module('serviceapp'));
  beforeEach(function(){
    inject(function($injector) {
      $httpBackend = $injector.get('$httpBackend');
      $httpBackend
        .when('GET', 'http://jsonplaceholder.typicode.com/users')
        .respond(200, [{name:"one"}, {name:"two"}]);
      Users = $injector.get('Users');
    });
  });
  describe('getUsers', function(){
    it("should return some users", function(){
      Users.getUsers(function(response){
        expect(response.length).toBe(2);
      });
    });

  });
});
