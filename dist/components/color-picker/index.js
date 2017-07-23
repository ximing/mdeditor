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
import Block from './block';
import Default from './default';
import classnames from 'classnames';
import { inArea, getFromLocalStorage, setIntoLocalStorage, updateDefaultColors } from './tools';
import { COLORS } from './static';

var _default = (_temp2 = _class = function (_Component) {
    _inherits(_default, _Component);

    function _default() {
        var _ref;

        var _temp, _this, _ret;

        _classCallCheck(this, _default);

        for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
        }

        return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = _default.__proto__ || Object.getPrototypeOf(_default)).call.apply(_ref, [this].concat(args))), _this), _this.state = {
            color: '#000000',
            isHide: true,
            recentlyUsedColors: ['#000000'],
            id: 'colorPicker' + Math.floor(Math.random() * 10000).toString(16)
        }, _this._handleClick = function () {
            var _this2;

            return (_this2 = _this).___handleClick__REACT_HOT_LOADER__.apply(_this2, arguments);
        }, _this._handleHover = function () {
            var _this3;

            return (_this3 = _this).___handleHover__REACT_HOT_LOADER__.apply(_this3, arguments);
        }, _this._handleIconClick = function () {
            var _this4;

            return (_this4 = _this).___handleIconClick__REACT_HOT_LOADER__.apply(_this4, arguments);
        }, _this._handleAreaClick = function () {
            var _this5;

            return (_this5 = _this).___handleAreaClick__REACT_HOT_LOADER__.apply(_this5, arguments);
        }, _temp), _possibleConstructorReturn(_this, _ret);
    }

    _createClass(_default, [{
        key: 'componentDidMount',
        value: function componentDidMount() {
            document.addEventListener('click', this._handleAreaClick, false);
            if (getFromLocalStorage('_xmColorPickerDefaultColors').length > 0) {
                this.setState({
                    recentlyUsedColors: getFromLocalStorage('_xmColorPickerDefaultColors')
                });
            }
        }
    }, {
        key: 'componentWillUnmount',
        value: function componentWillUnmount() {
            document.removeEventListener('click', this._handleAreaClick, false);
            setIntoLocalStorage('_xmColorPickerDefaultColors', this.state.recentlyUsedColors);
        }
    }, {
        key: '___handleClick__REACT_HOT_LOADER__',
        value: function ___handleClick__REACT_HOT_LOADER__(color, e) {
            var recentlyUsedColors = updateDefaultColors(color, this.state.recentlyUsedColors);
            this.setState({
                color: color,
                isHide: true,
                recentlyUsedColors: recentlyUsedColors
            });
            this.props.onChangeComplete(color, e);
            setIntoLocalStorage('_xmColorPickerDefaultColors', recentlyUsedColors);
        }
    }, {
        key: '___handleHover__REACT_HOT_LOADER__',
        value: function ___handleHover__REACT_HOT_LOADER__(color, e) {
            this.setState({
                color: color
            });
            this.props.onChange(color, e);
        }
    }, {
        key: '___handleIconClick__REACT_HOT_LOADER__',
        value: function ___handleIconClick__REACT_HOT_LOADER__() {
            this.setState({
                isHide: !this.state.isHide,
                color: this.props.defaultColor
            });
            document.addEventListener('click', this._handleAreaClick, false);
        }
    }, {
        key: '___handleAreaClick__REACT_HOT_LOADER__',
        value: function ___handleAreaClick__REACT_HOT_LOADER__(e) {
            var x = e.clientX;
            var y = e.clientY;
            if (!inArea(x, y, '#' + this.state.id + ' .xm-color-picker') && !inArea(x, y, '#' + this.state.id + ' .xm-color-picker-icon')) {
                this.setState({
                    isHide: true
                });
                document.removeEventListener('click', this._handleAreaClick, false);
            }
        }
    }, {
        key: 'render',
        value: function render() {
            var _state = this.state,
                isHide = _state.isHide,
                recentlyUsedColors = _state.recentlyUsedColors,
                color = _state.color;
            var _props = this.props,
                icon = _props.icon,
                defaultColor = _props.defaultColor,
                width = _props.width;

            var xmColorPicker = classnames({
                'xm-color-picker': true,
                isHide: isHide
            });
            return React.createElement(
                'div',
                { className: 'xm-color-picker-container', id: this.state.id },
                React.createElement(
                    'span',
                    { className: 'xm-color-picker-icon',
                        onClick: this._handleIconClick
                    },
                    icon
                ),
                React.createElement(
                    'div',
                    { className: xmColorPicker, style: { width: width } },
                    React.createElement(Default, { onClick: this._handleClick, recentlyUsedColors: defaultColor, color: color }),
                    React.createElement(Block, { onClick: this._handleClick, onHover: this._handleHover, title: '\u6700\u8FD1\u4F7F\u7528', colors: recentlyUsedColors }),
                    React.createElement(Block, { onClick: this._handleClick, onHover: this._handleHover, title: '\u4E3B\u9898\u989C\u8272', colors: COLORS.THEME, noWrap: false }),
                    React.createElement(Block, { onClick: this._handleClick, onHover: this._handleHover, title: '\u6807\u51C6\u989C\u8272', colors: COLORS.STANDARD })
                )
            );
        }
    }]);

    return _default;
}(Component), _class.defaultProps = {
    onChangeComplete: function onChangeComplete(color, e) {},
    onChange: function onChange(color, e) {},
    defaultColor: '#00b050',
    icon: 'picker icon',
    width: '193px'
}, _class.propTypes = {
    onChangeComplete: PropTypes.func,
    onChange: PropTypes.func,
    defaultColor: PropTypes.string,
    width: PropTypes.string
}, _temp2);

export default _default;
;

var _temp3 = function () {
    if (typeof __REACT_HOT_LOADER__ === 'undefined') {
        return;
    }

    __REACT_HOT_LOADER__.register(_default, 'default', 'src/components/color-picker/index.js');
}();

;