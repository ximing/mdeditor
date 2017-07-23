/**
 * Created by yeanzhi on 17/2/26.
 */
'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _class, _temp;

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

import React, { Component } from 'react';
import { getEditor } from './lib/codemirrorEditor';
import { info } from './components/toast';
import Dropdown from 'rc-dropdown';
import Menu, { Item as MenuItem, Divider } from 'rc-menu';
import 'rc-dropdown/assets/index.css';
import { is } from './lib/util';

import printThis from './lib/printThis';
var $ = window.jQuery;
printThis($);

import help from './model/help';
import insert from './model/insert';
import editor from './model/editor';

var EditorHeader = (_temp = _class = function (_Component) {
    _inherits(EditorHeader, _Component);

    function EditorHeader() {
        var _this2 = this;

        _classCallCheck(this, EditorHeader);

        var _this = _possibleConstructorReturn(this, (EditorHeader.__proto__ || Object.getPrototypeOf(EditorHeader)).call(this));

        _this.toggleCatalogue = function () {
            return _this.__toggleCatalogue__REACT_HOT_LOADER__.apply(_this, arguments);
        };

        _this.print = function () {
            return _this.__print__REACT_HOT_LOADER__.apply(_this, arguments);
        };

        _this.HelpMenuClick = function () {
            return _this.__HelpMenuClick__REACT_HOT_LOADER__.apply(_this, arguments);
        };

        _this.fileMenuClick = function () {
            return _this.__fileMenuClick__REACT_HOT_LOADER__.apply(_this, arguments);
        };

        _this.insertMenuClick = function () {
            return _this.__insertMenuClick__REACT_HOT_LOADER__.apply(_this, arguments);
        };

        _this.export = _asyncToGenerator(regeneratorRuntime.mark(function _callee() {
            return regeneratorRuntime.wrap(function _callee$(_context) {
                while (1) {
                    switch (_context.prev = _context.next) {
                        case 0:
                            if (getEditor()) {
                                // let res = await api.getExportUrl(window.quillEditor.getContents());
                                document.getElementById('gf_down_file').src = res.url;
                            }

                        case 1:
                        case 'end':
                            return _context.stop();
                    }
                }
            }, _callee, _this2);
        }));

        _this.backList = _this.backList.bind(_this);
        _this.state = {
            panel: 1
        };
        return _this;
    }

    _createClass(EditorHeader, [{
        key: 'componentDidMount',
        value: function componentDidMount() {}
    }, {
        key: '__toggleCatalogue__REACT_HOT_LOADER__',
        value: function __toggleCatalogue__REACT_HOT_LOADER__() {
            return this.__toggleCatalogue__REACT_HOT_LOADER__.apply(this, arguments);
        }
    }, {
        key: '__toggleCatalogue__REACT_HOT_LOADER__',
        value: function __toggleCatalogue__REACT_HOT_LOADER__() {
            if (getEditor()) {
                var ops = getEditor().getContents().ops;
                var _ops = [];
                ops = ops.forEach(function (item, i) {
                    if (ops[i + 1] && ops[i + 1].attributes && ops[i + 1].attributes.header && is('String', item.insert)) {
                        _ops.push({
                            h: ops[i + 1].attributes.header,
                            content: item.insert
                        });
                    }
                });
                console.log(_ops);
                this.props.catalogue.open = true;
                this.props.catalogue.list = _ops;
            }
        }
    }, {
        key: 'backList',
        value: function backList() {
            // this.props.dispatch(push('/xnote/index'));
        }
    }, {
        key: '__print__REACT_HOT_LOADER__',
        value: function __print__REACT_HOT_LOADER__() {
            return this.__print__REACT_HOT_LOADER__.apply(this, arguments);
        }
    }, {
        key: '__print__REACT_HOT_LOADER__',
        value: function __print__REACT_HOT_LOADER__() {
            $('.ql-editor').printThis({
                pageTitle: '',
                header: null,
                footer: null
            });
        }
    }, {
        key: '__HelpMenuClick__REACT_HOT_LOADER__',
        value: function __HelpMenuClick__REACT_HOT_LOADER__() {
            return this.__HelpMenuClick__REACT_HOT_LOADER__.apply(this, arguments);
        }
    }, {
        key: '__HelpMenuClick__REACT_HOT_LOADER__',
        value: function __HelpMenuClick__REACT_HOT_LOADER__(_ref2) {
            var key = _ref2.key;

            if (key === '0') {
                help.hotKeysDialog = true;
            } else {
                this.props.helpOptions.forEach(function (item) {
                    if (item.key === key) {
                        item.onClick(key);
                    }
                });
            }
        }
    }, {
        key: '__fileMenuClick__REACT_HOT_LOADER__',
        value: function __fileMenuClick__REACT_HOT_LOADER__() {
            return this.__fileMenuClick__REACT_HOT_LOADER__.apply(this, arguments);
        }
    }, {
        key: '__fileMenuClick__REACT_HOT_LOADER__',
        value: function __fileMenuClick__REACT_HOT_LOADER__(_ref3) {
            var key = _ref3.key;

            if (key === '0') {
                $('.ql-editor').printThis({
                    pageTitle: '',
                    header: null,
                    footer: null
                });
            } else {
                this.props.helpOptions.forEach(function (item) {
                    if (item.key === key) {
                        item.onClick(key);
                    }
                });
            }
        }
    }, {
        key: '__insertMenuClick__REACT_HOT_LOADER__',
        value: function __insertMenuClick__REACT_HOT_LOADER__() {
            return this.__insertMenuClick__REACT_HOT_LOADER__.apply(this, arguments);
        }
    }, {
        key: '__insertMenuClick__REACT_HOT_LOADER__',
        value: function __insertMenuClick__REACT_HOT_LOADER__(_ref4) {
            var key = _ref4.key;

            if (key === '0') {
                insert.imageSelection = getEditor().getSelection();
                insert.openImageDialog = true;
            } else if (getEditor()) {
                var toolbar = getEditor().getModule('toolbar');
                toolbar.handlers['link'].call(toolbar, !(editor.format && editor.format.link));
            }
        }
    }, {
        key: 'changePanel',


        // renderOpverHeader() {
        //     const {panel} = this.state;
        //     return (
        //         <div className="toolbar-opver" id="toolbarOpver">
        //             <CommonHeader />
        //             <StartHeader style={{display:panel === 1 ? 'inline-block' : 'none'}}/>
        //         </div>
        //     );
        //
        // }

        value: function changePanel(panel) {
            var _this3 = this;

            return function () {
                if (panel === 4 || panel === 5) {
                    info('稍后开放，敬请期待');
                    return;
                }
                _this3.setState({ panel: panel });
            };
        }
    }, {
        key: 'renderMenubar',
        value: function renderMenubar() {
            var menu = React.createElement(
                Menu,
                { selectable: false, onClick: this.HelpMenuClick },
                React.createElement(
                    MenuItem,
                    { key: '0' },
                    '\u952E\u76D8\u5FEB\u6377\u952E'
                ),
                React.createElement(Divider, null),
                this.props.helpOptions.map(function (item) {
                    return React.createElement(
                        MenuItem,
                        { key: item.key },
                        item.content
                    );
                })
            );

            var fileMenu = React.createElement(
                Menu,
                { selectable: false, onClick: this.fileMenuClick },
                this.props.fileOptions.map(function (item) {
                    return React.createElement(
                        MenuItem,
                        { key: item.key },
                        item.content
                    );
                }),
                React.createElement(Divider, null),
                React.createElement(
                    MenuItem,
                    { key: '0' },
                    '\u6253\u5370'
                )
            );

            var panel = this.state.panel;

            return React.createElement(
                'div',
                { className: 'menu-bar' },
                React.createElement(
                    Dropdown,
                    {
                        trigger: ['click'],
                        overlay: fileMenu,
                        animation: 'slide-up'
                    },
                    React.createElement(
                        'span',
                        { className: 'file-tab' },
                        '\u6587\u4EF6'
                    )
                ),
                React.createElement(
                    Dropdown,
                    {
                        trigger: ['click'],
                        overlay: React.createElement(
                            Menu,
                            { selectable: false, onClick: this.insertMenuClick },
                            React.createElement(
                                MenuItem,
                                { key: '0' },
                                '\u63D2\u5165\u56FE\u7247'
                            ),
                            React.createElement(
                                MenuItem,
                                { key: '1' },
                                '\u63D2\u5165\u94FE\u63A5'
                            )
                        ),
                        animation: 'slide-up'
                    },
                    React.createElement(
                        'span',
                        { className: 'insert-tab' },
                        '\u63D2\u5165'
                    )
                ),
                React.createElement(
                    'span',
                    { className: 'view-tab ' + (panel === 3 ? 'active' : ''), onClick: this.changePanel(4) },
                    '\u89C6\u56FE'
                ),
                React.createElement(
                    'span',
                    { className: 'history-tab', onClick: this.changePanel(4) },
                    '\u4FEE\u8BA2\u5386\u53F2'
                ),
                React.createElement(
                    Dropdown,
                    {
                        trigger: ['click'],
                        overlay: menu,
                        animation: 'slide-up'
                    },
                    React.createElement(
                        'span',
                        { className: 'help-tab' },
                        '\u5E2E\u52A9'
                    )
                )
            );
        }
    }, {
        key: 'render',
        value: function render() {
            return React.createElement(
                'div',
                { className: 'weditor-header' },
                this.renderMenubar()
            );
        }
    }]);

    return EditorHeader;
}(Component), _class.defaultProps = {
    fileOptions: [],
    helpOptions: []
}, _temp);
export { EditorHeader as default };
;

var _temp2 = function () {
    if (typeof __REACT_HOT_LOADER__ === 'undefined') {
        return;
    }

    __REACT_HOT_LOADER__.register($, '$', 'src/header.js');

    __REACT_HOT_LOADER__.register(EditorHeader, 'EditorHeader', 'src/header.js');
}();

;