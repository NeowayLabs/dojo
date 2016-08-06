(function () {
  'use strict';

  angular
    .module('dojo', [])
    .controller('auth', ['$scope', '$http', function ($scope, $http) {
      $scope.user = {
        login: '',
        password: ''
      };

      $scope.hitThePoint = function hitThePoint() {
        var isValid = authValidation();

        if (isValid) {
          $http
            .post('/api/v1/hit', $scope.user)
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
        }
      };

      function authValidation() {
        if (!$scope.user.login) {
          $scope.message = 'Você esqueceu de preencher o campo de login!';

          return false;
        }

        if (!$scope.user.password) {
          $scope.message = 'Você esqueceu de preencher o campo de senha!';

          return false;
        }

        return true;
      }
    }]);
})();
