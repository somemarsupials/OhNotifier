'use strict';

(function(exports) {
  var utils = require('./utils.js');

  // string templates

  function message(text, level) {
    console.log(utils.indent(level) + text);
  };

  // test suite

  function TestSuite(desc) {
    this.desc = desc;
    this.before = [];
    this.units = [];
  };

  TestSuite.prototype.run = function(level) {
    message(this.desc, level);
    var passes = 0;
    for (var index = 0; index < this.units.length; index++) {
      passes += this.units[index].run(level + 1);
    };
    return passes;
  };

  TestSuite.prototype.copyBefore = function() {
    return this.before.slice();
  };

  TestSuite.prototype.addUnit = function(unit) {
    this.units.push(unit);
  };

  TestSuite.prototype.addBefore = function(before) {
    this.before.push(before);
  };

  TestSuite.prototype.count = function() {
    var total = 0;
    for (var index = 0; index < this.units.length; index++) {
      total += this.units[index].count();
    };
    return total;
  };

  exports.TestSuite = TestSuite;
})(this);
