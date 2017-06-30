/**
 * Created by yeanzhi on 17/3/28.
 */
'use strict';
//格式刷使用

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Format = function Format() {
  _classCallCheck(this, Format);

  this.currentFormat = null;
};

var format = new Format();

var _default = format;
export default _default;
;

var _temp = function () {
  if (typeof __REACT_HOT_LOADER__ === 'undefined') {
    return;
  }

  __REACT_HOT_LOADER__.register(Format, 'Format', 'src/model/format.js');

  __REACT_HOT_LOADER__.register(format, 'format', 'src/model/format.js');

  __REACT_HOT_LOADER__.register(_default, 'default', 'src/model/format.js');
}();

;