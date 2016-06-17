describe('Users Factory', function(){
  var Users;

  var userList = [
    {
      id: '1',
      name: 'Jane',
      role: 'Designer',
      localion: 'New York',
      twitter: 'gijane'
    },
    {
      id: '2',
      name: 'Bob',
      role: 'Developer',
      localion: 'New York',
      twitter: 'billubob'
    },
    {
      id: '3',
      name: 'Jim',
      role: 'Designer',
      localion: 'Chicago',
      twitter: 'jimlhe'
    },
  ];

  var singleUser = {
    id: '2',
    name: 'Bob',
    role: 'Developer',
    localion: 'New York',
    twitter: 'billubob'
  };

  beforeEach(angular.mock.module('api.users'));

  beforeEach(inject(function(_Users_){
    Users = _Users_;
  }));

  it('should exist', function(){
    expect(Users).toBeDefined();
  });

  describe('.all()', function(){
    it('should exist', function(){
      expect(Users.all).toBeDefined(userList);
    });
  });

  describe('findById()', function(){
    if('shoul exist', function(){
      expect(Users.findById).toBeDefined();
    })

    it('should exist', function(){
      expect(Users.findById('2')).toBeDefined(singleUser);
    });

    it('should return undefined if the user cannot be found', function(){
      expect(Users.findById('ASD')).not.toBeDefined();
    });
  });




});
