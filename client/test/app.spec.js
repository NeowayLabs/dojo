describe('dojo auth controller', function () {
    var authController, $httpBackend, $rootScope;

    beforeEach(function () {
        module('dojo');

        inject(function ($controller, $injector) {
            $rootScope = $injector.get('$rootScope');
            $httpBackend = $injector.get('$httpBackend');
            authController = $controller('auth', {$scope: $rootScope});
        });
    });

    it('should exist', function () {
        expect(authController).toBeDefined();
    });

    describe('hitting the point through hitThePoint', function () {
        describe('when user fills all inputs with valid data', function () {
            beforeEach(function () {
                $rootScope = {
                    user: {login: "Morelli", password: 1337}
                };

                $httpBackend.when('POST', '/api/v1/hit').respond(200, {});
                authController.hitThePoint();
            });

            it('should send data to "ponto" API and show', function () {
                $httpBackend.expect('POST', '/api/v1/hit').respond(200, {});
                $httpBackend.flush();
            });

            fit("should show succes message", function () {
                $httpBackend.flush();
                expect(authController.$scope.message).toEqual('Você bateu o ponto com sucesso');
            });
        });

        describe('when user does not fills required inputs', function () {
            it('missing login', function () {});
            it('missing password', function () {});
        });

        describe('server errors', function () {
            it('server offline', function () {});
            it('response error', function () {});
        });
    });
});

