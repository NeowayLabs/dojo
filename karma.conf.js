module.exports = function (config) {
  config.set({
    basePath: '',
    frameworks: ['jasmine'],

    files: [
      {pattern: 'node_modules/angular/angular.js', watched: false},
      {pattern: 'node_modules/angular-mocks/angular-mocks.js', watched: false},
      'client/src/**/*.js',
      'client/test/**/*.js',
      'client/**/*.html'
    ],
    exclude: [],

    reporters: ['mocha', 'html'],

    mochaReporter: { // info at https://github.com/litixsoft/karma-mocha-reporter
      output: 'autowatch'
    },

    htmlReporter: { // info at https://github.com/dtabuenc/karma-html-reporter
      outputDir: 'client/test/reports',
      namedFiles: true,
      pageTitle: 'Dojo App Specs',
      urlFriendlyName: true,
      reportName: 'spec-results',
      preserveDescribeNesting: true
    },

    port: 9876,
    colors: true,
    logLevel: config.LOG_INFO,
    autoWatch: true,
    browsers: ['PhantomJS'],
    singleRun: false,
    concurrency: Infinity
  });
}
