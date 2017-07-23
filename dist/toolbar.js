/**
 * Created by yeanzhi on 17/5/20.
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

var _mobxReact = require('mobx-react');

var _tooltip = require('./components/tooltip');

var _tooltip2 = _interopRequireDefault(_tooltip);

var _icon = require('./components/icon');

var _icon2 = _interopRequireDefault(_icon);

var _classnames = require('classnames');

var _classnames2 = _interopRequireDefault(_classnames);

var _aceEditor = require('./lib/aceEditor');

var _util = require('./lib/util');

var _aceUtil = require('./lib/aceUtil');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var EditorToolbar = (_dec = (0, _mobxReact.inject)(function (state) {
    return {
        rangeFormat: state.editor.format,
        editor: state.editor,
        insert: state.insert
    };
}), _dec(_class = (0, _mobxReact.observer)(_class = function (_Component) {
    _inherits(EditorToolbar, _Component);

    function EditorToolbar() {
        _classCallCheck(this, EditorToolbar);

        var _this = _possibleConstructorReturn(this, (EditorToolbar.__proto__ || Object.getPrototypeOf(EditorToolbar)).call(this));

        _this.hasMark = function (type) {
            return _this.props.editor.format[type];
        };

        _this.hasBlock = function (type) {
            return _this.props.editor.format[type];
        };

        _this.renderMarkButton = function (type, icon) {
            var isActive = _this.hasMark(type);
            var onMouseDown = function onMouseDown(e) {
                return _this.onClickMark(e, type);
            };
            var classname = (0, _classnames2.default)({
                button: true,
                active: isActive
            });
            return _react2.default.createElement(
                'button',
                { className: classname, onMouseDown: onMouseDown },
                _react2.default.createElement(_icon2.default, { type: icon })
            );
        };

        _this.onClickMark = function (e, type) {
            e.preventDefault();
            var quillEditor = (0, _aceEditor.getEditor)();
            if (quillEditor) {
                if (type === 'bold') {
                    (0, _aceUtil.insertAround)('**', '**');
                } else if (type === 'italic') {
                    (0, _aceUtil.insertAround)('*', '*');
                } else if (type === 'code') {
                    (0, _aceUtil.insertAround)('```\r\n', '\r\n```');
                } else if (type === 'strike') {
                    (0, _aceUtil.insertAround)('~', '~');
                } else if (type === 'ordered') {
                    (0, _aceUtil.insertBefore)('1. ', 3);
                } else if (type === 'bullet') {
                    (0, _aceUtil.insertBefore)('* ', 3);
                } else if (type === 'hr') {
                    _this.insert('---');
                } else if (type === 'quote') {
                    (0, _aceUtil.insertBefore)('> ', 2);
                } else if (type === 'image') {
                    //insertAround('![', '](http://)');
                    _this.props.insert.openImageDialog = true;
                } else if (type === 'link') {
                    _this.props.insert.openLinkDialog = true;
                } else if (type === 'h1') {
                    (0, _aceUtil.insertBefore)('# ', 0);
                } else if (type === 'h2') {
                    (0, _aceUtil.insertBefore)('## ', 0);
                } else if (type === 'h3') {
                    (0, _aceUtil.insertBefore)('### ', 0);
                }
            }
        };

        _this.undo = function () {
            if ((0, _aceEditor.getUndoManager)()) {
                (0, _aceEditor.getUndoManager)().undo();
            }
        };

        _this.redo = function () {
            if ((0, _aceEditor.getUndoManager)()) {
                (0, _aceEditor.getUndoManager)().redo();
            }
        };

        return _this;
    }

    _createClass(EditorToolbar, [{
        key: 'componentDidMount',
        value: function componentDidMount() {
            var _this2 = this;

            setTimeout(function () {
                if (false && (0, _aceEditor.getEditor)()) {
                    var _getEditor$addKeyMap;

                    (0, _aceEditor.getEditor)().addKeyMap((_getEditor$addKeyMap = {}, _defineProperty(_getEditor$addKeyMap, (0, _util.getCtrl)() + '-B', function undefined(cm) {
                        (0, _aceUtil.insertAround)('**', '**');
                    }), _defineProperty(_getEditor$addKeyMap, (0, _util.getCtrl)() + '-I', function undefined(cm) {
                        (0, _aceUtil.insertAround)('**', '**');
                    }), _defineProperty(_getEditor$addKeyMap, (0, _util.getCtrl)() + '-shift-S', function undefined() {
                        (0, _aceUtil.insertAround)('~', '~');
                    }), _defineProperty(_getEditor$addKeyMap, (0, _util.getCtrl)() + '-Alt-L', function undefined() {
                        (0, _aceUtil.insertBefore)('1. ', 3);
                    }), _defineProperty(_getEditor$addKeyMap, (0, _util.getCtrl)() + '-Alt-U', function undefined() {
                        (0, _aceUtil.insertBefore)('* ', 3);
                    }), _defineProperty(_getEditor$addKeyMap, (0, _util.getCtrl)() + '-Alt-H', function undefined() {
                        _this2.insert('---');
                    }), _defineProperty(_getEditor$addKeyMap, (0, _util.getCtrl)() + '-Alt-C', function undefined() {
                        (0, _aceUtil.insertAround)('```\r\n', '\r\n```');
                    }), _defineProperty(_getEditor$addKeyMap, (0, _util.getCtrl)() + '-Alt-I', function undefined() {
                        (0, _aceUtil.insertAround)('[', '](http://)');
                    }), _defineProperty(_getEditor$addKeyMap, (0, _util.getCtrl)() + '-Alt-Q', function undefined() {
                        (0, _aceUtil.insertBefore)('> ', 2);
                    }), _defineProperty(_getEditor$addKeyMap, (0, _util.getCtrl)() + '-Alt-L', function undefined() {
                        (0, _aceUtil.insertBefore)('![](http://)', 2);
                    }), _defineProperty(_getEditor$addKeyMap, (0, _util.getCtrl)() + '-Alt-0', function undefined() {
                        (0, _aceUtil.insertBefore)('![](http://)', 2);
                    }), _defineProperty(_getEditor$addKeyMap, (0, _util.getCtrl)() + '-Alt-1', function undefined() {
                        (0, _aceUtil.insertBefore)('# ', 0);
                    }), _defineProperty(_getEditor$addKeyMap, (0, _util.getCtrl)() + '-Alt-2', function undefined() {
                        (0, _aceUtil.insertBefore)('## ', 0);
                    }), _defineProperty(_getEditor$addKeyMap, (0, _util.getCtrl)() + '-Alt-3', function undefined() {
                        (0, _aceUtil.insertBefore)('### ', 0);
                    }), _defineProperty(_getEditor$addKeyMap, (0, _util.getCtrl)() + '-Alt-4', function undefined() {
                        (0, _aceUtil.insertBefore)('#### ', 0);
                    }), _defineProperty(_getEditor$addKeyMap, (0, _util.getCtrl)() + '-Alt-5', function undefined() {
                        (0, _aceUtil.insertBefore)('##### ', 0);
                    }), _defineProperty(_getEditor$addKeyMap, (0, _util.getCtrl)() + '-Alt-6', function undefined() {
                        (0, _aceUtil.insertBefore)('###### ', 0);
                    }), _getEditor$addKeyMap));
                }
            }, 1000);
        }

        /**
         * Check if the current selection has a mark with `type` in it.
         *
         * @param {String} type
         * @return {Boolean}
         */

        /**
         * Check if the any of the currently selected blocks are of `type`.
         *
         * @param {String} type
         * @return {Boolean}
         */

        /**
         * Render a mark-toggling toolbar button.
         *
         * @param {String} type
         * @param {String} icon
         * @return {Element}
         */

        /**
         * When a mark button is clicked, toggle the current mark.
         *
         * @param {Event} e
         * @param {String} type
         */

    }, {
        key: 'render',
        value: function render() {
            var rangeFormat = this.props.rangeFormat;
            var header = rangeFormat.header;

            return _react2.default.createElement(
                'div',
                { className: 'toolbar-opver', id: 'toolbarOpver' },
                _react2.default.createElement(
                    _tooltip2.default,
                    {
                        placement: 'bottom',
                        mouseEnterDelay: 0,
                        mouseLeaveDelay: 0,
                        overlay: _react2.default.createElement(
                            'div',
                            null,
                            '\u64A4\u9500(',
                            (0, _util.getCtrl)(),
                            '+Z)'
                        )
                    },
                    _react2.default.createElement(
                        'button',
                        { className: 'ql-undo', onClick: this.undo },
                        _react2.default.createElement(_icon2.default, { type: 'undo' })
                    )
                ),
                _react2.default.createElement(
                    _tooltip2.default,
                    {
                        placement: 'bottom',
                        mouseEnterDelay: 0,
                        mouseLeaveDelay: 0,
                        overlay: _react2.default.createElement(
                            'div',
                            null,
                            '\u91CD\u505A(',
                            (0, _util.getCtrl)(),
                            '+Y)'
                        )
                    },
                    _react2.default.createElement(
                        'button',
                        { className: 'ql-redo', onClick: this.redo },
                        _react2.default.createElement(_icon2.default, { type: 'redo' })
                    )
                ),
                _react2.default.createElement(_icon2.default, { type: 'vertical' }),
                _react2.default.createElement(
                    _tooltip2.default,
                    {
                        placement: 'bottom',
                        mouseEnterDelay: 0,
                        mouseLeaveDelay: 0,
                        overlay: _react2.default.createElement(
                            'div',
                            null,
                            'H1 ',
                            (0, _util.getCtrl)(),
                            '+Alt+1'
                        )
                    },
                    this.renderMarkButton('h1', 'h1')
                ),
                _react2.default.createElement(
                    _tooltip2.default,
                    {
                        placement: 'bottom',
                        mouseEnterDelay: 0,
                        mouseLeaveDelay: 0,
                        overlay: _react2.default.createElement(
                            'div',
                            null,
                            'H2 ',
                            (0, _util.getCtrl)(),
                            '+Alt+2'
                        )
                    },
                    this.renderMarkButton('h2', 'h2')
                ),
                _react2.default.createElement(
                    _tooltip2.default,
                    {
                        placement: 'bottom',
                        mouseEnterDelay: 0,
                        mouseLeaveDelay: 0,
                        overlay: _react2.default.createElement(
                            'div',
                            null,
                            'H3 ',
                            (0, _util.getCtrl)(),
                            '+Alt+3'
                        )
                    },
                    this.renderMarkButton('h3', 'h3')
                ),
                _react2.default.createElement(_icon2.default, { type: 'vertical' }),
                _react2.default.createElement(
                    _tooltip2.default,
                    {
                        placement: 'bottom',
                        mouseEnterDelay: 0,
                        mouseLeaveDelay: 0,
                        overlay: _react2.default.createElement(
                            'div',
                            null,
                            '\u52A0\u7C97 ',
                            (0, _util.getCtrl)(),
                            '+b'
                        )
                    },
                    this.renderMarkButton('bold', 'bold')
                ),
                _react2.default.createElement(
                    _tooltip2.default,
                    {
                        placement: 'bottom',
                        mouseEnterDelay: 0,
                        mouseLeaveDelay: 0,
                        overlay: _react2.default.createElement(
                            'div',
                            null,
                            '\u659C\u4F53 ',
                            (0, _util.getCtrl)(),
                            '+i'
                        )
                    },
                    this.renderMarkButton('italic', 'italic')
                ),
                _react2.default.createElement(
                    _tooltip2.default,
                    {
                        placement: 'bottom',
                        mouseEnterDelay: 0,
                        mouseLeaveDelay: 0,
                        overlay: _react2.default.createElement(
                            'div',
                            null,
                            '\u5220\u9664\u7EBF ',
                            (0, _util.getCtrl)(),
                            '+shift+s'
                        )
                    },
                    this.renderMarkButton('strike', 'strike')
                ),
                _react2.default.createElement(_icon2.default, { type: 'vertical' }),
                _react2.default.createElement(
                    _tooltip2.default,
                    {
                        placement: 'bottom',
                        mouseEnterDelay: 0,
                        mouseLeaveDelay: 0,
                        overlay: _react2.default.createElement(
                            'div',
                            null,
                            '\u6709\u5E8F\u5217\u8868 ',
                            (0, _util.getCtrl)(),
                            '+Alt+L'
                        )
                    },
                    this.renderMarkButton('ordered', 'ol')
                ),
                _react2.default.createElement(
                    _tooltip2.default,
                    {
                        placement: 'bottom',
                        mouseEnterDelay: 0,
                        mouseLeaveDelay: 0,
                        overlay: _react2.default.createElement(
                            'div',
                            null,
                            '\u65E0\u5E8F\u5217\u8868 ',
                            (0, _util.getCtrl)(),
                            '+Alt+U'
                        )
                    },
                    this.renderMarkButton('bullet', 'ul')
                ),
                _react2.default.createElement(_icon2.default, { type: 'vertical' }),
                _react2.default.createElement(
                    _tooltip2.default,
                    {
                        placement: 'bottom',
                        mouseEnterDelay: 0,
                        mouseLeaveDelay: 0,
                        overlay: _react2.default.createElement(
                            'div',
                            null,
                            '\u63D2\u5165\u6C34\u5E73\u7EBF ',
                            (0, _util.getCtrl)(),
                            '+Alt+h'
                        )
                    },
                    this.renderMarkButton('hr', 'min')
                ),
                _react2.default.createElement(
                    _tooltip2.default,
                    {
                        placement: 'bottom',
                        mouseEnterDelay: 0,
                        mouseLeaveDelay: 0,
                        overlay: _react2.default.createElement(
                            'div',
                            null,
                            '\u63D2\u5165\u4EE3\u7801 ',
                            (0, _util.getCtrl)(),
                            '+Alt+c'
                        )
                    },
                    this.renderMarkButton('code', 'code')
                ),
                _react2.default.createElement(
                    _tooltip2.default,
                    {
                        placement: 'bottom',
                        mouseEnterDelay: 0,
                        mouseLeaveDelay: 0,
                        overlay: _react2.default.createElement(
                            'div',
                            null,
                            '\u63D2\u5165\u5F15\u7528 ',
                            (0, _util.getCtrl)(),
                            '+Alt+q'
                        )
                    },
                    this.renderMarkButton('quote', 'quote')
                ),
                _react2.default.createElement(
                    _tooltip2.default,
                    {
                        placement: 'bottom',
                        mouseEnterDelay: 0,
                        mouseLeaveDelay: 0,
                        overlay: _react2.default.createElement(
                            'div',
                            null,
                            '\u63D2\u5165\u56FE\u7247 ',
                            (0, _util.getCtrl)(),
                            '+Alt+i'
                        )
                    },
                    this.renderMarkButton('image', 'image')
                ),
                _react2.default.createElement(
                    _tooltip2.default,
                    {
                        placement: 'bottom',
                        mouseEnterDelay: 0,
                        mouseLeaveDelay: 0,
                        overlay: _react2.default.createElement(
                            'div',
                            null,
                            '\u63D2\u5165\u94FE\u63A5 ',
                            (0, _util.getCtrl)(),
                            '+Alt+l'
                        )
                    },
                    this.renderMarkButton('link', 'link')
                )
            );
        }
    }]);

    return EditorToolbar;
}(_react.Component)) || _class) || _class);
exports.default = EditorToolbar;