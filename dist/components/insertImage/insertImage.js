/**
 * Created by yeanzhi on 17/3/27.
 */
'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import 'rc-tabs/assets/index.css';
import Tabs, { TabPane } from 'rc-tabs';
import ScrollableInkTabBar from 'rc-tabs/lib/ScrollableInkTabBar.js';
import TabContent from 'rc-tabs/lib/TabContent.js';
import Dialog from '../dialog';
import { contains } from '../../lib/util';
import { Uploader } from '../uploader/index';
import Button from '../button';
import insert from '../../model/insert';
import { getEditor } from '../../lib/aceEditor';
import { Line } from 'rc-progress';
import { error } from '../toast';
import Input from '../input';
var $ = window.jQuery;
import { insertAround, insertBefore } from '../../lib/aceUtil';

var InsertImage = function (_Component) {
    _inherits(InsertImage, _Component);

    function InsertImage() {
        var _ref,
            _this3 = this;

        var _temp, _this, _ret;

        _classCallCheck(this, InsertImage);

        for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
        }

        return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = InsertImage.__proto__ || Object.getPrototypeOf(InsertImage)).call.apply(_ref, [this].concat(args))), _this), _this.state = {
            activeKey: '1',
            linkUrl: '',
            progress: 0
        }, _this.onLinkUrlChange = function () {
            var _this2;

            return (_this2 = _this).__onLinkUrlChange__REACT_HOT_LOADER__.apply(_this2, arguments);
        }, _this.onLoad = function () {
            var _ref2 = _asyncToGenerator(regeneratorRuntime.mark(function _callee(url) {
                return regeneratorRuntime.wrap(function _callee$(_context) {
                    while (1) {
                        switch (_context.prev = _context.next) {
                            case 0:
                                return _context.abrupt('return', new Promise(function (res, rej) {
                                    var elem = document.createElement("img");
                                    elem.setAttribute("src", url);
                                    elem.onload = function () {
                                        res({
                                            width: this.width,
                                            height: this.height
                                        });
                                    };
                                    elem.onerror = function () {
                                        res({
                                            code: 500
                                        });
                                    };
                                }));

                            case 1:
                            case 'end':
                                return _context.stop();
                        }
                    }
                }, _callee, _this3);
            }));

            return function (_x) {
                return _ref2.apply(this, arguments);
            };
        }(), _this.insertImage = function () {
            var _ref3 = _asyncToGenerator(regeneratorRuntime.mark(function _callee2(url) {
                return regeneratorRuntime.wrap(function _callee2$(_context2) {
                    while (1) {
                        switch (_context2.prev = _context2.next) {
                            case 0:
                                insertAround('![' + url, '](' + url + ')\n');
                                insert.openImageDialog = false;

                            case 2:
                            case 'end':
                                return _context2.stop();
                        }
                    }
                }, _callee2, _this3);
            }));

            return function (_x2) {
                return _ref3.apply(this, arguments);
            };
        }(), _this.insertLink = function () {
            var _this4;

            return (_this4 = _this).__insertLink__REACT_HOT_LOADER__.apply(_this4, arguments);
        }, _this.closeBubble = function () {
            var _this5;

            return (_this5 = _this).__closeBubble__REACT_HOT_LOADER__.apply(_this5, arguments);
        }, _this.otherDOMClick = function () {
            var _this6;

            return (_this6 = _this).__otherDOMClick__REACT_HOT_LOADER__.apply(_this6, arguments);
        }, _this.onChange = function () {
            var _this7;

            return (_this7 = _this).__onChange__REACT_HOT_LOADER__.apply(_this7, arguments);
        }, _temp), _possibleConstructorReturn(_this, _ret);
    }

    _createClass(InsertImage, [{
        key: 'componentDidMount',
        value: function componentDidMount() {
            var _this8 = this;

            setTimeout(function () {
                $(document).on('mousedown', _this8.otherDOMClick);
            }, 10);
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
            if (this.state.linkUrl) {
                this.insertImage(this.state.linkUrl);
            }
        }
    }, {
        key: 'initUploader',
        value: function initUploader() {
            var _this9 = this;

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
                'server': this.props.uploadUrl || '',
                accept: {
                    title: 'Images',
                    extensions: 'jpg,jpeg,bmp,png,gif',
                    mimeTypes: 'image/*'
                }
            });

            uploader.on('beforeFileQueued', function (wuFile) {
                if (wuFile.size > 1024 * 1024 * 20) {
                    error('图片大小不能超过20M');
                    uploader.reset();
                    return false;
                }
                return true;
            });

            uploader.on('fileQueued', function (wuFile) {
                _this9.file = wuFile;
            });

            uploader.on('uploadProgress', function (file, currentProgress, loaded, total) {
                console.log('uploadProgress'.repeat(10));
                console.log(currentProgress, loaded, total);
                _this9.setState({
                    progress: currentProgress / total * 100
                });
            });

            uploader.on('uploadAccept', function (obj, res) {
                _this9.file = null;
                if (typeof res === 'string') {
                    res = JSON.parse(res);
                }
                console.log('uploadAccept', res, res.errno === 0, insert);
                if (res.errno === 0) {
                    if (res.data.url) {
                        _this9.insertImage(res.data.url);
                    }
                } else {
                    error('上传服务错误');
                }
            });

            uploader.on('uploadComplete', function () {
                uploader.reset();
            });

            uploader.on('uploadError', function (file, err) {
                console.error(err);
                uploader.reset();
                error('上传服务错误!');
            });
        }
    }, {
        key: 'componentWillUnmount',
        value: function componentWillUnmount() {
            $(document).off('mousedown', this.otherDOMClick);
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
            if (this.file && this.file.id) {
                this.uploader.removeFile(this.file.id);
            }
            insert.openImageDialog = false;
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
            var _this10 = this;

            var progress = this.state.progress;

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
                                    return React.createElement(ScrollableInkTabBar, { onTabClick: _this10.onTabClick });
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
                                        { className: 'weditor-image-tips',
                                            style: { display: progress === 0 || progress === 100 ? 'block' : 'none' } },
                                        '\u6700\u5927\u4E0A\u4F2020M\u7684\u56FE\u7247'
                                    ),
                                    React.createElement(
                                        Button,
                                        { id: 'weditorUploaderPick',
                                            style: { display: progress === 0 || progress === 100 ? 'block' : 'none' } },
                                        '\u70B9\u51FB\u4E0A\u4F20'
                                    ),
                                    React.createElement(Line, { percent: progress, trailWidth: '2', strokeWidth: '2', strokeColor: '#118bfb',
                                        style: { display: progress > 0 && progress < 100 ? 'block' : 'none' } })
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