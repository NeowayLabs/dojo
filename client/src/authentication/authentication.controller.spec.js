describe('dojo auth controller', function () {
  var authController;
  var $httpBackend;
  var $scope = {};

  beforeEach(function () {
    module('dojo');

    inject(function ($controller, $injector) {
      $scope = {};
      $httpBackend = $injector.get('$httpBackend');
      authController = $controller('authentication', {$scope: $scope});
    });
  });

  it('should exist', function () {
    expect(authController).toBeDefined();
  });

  describe('registering an user', function () {
    describe('when user fills all inputs with valid data', function () {
      beforeEach(function () {
        $scope.user = {login: "Morelli", password: 1337};
        $httpBackend.when('POST', '/api/v1/user/new').respond(200, {});
        $scope.hitThePoint();
      });

      it('should send data to user API', function () {
        $httpBackend.expect('POST', '/api/v1/user/new').respond(200, {});
        $httpBackend.flush();
      });

      it("should show success message", function () {
        $httpBackend.flush();
        expect($scope.message).toEqual('Usuário cadastrado com sucesso!');
      });
    });

    describe('when user does not fills required inputs', function () {
      beforeEach(function () {
        $scope.user = {};
      });

      it('missing login', function () {
        $scope.user.login = "";
        $scope.user.password = "1337";
        $scope.hitThePoint();
        expect($scope.message).toEqual('Você esqueceu de preencher o campo de login!');
      });

      it('missing password', function () {
        $scope.user.login = "Morelli";
        $scope.user.password = "";
        $scope.hitThePoint();
        expect($scope.message).toEqual('Você esqueceu de preencher o campo de senha!');
      });
    });

    describe('server errors', function () {
      beforeEach(function () {
        $scope.user = {login: "Morelli", password: 1337};
      });

      it('response auth error', function () {
        $httpBackend.when('POST', '/api/v1/user/new').respond(401, 'Houve algum problema na autenticação do seus dados.');
        $scope.hitThePoint();
        $httpBackend.flush();
        expect($scope.message).toEqual('Houve algum problema na autenticação do seus dados.');
      });

      it('server offline', function () {
        $httpBackend.when('POST', '/api/v1/user/new').respond(404, {});
        $scope.hitThePoint();
        $httpBackend.flush();
        expect($scope.message).toEqual('Servidor offline.');
      });

      it('response error', function () {
        $httpBackend.when('POST', '/api/v1/user/new').respond(500, {});
        $scope.hitThePoint();
        $httpBackend.flush();
        expect($scope.message).toEqual('Aconteceu algum erro com o servidor :(');
      });
    });
  });
});
