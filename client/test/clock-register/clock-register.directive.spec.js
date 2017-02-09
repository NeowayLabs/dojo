describe('dojo clock register directive', function () {
  var authenticationForm,
      $compile,
      $rootScope,
      $httpBackend,
      $templateCache,
      element,
      view,
      hitThePointBtn;

  beforeEach(function () {
    module('dojo');
    module('dojo.templates');

    inject(function (_$compile_, _$rootScope_, _$httpBackend_, _$templateCache_) {
      $compile = _$compile_;
      $rootScope = _$rootScope_;
      $httpBackend = _$httpBackend_;
      $templateCache = _$templateCache_;
    });

    element = $compile('<clock-register></clock-register>')($rootScope);
    $rootScope.$digest();
  });

  it('should exist', function () {
    expect(element.html()).toBeDefined();
  });

  fdescribe('hitting the point', function () {
    beforeEach(function () {
      hitThePointBtn = element.find('#hitThePointBtn');
    });

    it('should exist a button', function () {
      expect(hitThePointBtn[0]).toBeDefined();
    });

    describe('given user is starting the day', function () {
      it('should show empty list', function () {
        var list = element.find('#daily-list');
        expect(list[0]).toBeDefined();
      });

      it('after clicking the button, should show the time in the list', function () {
        $httpBackend.expect('POST', '/api/v1/clock/hit').respond(200, {time: '16:20:00'});
        hitThePointBtn.click();
        $httpBackend.flush();

        var firstItem = element.find('#daily-list :eq(0)');
        expect(firstItem.text()).toBe('16:20:00');
      });

      // TODO: to be continued
    });

    it('should ignore multiple clicks at the same second', function () {
      // Impedir chamar a parada de bater o ponto em menos de um minuto
    });

    it('should prevent multiple clicks at the same minute', function () {
      // Impedir chamar a parada de bater o ponto em menos de um minuto
    });


    it('should handle "corujão" situations', function () {
    });

    it('should use browser native notification', function () {
    });
  });
});
