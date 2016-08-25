angular.module('dojo.templates', [])
  .run(['$templateCache', function($templateCache) {
    $templateCache.put('client/src/authentication/authentication-form.html',
    '<div>\n' +
    '  <input type="text" placeholder="login" ng-model="login">\n' +
    '  <input type="password" placeholder="senha" ng-model="password">\n' +
    '  <button ng-click="hitThePoint()">Bater o ponto</button>\n' +
    '  <p>{{message}}</p>\n' +
    '</div>\n' +
    '')

  }]);
