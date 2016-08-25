(function () {
  'use strict';

  angular
    .module('dojo')
    .directive('authenticationForm', [function () {
      return {
        controller: 'authentication',
        restrict: 'E',
        templateUrl: 'client/src/authentication/authentication-form.html'
      };
    }]);
})();
