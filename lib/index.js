
var assert = require('assert');
var util = require('./util');

module.exports = function (Component) {
  assert(Component, 'expected a component');

  return { render: render };

  // TODO: how to test other lifecycle methods?

  function render(overrides) {
    var renderFunction = (typeof Component === 'function' ? Component : Component.render)

    assert(renderFunction, 'expected a render function');

    return renderFunction(util.normalize(Component, overrides), util.noop);
  }
};
