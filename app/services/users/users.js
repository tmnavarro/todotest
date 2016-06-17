(function(){
  'use strict';

  angular.module('api.users', [])
    .factory('Users', function(){
      var Users = {};

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

      Users.all = function(){
        return userList;
      };

      Users.findById = function(id){
        return userList.find(function(user){
          return user.id === id
        })
      };

      return Users;
    })
}())
