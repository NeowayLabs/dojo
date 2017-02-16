angular.module('dojo.templates', [])
  .run(['$templateCache', function($templateCache) {
    $templateCache.put('src/authentication/authentication-form.html',
    '<div id="auth-form">\n' +
    '  <input id="login" type="text" placeholder="login" ng-model="user.login">\n' +
    '  <input id="password" type="password" placeholder="senha" ng-model="user.password">\n' +
    '  <button id="authConfirm" ng-click="hitThePoint()">Bater o ponto</button>\n' +
    '  <p class="message">{{message}}</p>\n' +
    '</div>\n' +
    '')
  $templateCache.put('src/clock-register/clock-register.html',
    '<div>\n' +
    '  <svg id="hitThePointBtn" ng-click="hitThePoint()"></svg>\n' +
    '  <p class="{{message.type}}" id="feedback-message">{{message.text}}</p>\n' +
    '  <ul id="daily-list">\n' +
    '    <li ng-repeat="mark in markings track by $index">{{ mark }}</li>\n' +
    '  </ul>\n' +
    '  <span>Horas trabalhadas: <strong>+ {{ day.workedHours }}</strong></span>\n' +
    '  <span>Saldo do dia: <strong>+ {{ day.balanceHours }}</strong></span>\n' +
    '</div>\n' +
    '')

  }]);
