angular.module('starter.services')
  .factory('Discussions', function ($resource) {
    var resource = $resource('http://forum.growth.ren/' + 'api/discussions/:id', {id: '@id'}, {
      update: {method: 'PUT'},
      all: {method: 'GET'}
    });

    return resource;
  });
