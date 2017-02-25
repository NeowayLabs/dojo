describe('dojo clock register directive', function () {
  var authenticationForm,
      $compile,
      $rootScope,
      $httpBackend,
      $templateCache,
      $timeout,
      element,
      view,
      hitThePointBtn;

  beforeEach(function () {
    module('dojo');
    module('dojo.templates');

    inject(function (_$compile_, _$timeout_, _$rootScope_, _$httpBackend_, _$templateCache_) {
      $compile = _$compile_;
      $timeout = _$timeout_;
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

  describe('hitting the point', function () {
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
        var firstItem;

        $httpBackend.expect('POST', '/api/v1/clock/hit').respond(200, {time: '16:20:00'});
        hitThePointBtn.click();
        $httpBackend.flush();

        firstItem = element.find('#daily-list :eq(0)');

        expect(firstItem.text()).toBe('16:20:00');
      });

      it('error paths?', function () {
        // TODO
      });

      describe('multiple clicks', function () {
        beforeEach(function () {
          // Impedir chamar a parada de bater o ponto em menos de um minuto
          $httpBackend.when('POST', '/api/v1/clock/hit').respond(200, {time: '16:20:00'});

          hitThePointBtn.click();
          $httpBackend.flush();

          hitThePointBtn.click();
          $httpBackend.flush();
        });

        it('should ignore multiple clicks at the same second', function () {
          var feedbackMessage;
          feedbackMessage = element.find('#feedback-message');

          expect(feedbackMessage).toBeDefined();
          expect(feedbackMessage.text()).toBe('Você é um banana!');
          expect(feedbackMessage.hasClass('error')).toBe(true);

          // TODO: Message should disappear after some time...
        });

        it('should remove the warning message after 10s', function () {
          feedbackMessage = element.find('#feedback-message');
          expect(feedbackMessage.text()).toBe('Você é um banana!');

          // triggers all $timeout function calls
          $timeout.flush()

          feedbackMessage = element.find('#feedback-message');
          expect(feedbackMessage[0]).toBeUndefined();
        });
      });
    });

    it('should handle "corujão" situations', function () {
    });

    it('should use browser native notification', function () {
    });
  });
});
