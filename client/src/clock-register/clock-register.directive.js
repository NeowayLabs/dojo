(function () {
  'use strict';

  angular
    .module('dojo')
    .directive('clockRegister', [function () {
      return {
        controller: 'clockRegister',
        restrict: 'E',
        templateUrl: 'src/clock-register/clock-register.html'
      };
    }]);
})();
