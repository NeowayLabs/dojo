'use strict';

describe('dojo auth directive', function () {
  var scope,
      element,
      view,
      $compile,
      $httpBackend;

  beforeEach(function () {
    module('dojo');
    module('dojo.templates');

    inject(function (_$compile_, $rootScope, _$httpBackend_) {
      $compile = _$compile_;
      scope = $rootScope.$new();
      $httpBackend = _$httpBackend_;
    });

    element = $compile('<authentication-form></authentication-form>')(scope);
    scope.$digest();
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

      $httpBackend.expect('POST', '/api/v1/user/new').respond(200, {});

      element.find('#authConfirm').click();

      $httpBackend.flush();
    });

    it('should show a success message', function () {
      var message = element.find('.message');
      expect(message.text()).toBe('Usuário cadastrado com sucesso!');
    });
  });
});
