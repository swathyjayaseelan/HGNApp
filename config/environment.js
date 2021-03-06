/* jshint node: true */

module.exports = function (environment) {
  var ENV = {
    modulePrefix: 'hgnapp',
    environment: environment,
    rootURL: '/',
    locationType: 'hash',
    webServer: " https://hgn-rest.azurewebsites.net/api",
    //webServer: "http://localhost:4500/api",
    REQUEST_AUTHKEY: "Authorization",
    TOKEN_KEY: "token",
    contentSecurityPolicy: {
      'connect-src': "'self' https://hgn-rest.azurewebsites.net/api"
    },
    EmberENV: {
      FEATURES: {
        // Here you can enable experimental features on an ember canary build
        // e.g. 'with-controller': true
      }
    },

    APP: {
      // Here you can pass flags/options to your application instance
      // when it is created

    }
  };

  if (environment === 'development') {
    // ENV.APP.LOG_RESOLVER = true;
    // ENV.APP.LOG_ACTIVE_GENERATION = true;
    // ENV.APP.LOG_TRANSITIONS = true;
    // ENV.APP.LOG_TRANSITIONS_INTERNAL = true;
    // ENV.APP.LOG_VIEW_LOOKUPS = true;
  }

  if (environment === 'test') {
    // Testem prefers this...
    ENV.rootURL = '/';
    ENV.locationType = 'none';

    // keep test console output quieter
    ENV.APP.LOG_ACTIVE_GENERATION = false;
    ENV.APP.LOG_VIEW_LOOKUPS = false;

    ENV.APP.rootElement = '#ember-testing';
    ENV.APP.autoboot = false;
  }

  if (environment === 'production') {

  }

  return ENV;
};
