'use strict';

const stampit = require('stampit');
const Suite = require('./suite');
const EventEmittable = require('../core/base/eventemittable');

const UI = stampit({
  methods: {
    createSuite(suiteDef) {
      const suite = Suite(suiteDef);
      this.emit('suite', suite);
      return suite;
    },
    createTest() {

    },
    afterTests() {

    },
    beforeTests() {

    },
    afterEachTest() {

    },
    beforeEachTest() {

    },
    ignoreSuite() {

    },
    ignoreTest() {

    },
    onlySuite() {

    },
    onlyTest() {

    }
  }
})
  .compose(EventEmittable);

module.exports = UI;
