'use strict';

(function(exports) {
  var results = require('../results/results.js');
  var spyMaster = require('../mocks/spyMaster.js');

  function Unit(desc, block, before) {
    this.desc = desc;
    this.block = block;
    this.before = before;
  };

  Unit.prototype.setup = function() {
    for (var index = 0; index < this.before.length; index++) {
      this.before[index]();
    };
  };

  Unit.prototype.run = function() {
    try {
      this.setup();
      this.block();
      var result = new results.UnitResult(true, this.desc);
    }
    catch(error) {
      var result = new results.UnitResult(false, this.desc, error.message);
    };
    spyMaster.resetSpies();
    return result;
  };

  exports.Unit = Unit;
})(this);
