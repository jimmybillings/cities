'use strict';

var City;

City = (function() {

  function City($resource) {
    this.$resource = $resource
    this.list = {}
    this.detail = {}
    this.cityResource = this.$resource('http://private-anon-ae8923da2-codetestapi.apiary-mock.com/cities/:id', {id: '@id'});
  };

  City.prototype = {
    
    index: function() {
      this.cityResource.get().$promise.then( this.indexSucess(this), this.fail(this) )   
    },

    show: function(id) {
      this.cityResource.get({id: id}).$promise.then( this.showSucess(this), this.fail(this) )
    },

    indexSucess: function(self){
      return function(response) {
        self.list = response;
      };
    },

    showSucess: function(self){
      return function(response) {
        self.detail = response
      };
    },

    fail: function(self){
      return function(error) {
        console.log(error);
      };
    },
  };

  return City;

})();

angular.module('sandboxApp').service('City', ['$resource', City]);

