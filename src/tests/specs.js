describe('ControllerOne', function(){
  it("should be true", function(){
    expect(true).toBe(true);
  });
});
describe('ControllerTwo', function(){

});
describe('UserFact', function(){

  describe('remove', function(){
    var userFact, users;
    beforeEach(module('serviceapp'));
    beforeEach(function(){
      // mock the users
      module(function($provide){
        $provide.value('Users', [
          {name: "one"},
          {name: "two"}
        ]);
      });
      inject(function($injector) {
        userFact = $injector.get('UserFact');
        users = $injector.get('Users');
      });
    });
    it("should remove one item from users", function(){
      var length = users.length;
      userFact.remove(0);
      expect(users.length).toBe(length - 1);
    });
  });
});

describe('UserSvc', function(){
  var userSvc, users;
  beforeEach(module('serviceapp'));
  beforeEach(function(){
    // mock the users
    module(function($provide){
      $provide.value('Users', [
        {name: "one"},
        {name: "two"}
      ]);
    });
    inject(function($injector) {
      userSvc = $injector.get('UserSvc');
      users = $injector.get('Users');
    });
  });
  it("should remove one item from users", function(){
    var length = users.length;
    userSvc.remove(0);
    expect(users.length).toBe(length - 1);
  });
});

describe('UsersHttp', function(){
  var $httpBackend, usersHttp;
  beforeEach(module('serviceapp'));
  beforeEach(function(){
    inject(function($injector){
      $httpBackend = $injector.get('$httpBackend');
      usersHttp = $injector.get('UsersHttp');
    });
    $httpBackend
      .when('GET', '/users.json')
      .respond(200, [{name:"one"}, {name:"two"}]);
  });
  describe('getUsers', function(){
    it("should return some users", function(){
      var startingLength = usersHttp.users.length;
      usersHttp.getUsers(function(){
        expect(usersHttp.users.length).toBeGreaterThan(startingLength);        
      });
    });

  });
});
