/**
 * Created by liz
 * Email: lizhengnacl@163.com
 * Tel: 18686768624
 * Date: 16/12/16
 */

'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = undefined;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _class, _temp;

require('./index.scss');

var _classnames = require('classnames');

var _classnames2 = _interopRequireDefault(_classnames);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var _default = (_temp = _class = function (_Component) {
    _inherits(_default, _Component);

    function _default() {
        _classCallCheck(this, _default);

        return _possibleConstructorReturn(this, (_default.__proto__ || Object.getPrototypeOf(_default)).apply(this, arguments));
    }

    _createClass(_default, [{
        key: 'render',
        value: function render() {
            var _classNames;

            var _props = this.props,
                type = _props.type,
                spin = _props.spin,
                className = _props.className,
                other = _objectWithoutProperties(_props, ['type', 'spin', 'className']);

            var classString = (0, _classnames2.default)((_classNames = {
                'xm-icon docicon': true
            }, _defineProperty(_classNames, 'docicon-' + type, type), _defineProperty(_classNames, 'iconfont-spin', !!spin || type === 'loading'), _classNames), className);
            return _react2.default.createElement('i', _extends({ className: classString }, other));
        }
    }]);

    return _default;
}(_react.Component), _class.defaultProps = {
    type: 'default',
    className: '',
    onClick: function onClick() {},
    style: {},
    spin: false
}, _class.propTypes = {
    type: _propTypes2.default.string,
    className: _propTypes2.default.string,
    onClick: _propTypes2.default.func,
    style: _propTypes2.default.object,
    spin: _propTypes2.default.bool
}, _temp);

exports.default = _default;