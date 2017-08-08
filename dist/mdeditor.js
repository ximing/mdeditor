/**
 * Created by yeanzhi on 17/3/26.
 */
'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _dec, _class;

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactDom = require('react-dom');

var _reactDom2 = _interopRequireDefault(_reactDom);

var _toolbar = require('./toolbar');

var _toolbar2 = _interopRequireDefault(_toolbar);

var _linkBubble = require('./components/linkBubble');

var _linkBubble2 = _interopRequireDefault(_linkBubble);

var _insertImage = require('./components/insertImage');

var _insertImage2 = _interopRequireDefault(_insertImage);

var _hotKeysDialog = require('./components/hotKeysDialog');

var _hotKeysDialog2 = _interopRequireDefault(_hotKeysDialog);

var _preview = require('./components/preview/preview');

var _preview2 = _interopRequireDefault(_preview);

var _mobxReact = require('mobx-react');

var _editor = require('./components/editor');

var _editor2 = _interopRequireDefault(_editor);

var _editor3 = require('./model/editor');

var _editor4 = _interopRequireDefault(_editor3);

var _aceEditor = require('./lib/aceEditor');

var _lodash = require('lodash.debounce');

var _lodash2 = _interopRequireDefault(_lodash);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var $ = window.jQuery;
var WEditor = (_dec = (0, _mobxReact.inject)(function (state) {
    return {
        insert: state.insert,
        focus: state.editor.focus,
        help: state.help
    };
}), _dec(_class = (0, _mobxReact.observer)(_class = function (_Component) {
    _inherits(WEditor, _Component);

    function WEditor(props) {
        _classCallCheck(this, WEditor);

        var _this = _possibleConstructorReturn(this, (WEditor.__proto__ || Object.getPrototypeOf(WEditor)).call(this, props));

        _this.state = {
            width: window.innerWidth,
            scrollTop: 0
        };

        _this.onWindowResize = function () {
            _this.setState({
                width: window.innerWidth
            });
            if ((0, _aceEditor.getEditor)()) {
                (0, _aceEditor.getEditor)().renderer.updateFull();
            }
        };

        _editor4.default.value = props.defaultValue;
        // this.debounceWindowResize = debounce(this.onWindowResize);
        return _this;
    }

    _createClass(WEditor, [{
        key: 'componentDidMount',
        value: function componentDidMount() {
            var $divs = $('.ace_scrollbar-v, .mdeditor-preview');
            var $aceScrollbar = $('.ace_scrollbar-v');
            var timer = null;
            var sync = function sync(e) {
                clearTimeout(timer);
                var $other = $divs.not(this).off('scroll'),
                    other = $other.get(0);
                var percentage = this.scrollTop / (this.scrollHeight - this.offsetHeight);
                if (this !== $aceScrollbar[0]) {
                    (0, _aceEditor.getEditor)().getSession().setScrollTop(percentage * (other.scrollHeight - other.offsetHeight));
                } else {
                    other.scrollTop = percentage * (other.scrollHeight - other.offsetHeight);
                }
                timer = setTimeout(function () {
                    $other.on('scroll', sync);
                }, 200);
            };
            $divs.on('scroll', sync);
            $(window).on('resize', this.onWindowResize);
        }
    }, {
        key: 'componentWillUnmount',
        value: function componentWillUnmount() {
            $(window).off('resize', this.onWindowResize);
        }
    }, {
        key: 'componentWillReceiveProps',
        value: function componentWillReceiveProps(nextProps) {}
    }, {
        key: 'onChange',
        value: function onChange(change, editSession) {
            _editor4.default.value = editSession.getValue();
        }
    }, {
        key: 'render',
        value: function render() {
            return _react2.default.createElement(
                'div',
                { className: 'mdeditor-wrapper' },
                _react2.default.createElement(
                    'div',
                    { className: 'editor-toolbar', id: 'toolbar' },
                    _react2.default.createElement(_toolbar2.default, null)
                ),
                _react2.default.createElement(
                    'div',
                    { className: 'weditor-body' },
                    _react2.default.createElement(
                        'div',
                        { className: 'content-container', style: { width: this.state.width > 900 ? '50%' : '100%' } },
                        _react2.default.createElement(_editor2.default, { readOnly: this.props.readOnly,
                            defaultValue: this.props.defaultValue,
                            onChange: this.onChange })
                    ),
                    _react2.default.createElement(
                        'div',
                        { className: 'mdeditor-preview', style: { display: this.state.width > 900 ? 'block' : 'none' } },
                        _react2.default.createElement(_preview2.default, null)
                    )
                ),
                this.props.insert.openLinkDialog && _react2.default.createElement(_linkBubble2.default, null),
                this.props.insert.openImageDialog && _react2.default.createElement(_insertImage2.default, { uploadUrl: this.props.options.uploadUrl }),
                this.props.help.hotKeysDialog && _react2.default.createElement(_hotKeysDialog2.default, null)
            );
        }
    }]);

    return WEditor;
}(_react.Component)) || _class) || _class);
exports.default = WEditor;