angular.module('dojo.templates', [])
  .run(['$templateCache', function($templateCache) {
    $templateCache.put('client/src/authentication/authentication-form.html',
    '<div id="auth-form">\n' +
    '  <input id="login" type="text" placeholder="login" ng-model="login">\n' +
    '  <input id="password" type="password" placeholder="senha" ng-model="user.password">\n' +
    '  <button id="authConfirm" ng-click="hitThePoint()">Bater o ponto</button>\n' +
    '  <p class="message">{{message}}</p>\n' +
    '</div>\n' +
    '')

  }]);
