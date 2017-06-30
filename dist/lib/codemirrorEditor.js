/**
 * Created by yeanzhi on 17/5/24.
 */
'use strict';

import CodeMirror from 'codemirror';
import './continuelist';
import 'codemirror/lib/codemirror.css';
import 'codemirror/mode/xml/xml';
import 'codemirror/theme/base16-light.css';
import 'codemirror/mode/markdown/markdown';
import 'codemirror/mode/gfm/gfm';
import 'codemirror/mode/javascript/javascript';
import 'codemirror/mode/css/css';
import 'codemirror/mode/htmlmixed/htmlmixed';

var editor = null;
export var initCodeMirrorEditor = function initCodeMirrorEditor(dom) {
    editor = CodeMirror.fromTextArea(dom, {
        mode: 'gfm',
        lineNumbers: false,
        matchBrackets: true,
        lineWrapping: true,
        theme: 'base16-light',
        extraKeys: { "Enter": "newlineAndIndentContinueMarkdownList" }
    });
    return editor;
};

export var getEditor = function getEditor() {
    return editor;
};
;

var _temp = function () {
    if (typeof __REACT_HOT_LOADER__ === 'undefined') {
        return;
    }

    __REACT_HOT_LOADER__.register(editor, 'editor', 'src/lib/codemirrorEditor.js');

    __REACT_HOT_LOADER__.register(initCodeMirrorEditor, 'initCodeMirrorEditor', 'src/lib/codemirrorEditor.js');

    __REACT_HOT_LOADER__.register(getEditor, 'getEditor', 'src/lib/codemirrorEditor.js');
}();

;