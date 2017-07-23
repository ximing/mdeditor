/**
 * Created by yeanzhi on 17/3/26.
 */
'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _class, _class2, _temp;

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

import './index.scss';
import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import debounce from 'lodash.debounce';

import Input from '../input/index';
import Button from '../button/index';
import { contains } from '../../lib/util';
import { insert as insertText } from '../../lib/aceUtil';
import insert from '../../model/insert';
import Dialog from '../dialog';

var $ = window.jQuery;

import { inject, observer } from 'mobx-react';

var LinkBubble = observer(_class = (_temp = _class2 = function (_Component) {
    _inherits(LinkBubble, _Component);

    _createClass(LinkBubble, [{
        key: '__onWindowResize__REACT_HOT_LOADER__',
        value: function __onWindowResize__REACT_HOT_LOADER__() {
            return this.__onWindowResize__REACT_HOT_LOADER__.apply(this, arguments);
        }
    }, {
        key: '__onWindowResize__REACT_HOT_LOADER__',
        value: function __onWindowResize__REACT_HOT_LOADER__() {
            return this.__onWindowResize__REACT_HOT_LOADER__.apply(this, arguments);
        }
    }, {
        key: '__onWindowResize__REACT_HOT_LOADER__',
        value: function __onWindowResize__REACT_HOT_LOADER__() {
            this.closeBubble();
        }
    }]);

    function LinkBubble() {
        _classCallCheck(this, LinkBubble);

        var _this = _possibleConstructorReturn(this, (LinkBubble.__proto__ || Object.getPrototypeOf(LinkBubble)).call(this));

        _this.onWindowResize = function () {
            return _this.__onWindowResize__REACT_HOT_LOADER__.apply(_this, arguments);
        };

        _this.closeBubble = function () {
            return _this.__closeBubble__REACT_HOT_LOADER__.apply(_this, arguments);
        };

        _this.otherDOMClick = function () {
            return _this.__otherDOMClick__REACT_HOT_LOADER__.apply(_this, arguments);
        };

        _this.onLinkUrlChange = function () {
            return _this.__onLinkUrlChange__REACT_HOT_LOADER__.apply(_this, arguments);
        };

        _this.onTitleChange = function () {
            return _this.__onTitleChange__REACT_HOT_LOADER__.apply(_this, arguments);
        };

        _this.insertLink = function () {
            return _this.__insertLink__REACT_HOT_LOADER__.apply(_this, arguments);
        };

        _this.debounceWindowResize = debounce(_this.onWindowResize);
        return _this;
    }

    _createClass(LinkBubble, [{
        key: 'componentDidMount',
        value: function componentDidMount() {
            var _this2 = this;

            setTimeout(function () {
                $(document).on('mousedown', _this2.otherDOMClick);
            }, 10);
            this.target = ReactDOM.findDOMNode(this);
            $(window).on('resize', this.debounceWindowResize);
        }
    }, {
        key: 'componentWillUnmount',
        value: function componentWillUnmount() {
            $(document).off('mousedown', this.otherDOMClick);
            $(window).off('resize', this.debounceWindowResize);
        }
    }, {
        key: '__closeBubble__REACT_HOT_LOADER__',
        value: function __closeBubble__REACT_HOT_LOADER__() {
            return this.__closeBubble__REACT_HOT_LOADER__.apply(this, arguments);
        }
    }, {
        key: '__closeBubble__REACT_HOT_LOADER__',
        value: function __closeBubble__REACT_HOT_LOADER__() {
            return this.__closeBubble__REACT_HOT_LOADER__.apply(this, arguments);
        }
    }, {
        key: '__closeBubble__REACT_HOT_LOADER__',
        value: function __closeBubble__REACT_HOT_LOADER__() {
            insert.openLinkDialog = false;
            insert.isReadOnlyLink = false;
        }
    }, {
        key: '__otherDOMClick__REACT_HOT_LOADER__',
        value: function __otherDOMClick__REACT_HOT_LOADER__() {
            return this.__otherDOMClick__REACT_HOT_LOADER__.apply(this, arguments);
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
        key: '__onLinkUrlChange__REACT_HOT_LOADER__',
        value: function __onLinkUrlChange__REACT_HOT_LOADER__() {
            return this.__onLinkUrlChange__REACT_HOT_LOADER__.apply(this, arguments);
        }
    }, {
        key: '__onLinkUrlChange__REACT_HOT_LOADER__',
        value: function __onLinkUrlChange__REACT_HOT_LOADER__() {
            return this.__onLinkUrlChange__REACT_HOT_LOADER__.apply(this, arguments);
        }
    }, {
        key: '__onLinkUrlChange__REACT_HOT_LOADER__',
        value: function __onLinkUrlChange__REACT_HOT_LOADER__(e) {
            this.setState({
                linkUrl: e.target.value
            });
        }
    }, {
        key: '__onTitleChange__REACT_HOT_LOADER__',
        value: function __onTitleChange__REACT_HOT_LOADER__() {
            return this.__onTitleChange__REACT_HOT_LOADER__.apply(this, arguments);
        }
    }, {
        key: '__onTitleChange__REACT_HOT_LOADER__',
        value: function __onTitleChange__REACT_HOT_LOADER__() {
            return this.__onTitleChange__REACT_HOT_LOADER__.apply(this, arguments);
        }
    }, {
        key: '__onTitleChange__REACT_HOT_LOADER__',
        value: function __onTitleChange__REACT_HOT_LOADER__(e) {
            this.setState({
                linkTitle: e.target.value
            });
        }
    }, {
        key: '__insertLink__REACT_HOT_LOADER__',
        value: function __insertLink__REACT_HOT_LOADER__() {
            return this.__insertLink__REACT_HOT_LOADER__.apply(this, arguments);
        }
    }, {
        key: '__insertLink__REACT_HOT_LOADER__',
        value: function __insertLink__REACT_HOT_LOADER__() {
            return this.__insertLink__REACT_HOT_LOADER__.apply(this, arguments);
        }
    }, {
        key: '__insertLink__REACT_HOT_LOADER__',
        value: function __insertLink__REACT_HOT_LOADER__() {
            if (this.state.linkUrl) {
                if (this.state.linkUrl.indexOf('http') !== 0) {
                    this.state.linkUrl = 'http://' + this.state.linkUrl;
                }
                if (!this.state.linkTitle) {
                    this.state.linkTitle = this.state.linkUrl;
                }
                insertText('[' + this.state.linkTitle + '](' + this.state.linkUrl + ')');
            }
            this.closeBubble();
        }
    }, {
        key: 'render',
        value: function render() {
            return React.createElement(Dialog, {
                title: '\u63D2\u5165\u94FE\u63A5',
                className: 'mdeditor-insert-link-dialog',
                content: React.createElement(
                    'div',
                    { className: 'mdeditor-insert-link' },
                    React.createElement(
                        'div',
                        { className: 'mdeditor-form-item' },
                        React.createElement(
                            'span',
                            { className: 'mdeditor-form-title' },
                            'Title'
                        ),
                        React.createElement(Input, { className: 'mdeditor-form-content', onChange: this.onTitleChange })
                    ),
                    React.createElement(
                        'div',
                        { className: 'mdeditor-form-item' },
                        React.createElement(
                            'span',
                            { className: 'mdeditor-form-title' },
                            'URL'
                        ),
                        React.createElement(Input, { className: 'mdeditor-form-content', onChange: this.onLinkUrlChange })
                    )
                ),
                buttons: [{ text: '取消', type: 'white', action: this.closeBubble }, { text: '插入', action: this.insertLink }],
                onClose: this.closeBubble
            });
        }
    }]);

    return LinkBubble;
}(Component), _class2.defaultProps = {
    linkTitle: '',
    linkUrl: ''
}, _temp)) || _class;

export { LinkBubble as default };
;

var _temp2 = function () {
    if (typeof __REACT_HOT_LOADER__ === 'undefined') {
        return;
    }

    __REACT_HOT_LOADER__.register($, '$', 'src/components/linkBubble/index.js');

    __REACT_HOT_LOADER__.register(LinkBubble, 'LinkBubble', 'src/components/linkBubble/index.js');
}();

;