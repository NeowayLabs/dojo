
module.exports = function(config) {
  config.set({
    basePath: '',
    frameworks: ['jasmine'],
    files: [
      {pattern: 'node_modules/angular/angular.js', watched: false},
      {pattern: 'node_modules/angular-mocks/angular-mocks.js', watched: false},
      'client/mod1/mod1.controller.js',
      'client/mod1/mod1.controller.spec.js'
    ],
    exclude: [],
    preprocessors: {},
    reporters: ['progress'],
    port: 9876,
    colors: true,
    logLevel: config.LOG_INFO,
    autoWatch: true,
    browsers: ['PhantomJS'],
    singleRun: false,
    concurrency: Infinity
  });
}
