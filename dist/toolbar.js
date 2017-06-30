/**
 * Created by yeanzhi on 17/5/20.
 */
'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _dec, _class;

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

import React, { Component } from 'react';
import { inject, observer } from 'mobx-react';

import ToolTip from './components/tooltip';
import Icon from './components/icon';
import classnames from 'classnames';

import { getEditor } from './lib/codemirrorEditor';
import { getCtrl } from './lib/util';

var EditorToolbar = (_dec = inject(function (state) {
    return {
        rangeFormat: state.editor.format,
        editor: state.editor
    };
}), _dec(_class = observer(_class = function (_Component) {
    _inherits(EditorToolbar, _Component);

    function EditorToolbar() {
        _classCallCheck(this, EditorToolbar);

        var _this = _possibleConstructorReturn(this, (EditorToolbar.__proto__ || Object.getPrototypeOf(EditorToolbar)).call(this));

        _this.hasMark = function () {
            return _this.__hasMark__REACT_HOT_LOADER__.apply(_this, arguments);
        };

        _this.hasBlock = function () {
            return _this.__hasBlock__REACT_HOT_LOADER__.apply(_this, arguments);
        };

        _this.renderMarkButton = function () {
            return _this.__renderMarkButton__REACT_HOT_LOADER__.apply(_this, arguments);
        };

        _this.onClickMark = function () {
            return _this.__onClickMark__REACT_HOT_LOADER__.apply(_this, arguments);
        };

        _this.undo = function () {
            return _this.__undo__REACT_HOT_LOADER__.apply(_this, arguments);
        };

        _this.redo = function () {
            return _this.__redo__REACT_HOT_LOADER__.apply(_this, arguments);
        };

        return _this;
    }

    _createClass(EditorToolbar, [{
        key: 'componentDidMount',
        value: function componentDidMount() {
            var _this2 = this;

            setTimeout(function () {
                if (getEditor()) {
                    var _getEditor$addKeyMap;

                    getEditor().addKeyMap((_getEditor$addKeyMap = {}, _defineProperty(_getEditor$addKeyMap, getCtrl() + '-B', function undefined(cm) {
                        _this2.insertAround('**', '**');
                    }), _defineProperty(_getEditor$addKeyMap, getCtrl() + '-I', function undefined(cm) {
                        _this2.insertAround('**', '**');
                    }), _defineProperty(_getEditor$addKeyMap, getCtrl() + '-shift-S', function undefined() {
                        _this2.insertAround('~', '~');
                    }), _defineProperty(_getEditor$addKeyMap, getCtrl() + '-Alt-L', function undefined() {
                        _this2.insertBefore('1. ', 3);
                    }), _defineProperty(_getEditor$addKeyMap, getCtrl() + '-Alt-U', function undefined() {
                        _this2.insertBefore('* ', 3);
                    }), _defineProperty(_getEditor$addKeyMap, getCtrl() + '-Alt-H', function undefined() {
                        _this2.insert('---');
                    }), _defineProperty(_getEditor$addKeyMap, getCtrl() + '-Alt-C', function undefined() {
                        _this2.insertAround('```\r\n', '\r\n```');
                    }), _defineProperty(_getEditor$addKeyMap, getCtrl() + '-Alt-I', function undefined() {
                        _this2.insertAround('[', '](http://)');
                    }), _defineProperty(_getEditor$addKeyMap, getCtrl() + '-Alt-Q', function undefined() {
                        _this2.insertBefore('> ', 2);
                    }), _defineProperty(_getEditor$addKeyMap, getCtrl() + '-Alt-L', function undefined() {
                        _this2.insertBefore('![](http://)', 2);
                    }), _defineProperty(_getEditor$addKeyMap, getCtrl() + '-Alt-0', function undefined() {
                        _this2.insertBefore('![](http://)', 2);
                    }), _defineProperty(_getEditor$addKeyMap, getCtrl() + '-Alt-1', function undefined() {
                        _this2.insertBefore('# ', 0);
                    }), _defineProperty(_getEditor$addKeyMap, getCtrl() + '-Alt-2', function undefined() {
                        _this2.insertBefore('## ', 0);
                    }), _defineProperty(_getEditor$addKeyMap, getCtrl() + '-Alt-3', function undefined() {
                        _this2.insertBefore('### ', 0);
                    }), _defineProperty(_getEditor$addKeyMap, getCtrl() + '-Alt-4', function undefined() {
                        _this2.insertBefore('#### ', 0);
                    }), _defineProperty(_getEditor$addKeyMap, getCtrl() + '-Alt-5', function undefined() {
                        _this2.insertBefore('##### ', 0);
                    }), _defineProperty(_getEditor$addKeyMap, getCtrl() + '-Alt-6', function undefined() {
                        _this2.insertBefore('###### ', 0);
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

    }, {
        key: '__hasMark__REACT_HOT_LOADER__',


        /**
         * Check if the any of the currently selected blocks are of `type`.
         *
         * @param {String} type
         * @return {Boolean}
         */

        value: function __hasMark__REACT_HOT_LOADER__() {
            return this.__hasMark__REACT_HOT_LOADER__.apply(this, arguments);
        }
    }, {
        key: '__hasMark__REACT_HOT_LOADER__',
        value: function __hasMark__REACT_HOT_LOADER__() {
            return this.__hasMark__REACT_HOT_LOADER__.apply(this, arguments);
        }
    }, {
        key: '__hasMark__REACT_HOT_LOADER__',
        value: function __hasMark__REACT_HOT_LOADER__() {
            return this.__hasMark__REACT_HOT_LOADER__.apply(this, arguments);
        }
    }, {
        key: '__hasMark__REACT_HOT_LOADER__',
        value: function __hasMark__REACT_HOT_LOADER__(type) {
            return this.props.editor.format[type];
        }
    }, {
        key: '__hasBlock__REACT_HOT_LOADER__',


        /**
         * Render a mark-toggling toolbar button.
         *
         * @param {String} type
         * @param {String} icon
         * @return {Element}
         */

        value: function __hasBlock__REACT_HOT_LOADER__() {
            return this.__hasBlock__REACT_HOT_LOADER__.apply(this, arguments);
        }
    }, {
        key: '__hasBlock__REACT_HOT_LOADER__',
        value: function __hasBlock__REACT_HOT_LOADER__() {
            return this.__hasBlock__REACT_HOT_LOADER__.apply(this, arguments);
        }
    }, {
        key: '__hasBlock__REACT_HOT_LOADER__',
        value: function __hasBlock__REACT_HOT_LOADER__() {
            return this.__hasBlock__REACT_HOT_LOADER__.apply(this, arguments);
        }
    }, {
        key: '__hasBlock__REACT_HOT_LOADER__',
        value: function __hasBlock__REACT_HOT_LOADER__(type) {
            return this.props.editor.format[type];
        }
    }, {
        key: '__renderMarkButton__REACT_HOT_LOADER__',


        /**
         * When a mark button is clicked, toggle the current mark.
         *
         * @param {Event} e
         * @param {String} type
         */

        value: function __renderMarkButton__REACT_HOT_LOADER__() {
            return this.__renderMarkButton__REACT_HOT_LOADER__.apply(this, arguments);
        }
    }, {
        key: '__renderMarkButton__REACT_HOT_LOADER__',
        value: function __renderMarkButton__REACT_HOT_LOADER__() {
            return this.__renderMarkButton__REACT_HOT_LOADER__.apply(this, arguments);
        }
    }, {
        key: '__renderMarkButton__REACT_HOT_LOADER__',
        value: function __renderMarkButton__REACT_HOT_LOADER__() {
            return this.__renderMarkButton__REACT_HOT_LOADER__.apply(this, arguments);
        }
    }, {
        key: '__renderMarkButton__REACT_HOT_LOADER__',
        value: function __renderMarkButton__REACT_HOT_LOADER__(type, icon) {
            var _this3 = this;

            var isActive = this.hasMark(type);
            var onMouseDown = function onMouseDown(e) {
                return _this3.onClickMark(e, type);
            };
            var classname = classnames({
                button: true,
                active: isActive
            });
            return React.createElement(
                'button',
                { className: classname, onMouseDown: onMouseDown },
                React.createElement(Icon, { type: icon })
            );
        }
    }, {
        key: '__onClickMark__REACT_HOT_LOADER__',


        /**
         * Insert a string at cursor position
         * @param  {String} insertion
         */
        value: function __onClickMark__REACT_HOT_LOADER__() {
            return this.__onClickMark__REACT_HOT_LOADER__.apply(this, arguments);
        }
    }, {
        key: '__onClickMark__REACT_HOT_LOADER__',
        value: function __onClickMark__REACT_HOT_LOADER__() {
            return this.__onClickMark__REACT_HOT_LOADER__.apply(this, arguments);
        }
    }, {
        key: '__onClickMark__REACT_HOT_LOADER__',
        value: function __onClickMark__REACT_HOT_LOADER__() {
            return this.__onClickMark__REACT_HOT_LOADER__.apply(this, arguments);
        }
    }, {
        key: '__onClickMark__REACT_HOT_LOADER__',
        value: function __onClickMark__REACT_HOT_LOADER__(e, type) {
            e.preventDefault();
            var quillEditor = getEditor();
            if (quillEditor) {
                if (type === 'bold') {
                    this.insertAround('**', '**');
                } else if (type === 'italic') {
                    this.insertAround('*', '*');
                } else if (type === 'code') {
                    this.insertAround('```\r\n', '\r\n```');
                } else if (type === 'strike') {
                    this.insertAround('~', '~');
                } else if (type === 'ordered') {
                    this.insertBefore('1. ', 3);
                } else if (type === 'bullet') {
                    this.insertBefore('* ', 3);
                } else if (type === 'hr') {
                    this.insert('---');
                } else if (type === 'quote') {
                    this.insertBefore('> ', 2);
                } else if (type === 'image') {
                    this.insertAround('[', '](http://)');
                } else if (type === 'link') {
                    this.insertBefore('![](http://)', 2);
                } else if (type === 'h1') {
                    this.insertBefore('# ', 0);
                } else if (type === 'h2') {
                    this.insertBefore('## ', 0);
                } else if (type === 'h3') {
                    this.insertBefore('### ', 0);
                }
            }
        }
    }, {
        key: 'insert',
        value: function insert(insertion) {
            var quillEditor = getEditor();
            var doc = quillEditor.getDoc();
            var cursor = doc.getCursor();
            doc.replaceRange(insertion, { line: cursor.line, ch: cursor.ch });
        }

        /**
         * Insert a string at the start and end of a selection
         * @param  {String} start
         * @param  {String} end
         */

    }, {
        key: 'insertAround',
        value: function insertAround(start, end) {
            var quillEditor = getEditor();
            var doc = quillEditor.getDoc();
            var cursor = doc.getCursor();

            if (doc.somethingSelected()) {
                var selection = doc.getSelection();
                doc.replaceSelection(start + selection + end);
            } else {
                // If no selection then insert start and end args and set cursor position between the two.
                doc.replaceRange(start + end, { line: cursor.line, ch: cursor.ch });
                doc.setCursor({ line: cursor.line, ch: cursor.ch + start.length });
            }
        }

        /**
         * Insert a string before a selection
         * @param  {String} insertion
         */

    }, {
        key: 'insertBefore',
        value: function insertBefore(insertion, cursorOffset) {
            var quillEditor = getEditor();
            var doc = quillEditor.getDoc();
            var cursor = doc.getCursor();

            if (doc.somethingSelected()) {
                var selections = doc.listSelections();
                selections.forEach(function (selection) {
                    var pos = [selection.head.line, selection.anchor.line].sort();

                    for (var i = pos[0]; i <= pos[1]; i++) {
                        doc.replaceRange(insertion, { line: i, ch: 0 });
                    }

                    doc.setCursor({ line: pos[0], ch: cursorOffset || 0 });
                });
            } else {
                doc.replaceRange(insertion, { line: cursor.line, ch: 0 });
                doc.setCursor({ line: cursor.line, ch: cursorOffset || 0 });
            }
        }
    }, {
        key: '__undo__REACT_HOT_LOADER__',
        value: function __undo__REACT_HOT_LOADER__() {
            return this.__undo__REACT_HOT_LOADER__.apply(this, arguments);
        }
    }, {
        key: '__undo__REACT_HOT_LOADER__',
        value: function __undo__REACT_HOT_LOADER__() {
            return this.__undo__REACT_HOT_LOADER__.apply(this, arguments);
        }
    }, {
        key: '__undo__REACT_HOT_LOADER__',
        value: function __undo__REACT_HOT_LOADER__() {
            return this.__undo__REACT_HOT_LOADER__.apply(this, arguments);
        }
    }, {
        key: '__undo__REACT_HOT_LOADER__',
        value: function __undo__REACT_HOT_LOADER__() {
            if (getEditor()) {
                getEditor().execCommand('undo');
            }
        }
    }, {
        key: '__redo__REACT_HOT_LOADER__',
        value: function __redo__REACT_HOT_LOADER__() {
            return this.__redo__REACT_HOT_LOADER__.apply(this, arguments);
        }
    }, {
        key: '__redo__REACT_HOT_LOADER__',
        value: function __redo__REACT_HOT_LOADER__() {
            return this.__redo__REACT_HOT_LOADER__.apply(this, arguments);
        }
    }, {
        key: '__redo__REACT_HOT_LOADER__',
        value: function __redo__REACT_HOT_LOADER__() {
            return this.__redo__REACT_HOT_LOADER__.apply(this, arguments);
        }
    }, {
        key: '__redo__REACT_HOT_LOADER__',
        value: function __redo__REACT_HOT_LOADER__() {
            if (getEditor()) {
                getEditor().execCommand('redo');
            }
        }
    }, {
        key: 'render',
        value: function render() {
            var rangeFormat = this.props.rangeFormat;
            var header = rangeFormat.header;

            return React.createElement(
                'div',
                { className: 'toolbar-opver', id: 'toolbarOpver' },
                React.createElement(
                    ToolTip,
                    {
                        placement: 'bottom',
                        mouseEnterDelay: 0,
                        mouseLeaveDelay: 0,
                        overlay: React.createElement(
                            'div',
                            null,
                            '\u64A4\u9500(',
                            getCtrl(),
                            '+Z)'
                        )
                    },
                    React.createElement(
                        'button',
                        { className: 'ql-undo', onClick: this.undo },
                        React.createElement(Icon, { type: 'undo' })
                    )
                ),
                React.createElement(
                    ToolTip,
                    {
                        placement: 'bottom',
                        mouseEnterDelay: 0,
                        mouseLeaveDelay: 0,
                        overlay: React.createElement(
                            'div',
                            null,
                            '\u91CD\u505A(',
                            getCtrl(),
                            '+Y)'
                        )
                    },
                    React.createElement(
                        'button',
                        { className: 'ql-redo', onClick: this.redo },
                        React.createElement(Icon, { type: 'redo' })
                    )
                ),
                React.createElement(Icon, { type: 'vertical' }),
                React.createElement(
                    ToolTip,
                    {
                        placement: 'bottom',
                        mouseEnterDelay: 0,
                        mouseLeaveDelay: 0,
                        overlay: React.createElement(
                            'div',
                            null,
                            'H1 ',
                            getCtrl(),
                            '+Alt+1'
                        )
                    },
                    this.renderMarkButton('h1', 'h1')
                ),
                React.createElement(
                    ToolTip,
                    {
                        placement: 'bottom',
                        mouseEnterDelay: 0,
                        mouseLeaveDelay: 0,
                        overlay: React.createElement(
                            'div',
                            null,
                            'H2 ',
                            getCtrl(),
                            '+Alt+2'
                        )
                    },
                    this.renderMarkButton('h2', 'h2')
                ),
                React.createElement(
                    ToolTip,
                    {
                        placement: 'bottom',
                        mouseEnterDelay: 0,
                        mouseLeaveDelay: 0,
                        overlay: React.createElement(
                            'div',
                            null,
                            'H3 ',
                            getCtrl(),
                            '+Alt+3'
                        )
                    },
                    this.renderMarkButton('h3', 'h3')
                ),
                React.createElement(Icon, { type: 'vertical' }),
                React.createElement(
                    ToolTip,
                    {
                        placement: 'bottom',
                        mouseEnterDelay: 0,
                        mouseLeaveDelay: 0,
                        overlay: React.createElement(
                            'div',
                            null,
                            '\u52A0\u7C97 ',
                            getCtrl(),
                            '+b'
                        )
                    },
                    this.renderMarkButton('bold', 'bold')
                ),
                React.createElement(
                    ToolTip,
                    {
                        placement: 'bottom',
                        mouseEnterDelay: 0,
                        mouseLeaveDelay: 0,
                        overlay: React.createElement(
                            'div',
                            null,
                            '\u659C\u4F53 ',
                            getCtrl(),
                            '+i'
                        )
                    },
                    this.renderMarkButton('italic', 'italic')
                ),
                React.createElement(
                    ToolTip,
                    {
                        placement: 'bottom',
                        mouseEnterDelay: 0,
                        mouseLeaveDelay: 0,
                        overlay: React.createElement(
                            'div',
                            null,
                            '\u5220\u9664\u7EBF ',
                            getCtrl(),
                            '+shift+s'
                        )
                    },
                    this.renderMarkButton('strike', 'strike')
                ),
                React.createElement(Icon, { type: 'vertical' }),
                React.createElement(
                    ToolTip,
                    {
                        placement: 'bottom',
                        mouseEnterDelay: 0,
                        mouseLeaveDelay: 0,
                        overlay: React.createElement(
                            'div',
                            null,
                            '\u6709\u5E8F\u5217\u8868 ',
                            getCtrl(),
                            '+Alt+L'
                        )
                    },
                    this.renderMarkButton('ordered', 'ol')
                ),
                React.createElement(
                    ToolTip,
                    {
                        placement: 'bottom',
                        mouseEnterDelay: 0,
                        mouseLeaveDelay: 0,
                        overlay: React.createElement(
                            'div',
                            null,
                            '\u65E0\u5E8F\u5217\u8868 ',
                            getCtrl(),
                            '+Alt+U'
                        )
                    },
                    this.renderMarkButton('bullet', 'ul')
                ),
                React.createElement(Icon, { type: 'vertical' }),
                React.createElement(
                    ToolTip,
                    {
                        placement: 'bottom',
                        mouseEnterDelay: 0,
                        mouseLeaveDelay: 0,
                        overlay: React.createElement(
                            'div',
                            null,
                            '\u63D2\u5165\u6C34\u5E73\u7EBF ',
                            getCtrl(),
                            '+Alt+h'
                        )
                    },
                    this.renderMarkButton('hr', 'min')
                ),
                React.createElement(
                    ToolTip,
                    {
                        placement: 'bottom',
                        mouseEnterDelay: 0,
                        mouseLeaveDelay: 0,
                        overlay: React.createElement(
                            'div',
                            null,
                            '\u63D2\u5165\u4EE3\u7801 ',
                            getCtrl(),
                            '+Alt+c'
                        )
                    },
                    this.renderMarkButton('code', 'code')
                ),
                React.createElement(
                    ToolTip,
                    {
                        placement: 'bottom',
                        mouseEnterDelay: 0,
                        mouseLeaveDelay: 0,
                        overlay: React.createElement(
                            'div',
                            null,
                            '\u63D2\u5165\u5F15\u7528 ',
                            getCtrl(),
                            '+Alt+q'
                        )
                    },
                    this.renderMarkButton('quote', 'quote')
                ),
                React.createElement(
                    ToolTip,
                    {
                        placement: 'bottom',
                        mouseEnterDelay: 0,
                        mouseLeaveDelay: 0,
                        overlay: React.createElement(
                            'div',
                            null,
                            '\u63D2\u5165\u56FE\u7247 ',
                            getCtrl(),
                            '+Alt+i'
                        )
                    },
                    this.renderMarkButton('image', 'image')
                ),
                React.createElement(
                    ToolTip,
                    {
                        placement: 'bottom',
                        mouseEnterDelay: 0,
                        mouseLeaveDelay: 0,
                        overlay: React.createElement(
                            'div',
                            null,
                            '\u63D2\u5165\u94FE\u63A5 ',
                            getCtrl(),
                            '+Alt+l'
                        )
                    },
                    this.renderMarkButton('link', 'link')
                )
            );
        }
    }]);

    return EditorToolbar;
}(Component)) || _class) || _class);
export { EditorToolbar as default };
;

var _temp = function () {
    if (typeof __REACT_HOT_LOADER__ === 'undefined') {
        return;
    }

    __REACT_HOT_LOADER__.register(EditorToolbar, 'EditorToolbar', 'src/toolbar.js');
}();

;