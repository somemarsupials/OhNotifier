'use strict';

(function(exports) {
  var utils = require('./utils.js');

  function success(text, level) {
    utils.asColour(`${utils.indent(level)}${text}`, 'green');
  };

  function failure(text, fail, level) {
    utils.asColour(`${utils.indent(level)}${text} (${fail})`, 'red');
  };

  function UnitResult(passed, desc, message) {
    this.passed = passed;
    this.desc = desc;
    this.message = message;
  };

  UnitResult.prototype.print = function(level) {
    if (this.passed) {
      success(this.desc, level);
    }
    else {
      failure(this.desc, this.message, level);
    };
  };

  UnitResult.prototype.countAll = function() {
    return 1;
  };

  UnitResult.prototype.countFailures = function() {
    return !this.passed;
  };

  exports.UnitResult = UnitResult;
})(this);
