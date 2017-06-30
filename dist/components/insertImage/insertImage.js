/**
 * Created by yeanzhi on 17/3/27.
 */
'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { inject, observer } from 'mobx-react';
import 'rc-tabs/assets/index.css';
import Tabs, { TabPane } from 'rc-tabs';
import ScrollableInkTabBar from 'rc-tabs/lib/ScrollableInkTabBar.js';
import TabContent from 'rc-tabs/lib/TabContent.js';
import Dialog from '../dialog';
import { contains } from '../../lib/util';
import { Uploader } from '../uploader/index';
import Button from '../button';

import Input from '../input';
import { error } from '../toast';
var $ = window.jQuery;

var InsertImage = function (_Component) {
    _inherits(InsertImage, _Component);

    function InsertImage() {
        var _ref;

        var _temp, _this, _ret;

        _classCallCheck(this, InsertImage);

        for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
        }

        return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = InsertImage.__proto__ || Object.getPrototypeOf(InsertImage)).call.apply(_ref, [this].concat(args))), _this), _this.state = {
            activeKey: '1',
            linkUrl: ''
        }, _this.onLinkUrlChange = function () {
            var _this2;

            return (_this2 = _this).__onLinkUrlChange__REACT_HOT_LOADER__.apply(_this2, arguments);
        }, _this.insertLink = function () {
            var _this3;

            return (_this3 = _this).__insertLink__REACT_HOT_LOADER__.apply(_this3, arguments);
        }, _this.closeBubble = function () {
            var _this4;

            return (_this4 = _this).__closeBubble__REACT_HOT_LOADER__.apply(_this4, arguments);
        }, _this.otherDOMClick = function () {
            var _this5;

            return (_this5 = _this).__otherDOMClick__REACT_HOT_LOADER__.apply(_this5, arguments);
        }, _this.onChange = function () {
            var _this6;

            return (_this6 = _this).__onChange__REACT_HOT_LOADER__.apply(_this6, arguments);
        }, _temp), _possibleConstructorReturn(_this, _ret);
    }

    _createClass(InsertImage, [{
        key: 'componentDidMount',
        value: function componentDidMount() {
            var _this7 = this;

            setTimeout(function () {
                window.document.addEventListener('click', _this7.otherDOMClick);
            }, 100);
            this.initUploader();
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
        key: '__insertLink__REACT_HOT_LOADER__',
        value: function __insertLink__REACT_HOT_LOADER__() {
            return this.__insertLink__REACT_HOT_LOADER__.apply(this, arguments);
        }
    }, {
        key: '__insertLink__REACT_HOT_LOADER__',
        value: function __insertLink__REACT_HOT_LOADER__() {
            if (this.state.linkUrl) {}
        }
    }, {
        key: 'initUploader',
        value: function initUploader() {
            var _this8 = this;

            this.rootNode = ReactDOM.findDOMNode(this);
            this.target = this.rootNode.getElementsByClassName('weditor-insert-image-dialog')[0];
            var uploader = this.uploader = new Uploader({
                'dnd': '.weditor-uploader-wrapper',
                'pick': '#weditorUploaderPick',
                'auto': true,
                'chunked': false,
                'chunkSize': 20971520,
                'linterContiner': document,
                '$': $,
                'body': this.target,
                'multiple': false,
                'method': 'post',
                'withCredentials': true,
                'server': this.props.uploadUrl || ''
            });
            uploader.on('uploadAccept', function (obj, res) {
                res = JSON.parse(res);
                if (res.errno === 0) {
                    if (res.data.url) {
                        var _props$insert$imageSe = _this8.props.insert.imageSelection,
                            index = _props$insert$imageSe.index,
                            length = _props$insert$imageSe.length;

                        _this8.props.insert.openImageDialog = false;
                    }
                } else {
                    error('上传服务错误');
                }
            });
            uploader.on('uploadComplete', function () {
                uploader.reset();
            });
            uploader.on('uploadError', function () {
                uploader.reset();
                error('上传服务错误');
            });
        }
    }, {
        key: 'componentWillUnmount',
        value: function componentWillUnmount() {
            window.document.removeEventListener('click', this.otherDOMClick);
            this.uploader.removeEvent('uploadAccept');
            this.uploader.removeEvent('uploadComplete');
            this.uploader.removeEvent('uploadError');
            this.uploader.destory();
        }
    }, {
        key: '__closeBubble__REACT_HOT_LOADER__',
        value: function __closeBubble__REACT_HOT_LOADER__() {
            return this.__closeBubble__REACT_HOT_LOADER__.apply(this, arguments);
        }
    }, {
        key: '__closeBubble__REACT_HOT_LOADER__',
        value: function __closeBubble__REACT_HOT_LOADER__() {
            this.props.insert.openImageDialog = false;
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
            if (!insert.openImageDialog) {
                return false;
            }
            var target = this.target;
            if (insert.openImageDialog && !contains(target, node)) {
                this.closeBubble();
            }
        }
    }, {
        key: '__onChange__REACT_HOT_LOADER__',
        value: function __onChange__REACT_HOT_LOADER__() {
            return this.__onChange__REACT_HOT_LOADER__.apply(this, arguments);
        }
    }, {
        key: '__onChange__REACT_HOT_LOADER__',
        value: function __onChange__REACT_HOT_LOADER__(activeKey) {
            this.setState({
                activeKey: activeKey
            });
        }
    }, {
        key: 'render',
        value: function render() {
            var _this9 = this;

            return React.createElement(Dialog, {
                title: '\u63D2\u5165\u56FE\u7247',
                className: 'weditor-insert-image-dialog',
                content: React.createElement(
                    'div',
                    { className: 'weditor-insert-image' },
                    React.createElement(
                        'div',
                        { className: 'weditor-uploader-wrapper' },
                        React.createElement(
                            Tabs,
                            {
                                renderTabBar: function renderTabBar() {
                                    return React.createElement(ScrollableInkTabBar, { onTabClick: _this9.onTabClick });
                                },
                                renderTabContent: function renderTabContent() {
                                    return React.createElement(TabContent, { animatedWithMargin: true });
                                },
                                activeKey: this.state.activeKey,
                                onChange: this.onChange
                            },
                            React.createElement(
                                TabPane,
                                { tab: '本地上传', key: '1' },
                                React.createElement(
                                    'div',
                                    { className: 'weditor-uploader-file-inner' },
                                    React.createElement(
                                        'p',
                                        { className: 'weditor-image-tips' },
                                        '\u6700\u5927\u4E0A\u4F2020M\u7684\u56FE\u7247'
                                    ),
                                    React.createElement(
                                        Button,
                                        { id: 'weditorUploaderPick' },
                                        '\u70B9\u51FB\u4E0A\u4F20'
                                    )
                                )
                            ),
                            React.createElement(
                                TabPane,
                                { tab: '插入外链', key: '2' },
                                React.createElement(
                                    'div',
                                    { className: 'weditor-uploader-file-inner' },
                                    React.createElement(
                                        'div',
                                        null,
                                        React.createElement(Input, { onChange: this.onLinkUrlChange }),
                                        React.createElement(
                                            Button,
                                            { onClick: this.insertLink },
                                            '\u63D2\u5165'
                                        )
                                    )
                                )
                            )
                        )
                    )
                ),
                onClose: this.closeBubble
            });
        }
    }]);

    return InsertImage;
}(Component);

export { InsertImage as default };
;

var _temp2 = function () {
    if (typeof __REACT_HOT_LOADER__ === 'undefined') {
        return;
    }

    __REACT_HOT_LOADER__.register($, '$', 'src/components/insertImage/insertImage.js');

    __REACT_HOT_LOADER__.register(InsertImage, 'InsertImage', 'src/components/insertImage/insertImage.js');
}();

;