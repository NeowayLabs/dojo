'use strict';

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

    element = $compile('<authentication-form></authentication-form>')($rootScope);
    $rootScope.$digest();
  });

  it('should exist', function () {
    expect(element.html()).toBeDefined();
  });

  describe('when user fills all inputs with valid data and clicks ok', function () {
    beforeEach(function () {
      var loginInput = element.find('#login');
      var passwordInput = element.find('#password');

      loginInput.val('Morelli').trigger('input');
      passwordInput.val('1337').trigger('input');

      $httpBackend.expect('POST', '/api/v1/hit').respond(200, {});

      element.find('#authConfirm').click();

      $httpBackend.flush();
    });

    it('should show a success message', function () {
      var message = element.find('.message');
      expect(message.text()).toBe('Você bateu o ponto com sucesso');
    });
  });
});
