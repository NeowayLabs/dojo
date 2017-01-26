describe('dojo clock register directive', function () {
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

    element = $compile('<clock-register></clock-register>')($rootScope);
    $rootScope.$digest();
  });

  it('should exist', function () {
    expect(element.html()).toBeDefined();
  });

  describe('hit the point button', function () {
    it('should exist', function () {
      var hitThePointBtn = element.find('#hitThePointBtn')[0];

      expect(hitThePointBtn).toBeDefined();
    });

    describe("given user is starting the day", function () {
      fit("should show empty list", function () {
        var list = element.find("#daily-list");
        console.log(list.html());
        expect(list).toBeDefined();
        expect(list.is("ul")).toBeTrue();
      })
    })

    it('should hit the point', function () {
      hitThePointBtn.click();

      expect()
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
