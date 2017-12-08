'use strict';

(function(exports) {
  var utils = require('./utils.js');
  var spyMaster = require('./mocks/spyMaster.js');

  // string templates

  function success(text, level) {
    utils.asColour(`${utils.indent(level)}${text}`, 'green');
  };

  function failure(text, fail, level) {
    utils.asColour(`${utils.indent(level)}${text} (${fail})`, 'red');
  };

  // unit test

  function UnitTest(desc, block, before) {
    this.desc = desc;
    this.block = block;
    this.before = before;
  };

  UnitTest.prototype.setup = function() {
    for (var index = 0; index < this.before.length; index++) {
      this.before[index]();
    };
  };

  UnitTest.prototype.run = function(level) {
    try {
      this.setup();
      this.block();
      success(this.desc, level);
      var outcome = true;
    }
    catch(error) {
      failure(this.desc, error.message, level);
      var outcome = false;
    };
    spyMaster.resetSpies();
    return outcome;
  };

  UnitTest.prototype.count = function() {
    return 1;
  };

  exports.UnitTest = UnitTest;
})(this);
