describe('dojo auth directive', function () {
  var authenticationForm,
      $compile,
      $rootScope,
      $httpBackend,
      $templateCache,
      element,
      view;

  beforeEach(function () {
    module('dojo');
    module('dojo.templates');

    inject(function (_$compile_, _$rootScope_, _$httpBackend_, _$templateCache_) {
      $compile = _$compile_;
      $rootScope = _$rootScope_;
      $httpBackend = _$httpBackend_;
      $templateCache = _$templateCache_;
    });
  });

  it('should exist', function () {
    element = $compile ('<authentication-form></authentication-form>')($rootScope);
    $rootScope.$digest();
    var s = element.html();
    expect(s).toBeDefined();
  });
  //TODO: Interact & test view behaviour
});
