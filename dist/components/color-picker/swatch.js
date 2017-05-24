/**
 * Created by liz
 * Email: lizhengnacl@163.com
 * Tel: 18686768624
 * Date: 16/12/7
 */

'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _class, _temp2;

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

import './index.scss';
import React, { Component, PropTypes } from 'react';

var _default = (_temp2 = _class = function (_Component) {
    _inherits(_default, _Component);

    function _default() {
        var _ref;

        var _temp, _this, _ret;

        _classCallCheck(this, _default);

        for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
        }

        return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = _default.__proto__ || Object.getPrototypeOf(_default)).call.apply(_ref, [this].concat(args))), _this), _this._handleClick = function () {
            var _this2;

            return (_this2 = _this).___handleClick__REACT_HOT_LOADER__.apply(_this2, arguments);
        }, _this._handlehover = function () {
            var _this3;

            return (_this3 = _this).___handlehover__REACT_HOT_LOADER__.apply(_this3, arguments);
        }, _temp), _possibleConstructorReturn(_this, _ret);
    }

    _createClass(_default, [{
        key: '___handleClick__REACT_HOT_LOADER__',
        value: function ___handleClick__REACT_HOT_LOADER__(e) {
            var _props = this.props,
                color = _props.color,
                onClick = _props.onClick;

            onClick(color, e);
        }
    }, {
        key: '___handlehover__REACT_HOT_LOADER__',
        value: function ___handlehover__REACT_HOT_LOADER__(e) {
            var _props2 = this.props,
                color = _props2.color,
                onHover = _props2.onHover;

            onHover(color, e);
        }
    }, {
        key: 'render',
        value: function render() {
            var color = this.props.color;

            return React.createElement('div', { className: 'xm-color-picker-swatch',
                onClick: this._handleClick,
                onMouseEnter: this._handlehover,
                style: { backgroundColor: color }
            });
        }
    }]);

    return _default;
}(Component), _class.defaultProps = {
    color: 'red',
    onClick: function onClick(color, e) {},
    onHover: function onHover(color, e) {}
}, _class.propTypes = {
    color: PropTypes.string,
    onClick: PropTypes.func
}, _temp2);

export default _default;
;

var _temp3 = function () {
    if (typeof __REACT_HOT_LOADER__ === 'undefined') {
        return;
    }

    __REACT_HOT_LOADER__.register(_default, 'default', 'src/components/color-picker/swatch.js');
}();

;