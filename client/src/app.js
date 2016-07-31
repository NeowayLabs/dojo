(function () {
  'use strict';

  angular
    .module('dojo', [])
    .controller('auth', ['$scope', '$http', function ($scope, $http) {
      $scope.user = {
        login: '',
        password: ''
      };

      this.hitThePoint = function hitThePoint() {
        $http
        .post('/api/v1/hit', $scope.user)
        .then(function (data) {
          $scope.message = 'Você bateu o ponto com sucesso';
          console.log($scope);
        }).catch(function () {
          $scope.message = 'BIIIIIRRL';
        });
      };
    }]);
})()
