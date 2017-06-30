/**
 * Created by yeanzhi on 17/4/4.
 */
'use strict';

var _desc, _value, _class, _descriptor;

function _initDefineProp(target, property, descriptor, context) {
  if (!descriptor) return;
  Object.defineProperty(target, property, {
    enumerable: descriptor.enumerable,
    configurable: descriptor.configurable,
    writable: descriptor.writable,
    value: descriptor.initializer ? descriptor.initializer.call(context) : void 0
  });
}

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) {
  var desc = {};
  Object['ke' + 'ys'](descriptor).forEach(function (key) {
    desc[key] = descriptor[key];
  });
  desc.enumerable = !!desc.enumerable;
  desc.configurable = !!desc.configurable;

  if ('value' in desc || desc.initializer) {
    desc.writable = true;
  }

  desc = decorators.slice().reverse().reduce(function (desc, decorator) {
    return decorator(target, property, desc) || desc;
  }, desc);

  if (context && desc.initializer !== void 0) {
    desc.value = desc.initializer ? desc.initializer.call(context) : void 0;
    desc.initializer = undefined;
  }

  if (desc.initializer === void 0) {
    Object['define' + 'Property'](target, property, desc);
    desc = null;
  }

  return desc;
}

function _initializerWarningHelper(descriptor, context) {
  throw new Error('Decorating class property failed. Please ensure that transform-class-properties is enabled.');
}

import { observable } from 'mobx';
var Help = (_class = function Help() {
  _classCallCheck(this, Help);

  _initDefineProp(this, 'hotKeysDialog', _descriptor, this);
}, (_descriptor = _applyDecoratedDescriptor(_class.prototype, 'hotKeysDialog', [observable], {
  enumerable: true,
  initializer: function initializer() {
    return false;
  }
})), _class);

var help = new Help();
var _default = help;
export default _default;
;

var _temp = function () {
  if (typeof __REACT_HOT_LOADER__ === 'undefined') {
    return;
  }

  __REACT_HOT_LOADER__.register(Help, 'Help', 'src/model/help.js');

  __REACT_HOT_LOADER__.register(help, 'help', 'src/model/help.js');

  __REACT_HOT_LOADER__.register(_default, 'default', 'src/model/help.js');
}();

;