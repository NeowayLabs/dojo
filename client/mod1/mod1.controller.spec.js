/* globals inject, config */
'use strict';

describe('fistController', function () {
    var fistController;

    beforeEach(function () {
        module('dojo.mod1');

        inject(function ($controller) {
            fistController = $controller('firstController');
        });
    });

    it('should pass', function () {
        console.log('BOOOORA');
        expect(fistController).toBeDefined();
    });
});