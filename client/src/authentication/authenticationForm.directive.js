(function () {
  'use strict';

  angular
    .module('dojo')
    .directive('authenticationForm', [function () {
      return {
        controller: 'authentication',
        restrict: 'E',
        templateUrl: 'src/authentication/authentication-form.html'
      };
    }]);
})();
