/**
 * Created by yeanzhi on 17/3/26.
 */
'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _class, _temp2;

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

import './index.scss';
import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { observer, inject } from 'mobx-react';

import Input from '../input/index';
import Button from '../button/index';
import { contains } from '../../lib/util';

var LinkBubble = (_temp2 = _class = function (_Component) {
    _inherits(LinkBubble, _Component);

    function LinkBubble() {
        var _ref;

        var _temp, _this, _ret;

        _classCallCheck(this, LinkBubble);

        for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
        }

        return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = LinkBubble.__proto__ || Object.getPrototypeOf(LinkBubble)).call.apply(_ref, [this].concat(args))), _this), _this.closeBubble = function () {
            var _this2;

            return (_this2 = _this).__closeBubble__REACT_HOT_LOADER__.apply(_this2, arguments);
        }, _this.otherDOMClick = function () {
            var _this3;

            return (_this3 = _this).__otherDOMClick__REACT_HOT_LOADER__.apply(_this3, arguments);
        }, _this.changeTitle = function () {
            var _this4;

            return (_this4 = _this).__changeTitle__REACT_HOT_LOADER__.apply(_this4, arguments);
        }, _this.changeUrl = function () {
            var _this5;

            return (_this5 = _this).__changeUrl__REACT_HOT_LOADER__.apply(_this5, arguments);
        }, _this.apply = function () {
            var _this6;

            return (_this6 = _this).__apply__REACT_HOT_LOADER__.apply(_this6, arguments);
        }, _temp), _possibleConstructorReturn(_this, _ret);
    }

    _createClass(LinkBubble, [{
        key: 'componentDidMount',
        value: function componentDidMount() {
            var _this7 = this;

            setTimeout(function () {
                window.document.addEventListener('click', _this7.otherDOMClick);
            }, 100);
            this.target = ReactDOM.findDOMNode(this);
        }
    }, {
        key: 'componentWillUnmount',
        value: function componentWillUnmount() {
            window.document.removeEventListener('click', this.otherDOMClick, false);
        }
    }, {
        key: '__closeBubble__REACT_HOT_LOADER__',
        value: function __closeBubble__REACT_HOT_LOADER__() {
            return this.__closeBubble__REACT_HOT_LOADER__.apply(this, arguments);
        }
    }, {
        key: '__closeBubble__REACT_HOT_LOADER__',
        value: function __closeBubble__REACT_HOT_LOADER__(e) {
            this.props.insert.openLinkDialog = false;
        }
    }, {
        key: '__otherDOMClick__REACT_HOT_LOADER__',
        value: function __otherDOMClick__REACT_HOT_LOADER__() {
            return this.__otherDOMClick__REACT_HOT_LOADER__.apply(this, arguments);
        }
    }, {
        key: '__otherDOMClick__REACT_HOT_LOADER__',
        value: function __otherDOMClick__REACT_HOT_LOADER__(e) {
            var node = e.target;
            if (!insert.openLinkDialog) {
                return false;
            }
            var target = this.target;
            if (insert.openLinkDialog && !contains(target, node)) {
                this.closeBubble();
            }
        }
    }, {
        key: '__changeTitle__REACT_HOT_LOADER__',
        value: function __changeTitle__REACT_HOT_LOADER__() {
            return this.__changeTitle__REACT_HOT_LOADER__.apply(this, arguments);
        }
    }, {
        key: '__changeTitle__REACT_HOT_LOADER__',
        value: function __changeTitle__REACT_HOT_LOADER__(e) {
            this.props.insert.linkTitle = e.target.value || '';
        }
    }, {
        key: '__changeUrl__REACT_HOT_LOADER__',
        value: function __changeUrl__REACT_HOT_LOADER__() {
            return this.__changeUrl__REACT_HOT_LOADER__.apply(this, arguments);
        }
    }, {
        key: '__changeUrl__REACT_HOT_LOADER__',
        value: function __changeUrl__REACT_HOT_LOADER__(e) {
            this.props.insert.linkUrl = e.target.value || '';
        }
    }, {
        key: '__apply__REACT_HOT_LOADER__',
        value: function __apply__REACT_HOT_LOADER__() {
            return this.__apply__REACT_HOT_LOADER__.apply(this, arguments);
        }
    }, {
        key: '__apply__REACT_HOT_LOADER__',
        value: function __apply__REACT_HOT_LOADER__() {
            if (getEditor() && !!this.props.insert.linkUrl) {
                var editor = getEditor();
                var selection = this.props.insert.linkSelection;
                if (selection) {
                    if (editor.getText(selection.index, selection.length) === this.props.insert.linkTitle) {
                        getEditor().format('link', this.props.insert.linkUrl, 'user');
                    } else {
                        var index = selection.index,
                            length = selection.length;

                        editor.deleteText(index, length, 'user');
                        var linkTitle = this.props.insert.linkTitle || this.props.insert.linkUrl;
                        editor.insertText(index, linkTitle, 'user');
                        editor.setSelection(index, linkTitle.length, 'user');
                        getEditor().format('link', this.props.insert.linkUrl, 'user');
                    }
                }
                this.props.insert.openLinkDialog = false;
            }
        }
    }, {
        key: 'render',
        value: function render() {
            // const {linkPosition,openLinkDialog} = this.props.insert;
            return React.createElement(
                'section',
                { className: 'weditor-bubble', style: {
                        top: this.props.insert.linkPosition.top,
                        left: this.props.insert.linkPosition.left,
                        display: this.props.insert.openLinkDialog ? 'block' : 'none'
                    } },
                React.createElement(
                    'div',
                    { className: 'weditor-bubble-item' },
                    React.createElement(
                        'span',
                        null,
                        '\u6587\u672C\uFF1A'
                    ),
                    ' ',
                    React.createElement(Input, { className: 'weditor-insert-input',
                        value: this.props.insert.linkTitle,
                        onChange: this.changeTitle })
                ),
                React.createElement(
                    'div',
                    { className: 'weditor-bubble-item' },
                    React.createElement(
                        'span',
                        null,
                        '\u94FE\u63A5\uFF1A'
                    ),
                    ' ',
                    React.createElement(Input, { className: 'weditor-insert-input',
                        value: this.props.insert.linkUrl,
                        onChange: this.changeUrl }),
                    React.createElement(
                        Button,
                        { onClick: this.apply },
                        '\u5E94\u7528'
                    )
                )
            );
        }
    }]);

    return LinkBubble;
}(Component), _class.defaultProps = {
    linkTitle: '',
    linkUrl: ''
}, _temp2);
export { LinkBubble as default };
;

var _temp3 = function () {
    if (typeof __REACT_HOT_LOADER__ === 'undefined') {
        return;
    }

    __REACT_HOT_LOADER__.register(LinkBubble, 'LinkBubble', 'src/components/linkBubble/index.js');
}();

;