/**
 * Created by pomy on 07/02/2017.
 */

'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _class, _temp;

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

import React, { Component } from 'react';
import { Provider } from 'mobx-react';

import './style/index.scss';
import { getEditor as _getEditor } from './lib/codemirrorEditor';
import WEditor from './weditor';
import catalogue from './model/catalogue';
import insert from './model/insert';
import editor from './model/editor';
import help from './model/help';

var Editor = (_temp = _class = function (_Component) {
    _inherits(Editor, _Component);

    function Editor() {
        _classCallCheck(this, Editor);

        var _this = _possibleConstructorReturn(this, (Editor.__proto__ || Object.getPrototypeOf(Editor)).call(this));

        _this.getEditor = _getEditor;
        return _this;
    }

    _createClass(Editor, [{
        key: 'getEditor',
        value: function getEditor() {
            return _getEditor();
        }
    }, {
        key: 'render',
        value: function render() {
            return React.createElement(
                Provider,
                {
                    catalogue: catalogue,
                    insert: insert,
                    editor: editor,
                    help: help
                },
                React.createElement(WEditor, { defaultValue: this.props.defaultValue,
                    options: this.props.options,
                    coCursors: this.props.coCursors,
                    doc: this.props.doc,
                    rightContent: this.props.rightContent })
            );
        }
    }]);

    return Editor;
}(Component), _class.defaultProps = {
    options: {
        uploadUrl: '',
        helpOptions: [],
        fileOptions: []
    },
    doc: {
        name: '',
        status: ''
    },
    coCursors: [],
    rightContent: null
}, _temp);
var _default = Editor;

export default _default;
;

var _temp2 = function () {
    if (typeof __REACT_HOT_LOADER__ === 'undefined') {
        return;
    }

    __REACT_HOT_LOADER__.register(Editor, 'Editor', 'src/index.js');

    __REACT_HOT_LOADER__.register(_default, 'default', 'src/index.js');
}();

;