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

var _Trigger = require('./components/Trigger');

var _Trigger2 = _interopRequireDefault(_Trigger);

var _selectRowCol = require('select-row-col');

var _selectRowCol2 = _interopRequireDefault(_selectRowCol);

var _icon = require('./components/icon');

var _icon2 = _interopRequireDefault(_icon);

var _classnames = require('classnames');

var _classnames2 = _interopRequireDefault(_classnames);

var _aceEditor = require('./lib/aceEditor');

var _util = require('./lib/util');

var _aceUtil = require('./lib/aceUtil');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

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
            console.log(type);
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
                    (0, _aceUtil.insertBefore)('------ \r\n', 0);
                } else if (type === 'quote') {
                    (0, _aceUtil.insertBefore)('> ', 2);
                } else if (type === 'image') {
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

        _this.onInsertTable = function (size) {
            var row = size.row,
                col = size.col;

            var _editor = (0, _aceEditor.getEditor)();

            if (_editor) {
                var _title = '|' + ' 标题 |'.repeat(col),
                    _config = '|' + ' ---- |'.repeat(col),
                    _body = ('|' + ' 文本 |'.repeat(col) + '\n').repeat(row - 1) + ('|' + ' 文本 |'.repeat(col));
                var _table = _title + '\n' + _config + '\n' + _body;

                var _editor$selection$get = _editor.selection.getCursor(),
                    cursorRow = _editor$selection$get.row,
                    column = _editor$selection$get.column;
                //cursor position cases:
                //1.光标在空行的开头 2.光标在非空行的开头 3.光标不在一行的开头但在一行的结尾 4.光标在一行的中间 5.还有「选中」的情况
                //case 1和2的处理方式: 当前行插入表格, 并在表格结尾另起一行; 3和4的处理方式: 另起一行, 插入表格


                if (column === 0) {
                    (0, _aceUtil.insert)(_table + '\n', 0);
                } else {
                    _editor.getSession().replace(_editor.getSelectionRange(), ''); //先清除选中的内容
                    _editor.gotoLine(cursorRow + 2); // +2: getCursor获取的row跟gotoLine的row起始值不一致
                    (0, _aceUtil.insert)(_table + '\n', 0);
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
            setTimeout(function () {
                if ((0, _aceEditor.getEditor)()) {
                    [{
                        name: "insert bold",
                        bindKey: { win: "Ctrl-B", mac: "Command-B" },
                        exec: function exec(editor) {
                            (0, _aceUtil.insertAround)('**', '**');
                        }
                    }, {
                        name: "insert italic",
                        bindKey: { win: "Ctrl-I", mac: "Command-I" },
                        exec: function exec(editor) {
                            (0, _aceUtil.insertAround)('*', '*');
                        }
                    }, {
                        name: "insert strike",
                        bindKey: { win: "Ctrl-Shift-S", mac: "Command-Shift-S" },
                        exec: function exec(editor) {
                            (0, _aceUtil.insertAround)('~', '~');
                        }
                    }, {
                        name: "insert List",
                        bindKey: { win: "Ctrl-Alt-L", mac: "Command-Alt-L" },
                        exec: function exec(editor) {
                            (0, _aceUtil.insertBefore)('1. ', 3);
                        }
                    }, {
                        name: "insert bullet List",
                        bindKey: { win: "Ctrl-Alt-U", mac: "Command-Alt-U" },
                        exec: function exec(editor) {
                            (0, _aceUtil.insertBefore)('* ', 3);
                        }
                    }, {
                        name: "insert HR",
                        bindKey: { win: "Ctrl-Alt-H", mac: "Command-Alt-H" },
                        exec: function exec(editor) {
                            (0, _aceUtil.insertBefore)('------\r\n');
                        }
                    }, {
                        name: "insert code",
                        bindKey: { win: "Ctrl-Alt-C", mac: "Command-Alt-C" },
                        exec: function exec(editor) {
                            (0, _aceUtil.insertAround)('```\r\n', '\r\n```');
                        }
                    }, {
                        name: "insert image",
                        bindKey: { win: "Ctrl-Alt-I", mac: "Command-Alt-I" },
                        exec: function exec(editor) {
                            (0, _aceUtil.insertAround)('![' + '](' + ')');
                        }
                    }, {
                        name: "insert link",
                        bindKey: { win: "Ctrl-Alt-L", mac: "Command-Alt-L" },
                        exec: function exec(editor) {
                            (0, _aceUtil.insertAround)('[' + '](' + ')');
                        }
                    }, {
                        name: "insert quote",
                        bindKey: { win: "Alt-Shift-Q", mac: "Alt-Shift-Q" },
                        exec: function exec(editor) {
                            (0, _aceUtil.insertBefore)('> ', 2);
                        }
                    }, {
                        name: "insert H1",
                        bindKey: { win: "Ctrl-Alt-1", mac: "Command-Alt-1" },
                        exec: function exec(editor) {
                            (0, _aceUtil.insertBefore)('# ', 0);
                        }
                    }, {
                        name: "insert H2",
                        bindKey: { win: "Ctrl-Alt-2", mac: "Command-Alt-2" },
                        exec: function exec(editor) {
                            (0, _aceUtil.insertBefore)('## ', 0);
                        }
                    }, {
                        name: "insert H3",
                        bindKey: { win: "Ctrl-Alt-3", mac: "Command-Alt-3" },
                        exec: function exec(editor) {
                            (0, _aceUtil.insertBefore)('### ', 0);
                        }
                    }, {
                        name: "insert H4",
                        bindKey: { win: "Ctrl-Alt-4", mac: "Command-Alt-4" },
                        exec: function exec(editor) {
                            (0, _aceUtil.insertBefore)('#### ', 0);
                        }
                    }, {
                        name: "insert H5",
                        bindKey: { win: "Ctrl-Alt-5", mac: "Command-Alt-5" },
                        exec: function exec(editor) {
                            (0, _aceUtil.insertBefore)('##### ', 0);
                        }
                    }, {
                        name: "insert H6",
                        bindKey: { win: "Ctrl-Alt-6", mac: "Command-Alt-6" },
                        exec: function exec(editor) {
                            (0, _aceUtil.insertBefore)('###### ', 0);
                        }
                    }].forEach(function (item) {
                        (0, _aceEditor.getEditor)().commands.addCommand(item);
                    });
                }
            }, 100);
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
                    _Trigger2.default,
                    {
                        destroyPopupOnHide: true,
                        action: ['click'],
                        popup: _react2.default.createElement(_selectRowCol2.default, { onSelect: this.onInsertTable, maxSize: { row: 15, col: 10 } }),
                        popupAlign: {
                            points: ['tl', 'bl'],
                            offset: [0, 0]
                        }
                    },
                    _react2.default.createElement(
                        _tooltip2.default,
                        {
                            ref: 'tableIcon',
                            placement: 'bottom',
                            mouseEnterDelay: 0,
                            mouseLeaveDelay: 0,
                            overlay: _react2.default.createElement(
                                'div',
                                null,
                                '\u63D2\u5165\u8868\u683C ',
                                (0, _util.getCtrl)(),
                                '+Alt+t'
                            )
                        },
                        this.renderMarkButton('table', 'table')
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
                            '\u63D2\u5165\u5F15\u7528 Alt+Shift+q'
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
                )
            );
        }
    }]);

    return EditorToolbar;
}(_react.Component)) || _class) || _class);
exports.default = EditorToolbar;