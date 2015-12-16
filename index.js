/* jshint node: true */
'use strict';

module.exports = {
  name: 'ember-service-polyfill',

  included: function (app) {
    app.import('vendor/ember-service-polyfill/ember-service-polyfill.js');
  }
};
