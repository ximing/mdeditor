/**
 * Created by yeanzhi on 17/5/24.
 */
'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.getEditor = exports.initCodeMirrorEditor = undefined;

var _codemirror = require('codemirror');

var _codemirror2 = _interopRequireDefault(_codemirror);

require('./continuelist');

require('codemirror/lib/codemirror.css');

require('codemirror/mode/xml/xml');

require('codemirror/theme/base16-light.css');

require('codemirror/mode/markdown/markdown');

require('codemirror/mode/gfm/gfm');

require('codemirror/mode/javascript/javascript');

require('codemirror/mode/css/css');

require('codemirror/mode/htmlmixed/htmlmixed');

require('../style/codemirror.scss');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var editor = null;
var initCodeMirrorEditor = exports.initCodeMirrorEditor = function initCodeMirrorEditor(dom) {
    editor = _codemirror2.default.fromTextArea(dom, {
        mode: 'gfm',
        lineNumbers: false,
        matchBrackets: true,
        lineWrapping: true,
        theme: 'base16-light',
        extraKeys: { "Enter": "newlineAndIndentContinueMarkdownList" }
    });
    return editor;
};

var getEditor = exports.getEditor = function getEditor() {
    return editor;
};