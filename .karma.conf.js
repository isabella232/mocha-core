'use strict';

/* eslint import/no-require:0 */
var globby = require('globby');

module.exports = function (config) {
  config.set({
    frameworks: [
      'source-map-support',
      'browserify',
      'mocha'
    ],
    files: globby.sync([
      'node_modules/core-js/client/core.js',
      './src/**/*.js',
      './test/**/*.js',
      '!./test/unit/plugins/resolver.spec.js',
      '!./src/ui/helpers/execution-context.cjs.js',
      '!./src/plugins/resolver.js',
      '!./src/options/rc.js'
    ]),
    preprocessors: {
      './src/**/*.js': ['browserify'],
      './test/**/*.js': ['browserify']
    },
    browserify: {
      debug: true,
      transform: [
        [
          'babelify',
          {
            sourceMapRelative: __dirname
          }
        ]
      ]
    },
    reporters: [
      'mocha-clean'
    ],
    mochaReporter: {
      output: 'autowatch'
    },
    logLevel: 'WARN',
    autoWatch: true,
    browsers: ['PhantomJS'],
    singleRun: false
  });
};
