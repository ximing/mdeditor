/**
 * Created by yeanzhi on 17/3/26.
 */
'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _class, _class2, _temp;

require('./index.scss');

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactDom = require('react-dom');

var _reactDom2 = _interopRequireDefault(_reactDom);

var _lodash = require('lodash.debounce');

var _lodash2 = _interopRequireDefault(_lodash);

var _index = require('../input/index');

var _index2 = _interopRequireDefault(_index);

var _index3 = require('../button/index');

var _index4 = _interopRequireDefault(_index3);

var _util = require('../../lib/util');

var _aceUtil = require('../../lib/aceUtil');

var _insert = require('../../model/insert');

var _insert2 = _interopRequireDefault(_insert);

var _dialog = require('../dialog');

var _dialog2 = _interopRequireDefault(_dialog);

var _mobxReact = require('mobx-react');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var $ = window.jQuery;

var LinkBubble = (0, _mobxReact.observer)(_class = (_temp = _class2 = function (_Component) {
    _inherits(LinkBubble, _Component);

    function LinkBubble() {
        _classCallCheck(this, LinkBubble);

        var _this = _possibleConstructorReturn(this, (LinkBubble.__proto__ || Object.getPrototypeOf(LinkBubble)).call(this));

        _this.onWindowResize = function () {
            _this.closeBubble();
        };

        _this.closeBubble = function () {
            _insert2.default.openLinkDialog = false;
            _insert2.default.isReadOnlyLink = false;
        };

        _this.otherDOMClick = function (e) {
            var node = e.target;
            if (!_insert2.default.openLinkDialog) {
                return false;
            }
            var target = _this.target;
            if (_insert2.default.openLinkDialog && !(0, _util.contains)(target, node)) {
                _this.closeBubble();
            }
        };

        _this.onLinkUrlChange = function (e) {
            _this.setState({
                linkUrl: e.target.value
            });
        };

        _this.onTitleChange = function (e) {
            _this.setState({
                linkTitle: e.target.value
            });
        };

        _this.insertLink = function () {
            if (_this.state.linkUrl) {
                if (_this.state.linkUrl.indexOf('http') !== 0) {
                    _this.state.linkUrl = 'http://' + _this.state.linkUrl;
                }
                if (!_this.state.linkTitle) {
                    _this.state.linkTitle = _this.state.linkUrl;
                }
                (0, _aceUtil.insert)('[' + _this.state.linkTitle + '](' + _this.state.linkUrl + ')');
            }
            _this.closeBubble();
        };

        _this.debounceWindowResize = (0, _lodash2.default)(_this.onWindowResize);
        return _this;
    }

    _createClass(LinkBubble, [{
        key: 'componentDidMount',
        value: function componentDidMount() {
            var _this2 = this;

            setTimeout(function () {
                $(document).on('mousedown', _this2.otherDOMClick);
            }, 10);
            this.target = _reactDom2.default.findDOMNode(this);
            $(window).on('resize', this.debounceWindowResize);
        }
    }, {
        key: 'componentWillUnmount',
        value: function componentWillUnmount() {
            $(document).off('mousedown', this.otherDOMClick);
            $(window).off('resize', this.debounceWindowResize);
        }
    }, {
        key: 'render',
        value: function render() {
            return _react2.default.createElement(_dialog2.default, {
                title: '\u63D2\u5165\u94FE\u63A5',
                className: 'mdeditor-insert-link-dialog',
                content: _react2.default.createElement(
                    'div',
                    { className: 'mdeditor-insert-link' },
                    _react2.default.createElement(
                        'div',
                        { className: 'mdeditor-form-item' },
                        _react2.default.createElement(
                            'span',
                            { className: 'mdeditor-form-title' },
                            'Title'
                        ),
                        _react2.default.createElement(_index2.default, { className: 'mdeditor-form-content', onChange: this.onTitleChange })
                    ),
                    _react2.default.createElement(
                        'div',
                        { className: 'mdeditor-form-item' },
                        _react2.default.createElement(
                            'span',
                            { className: 'mdeditor-form-title' },
                            'URL'
                        ),
                        _react2.default.createElement(_index2.default, { className: 'mdeditor-form-content', onChange: this.onLinkUrlChange })
                    )
                ),
                buttons: [{ text: '取消', type: 'white', action: this.closeBubble }, { text: '插入', action: this.insertLink }],
                onClose: this.closeBubble
            });
        }
    }]);

    return LinkBubble;
}(_react.Component), _class2.defaultProps = {
    linkTitle: '',
    linkUrl: ''
}, _temp)) || _class;

exports.default = LinkBubble;