(function () {
  'use strict';

  angular
    .module('dojo')
    .directive('clockRegister', [function () {
      return {
        controller: 'clockRegister',
        restrict: 'E',
        templateUrl: 'client/src/clock-register/clock-register.html'
      };
    }]);
})();
