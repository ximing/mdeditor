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
import 'codemirror/mode/javascript/javascript'
import 'codemirror/mode/css/css';
import 'codemirror/mode/htmlmixed/htmlmixed';
import '../style/codemirror.scss';

let editor = null;
export const initCodeMirrorEditor = function (dom) {
    editor = CodeMirror.fromTextArea(dom,{
        mode: 'gfm',
        lineNumbers: false,
        matchBrackets: true,
        lineWrapping: true,
        theme: 'base16-light',
        extraKeys: {"Enter": "newlineAndIndentContinueMarkdownList"}
    });
    return editor;
}

export const getEditor = function () {
    return editor;
}
