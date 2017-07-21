/**
 * Created by yeanzhi on 17/7/20.
 */
'use strict';
import ace from 'brace';
import 'brace/mode/markdown';
import 'brace/theme/github';

let editor = null;
let undoManager = new ace.UndoManager()
export const initAceEditor = function (dom) {
    editor = window.aceEditor = ace.edit(dom);
    editor.getSession().setMode("ace/mode/markdown");
    editor.getSession().setTabSize(4);
    editor.getSession().setUseWrapMode(true);
    editor.getSession().setUndoManager(undoManager);

    editor.setTheme('ace/theme/github');

    editor.setOptions({
        fontSize: "12pt"
    });
    return editor;
};

export const getEditor = function () {
    return editor;
};

export const getUndoManager = function () {
    return undoManager;
}
