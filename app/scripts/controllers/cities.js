'use strict';

var Cities;

Cities = (function() {

  function Cities(City) {
    this.city = City
    this.index();
  }

  Cities.prototype = {
    
    index: function() {
      this.city.index();
    },
    
    show: function(city) {
      this.city.show(city);
    }
  };

  return Cities;

})();


angular.module('sandboxApp').controller('Cities', ['City', Cities]);
