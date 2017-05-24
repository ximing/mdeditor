/**
 * Created by yeanzhi on 17/3/26.
 */
'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _dec, _class;

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import Header from './header';
import LinkBubble from './components/linkBubble';
import InsertImage from './components/insertImage';
import HotKeysDialog from './components/hotKeysDialog';
import Preview from './components/preview/preview';
import { inject, observer } from 'mobx-react';
import Editor from './components/editor';
var $ = window.jQuery;
import editor from './model/editor';

var WEditor = (_dec = inject(function (state) {
    return {
        insert: state.insert,
        open: state.catalogue.open,
        focus: state.editor.focus,
        help: state.help
    };
}), _dec(_class = observer(_class = function (_Component) {
    _inherits(WEditor, _Component);

    function WEditor(props) {
        _classCallCheck(this, WEditor);

        var _this = _possibleConstructorReturn(this, (WEditor.__proto__ || Object.getPrototypeOf(WEditor)).call(this, props));

        _this.state = {
            left: window.innerWidth / 2 - 400,
            scrollTop: 0
        };

        editor.value = props.defaultValue;
        return _this;
    }

    _createClass(WEditor, [{
        key: 'componentDidMount',
        value: function componentDidMount() {
            var editorDom = this.editorDom = $(ReactDOM.findDOMNode(this.refs.editor)).find('.ql-editor');
            editorDom.on('blur', function () {
                editor.focus = false;
            });

            var $divs = $('.CodeMirror-scroll, .weditor-preview');
            var timer = null;
            var sync = function sync(e) {
                clearTimeout(timer);
                var $other = $divs.not(this).off('scroll'),
                    other = $other.get(0);
                var percentage = this.scrollTop / (this.scrollHeight - this.offsetHeight);
                other.scrollTop = percentage * (other.scrollHeight - other.offsetHeight);
                timer = setTimeout(function () {
                    $other.on('scroll', sync);
                }, 200);
            };
            $divs.on('scroll', sync);
        }
    }, {
        key: 'componentWillUnmount',
        value: function componentWillUnmount() {}
    }, {
        key: 'componentWillReceiveProps',
        value: function componentWillReceiveProps(nextProps) {
            this.setState({
                left: nextProps.open ? window.innerWidth / 2 - 300 : window.innerWidth / 2 - 400
            });
        }
    }, {
        key: 'onChange',
        value: function onChange(e) {
            editor.value = e.getValue();
        }
    }, {
        key: 'render',
        value: function render() {
            return React.createElement(
                'div',
                { className: 'weditor-wrapper' },
                React.createElement(Header, { doc: this.props.doc,
                    fileOptions: this.props.options.fileOptions,
                    rightContent: this.props.rightContent,
                    helpOptions: this.props.options.helpOptions }),
                React.createElement(
                    'div',
                    { className: 'weditor-body' },
                    React.createElement(
                        'div',
                        { className: 'content-container' },
                        React.createElement(Editor, { defalutValue: this.props.defaultValue, onChange: this.onChange })
                    ),
                    React.createElement(
                        'div',
                        { className: 'weditor-preview' },
                        React.createElement(Preview, null)
                    )
                ),
                this.props.insert.openLinkDialog && React.createElement(LinkBubble, null),
                this.props.insert.openImageDialog && React.createElement(InsertImage, { uploadUrl: this.props.options.uploadUrl }),
                this.props.help.hotKeysDialog && React.createElement(HotKeysDialog, null)
            );
        }
    }]);

    return WEditor;
}(Component)) || _class) || _class);
export { WEditor as default };


export var call = function call() {};
;

var _temp = function () {
    if (typeof __REACT_HOT_LOADER__ === 'undefined') {
        return;
    }

    __REACT_HOT_LOADER__.register($, '$', 'src/weditor.js');

    __REACT_HOT_LOADER__.register(WEditor, 'WEditor', 'src/weditor.js');

    __REACT_HOT_LOADER__.register(call, 'call', 'src/weditor.js');
}();

;