'use strict';

(function(exports) {
  var COLOURS = {
    'red': '\x1b[31m',
    'green': '\x1b[32m',
    'none': '\x1b[0m',
  }

  function indent(level) {
    return '  '.repeat(level);
  };

  function asColour(text, colour) {
    var codeColour = COLOURS[colour || 'none'];
    console.log(codeColour, text, COLOURS.none);
  };

  exports.indent = indent;
  exports.asColour = asColour;
})(this);
