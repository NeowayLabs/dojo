(function () {
  'use strict';

  angular
    .module('dojo')
    .controller('clockRegister', ['$scope', '$http', function ($scope, $http) {
      $scope.hitThePoint = function hitThePoint() {
        $http
          .post('/api/v1/clock/hit', $scope.user)
          .then(function (data) {
            $scope.message = 'Você bateu o ponto com sucesso';
          }).catch(function (error) {
            var status = error.status;

            switch (error.status) {
              case 401: {
                $scope.message = error.message || 'Houve algum problema na autenticação do seus dados.';
                break;
              }

              case 404: {
                $scope.message = error.message || 'Servidor offline.';
                break;
              }

              default: {
                $scope.message = error.message || 'Aconteceu algum erro com o servidor :(';
              }
            }
          });
      };
    }]);
})();
