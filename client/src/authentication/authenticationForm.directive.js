(function () {
  'use strict';

  angular
    .module('dojo')
    .directive('authenticationForm', [function () {
      // Runs during compile
      return {
        controller: 'authentication',
        restrict: 'E', // E = Element, A = Attribute, C = Class, M = Comment
        templateUrl: 'authentication-form.html',
        link: function ($scope, iElm, iAttrs, controller) {

        }
      };
    }]);
})();
