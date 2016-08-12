describe('dojo auth directive', function () {
  var authenticationForm, $httpBackend, $scope;

  beforeEach(function () {
    module('dojo');
    module('src/authentication/authentication-form.html');

    inject(function ($compile, $injector, $rootScope) {
      $scope = $rootScope.$new();
      $httpBackend = $injector.get('$httpBackend');
      authenticationForm = $compile('<authentication-form/>')($scope);
    });

    console.log($scope);
  });

  it('should exist', function () {
    $scope.$digest();
    expect(authenticationForm).toBeDefined();
  });
});

