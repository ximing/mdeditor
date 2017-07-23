/**
 * Created by yeanzhi on 17/7/20.
 */
'use strict';
// import ace from 'brace';
// import 'brace/mode/markdown';
// import 'brace/theme/github';

Object.defineProperty(exports, "__esModule", {
    value: true
});
var ace = window.ace;
var editor = null;
var undoManager = new ace.UndoManager();
///mdEditor.session.addMarker(new Range(3, 3,3, 11), "bar", true);

var initAceEditor = exports.initAceEditor = function initAceEditor(dom) {
    editor = window.aceEditor = ace.edit(dom);
    editor.getSession().setMode("ace/mode/markdown");
    editor.getSession().setTabSize(4);
    editor.getSession().setUseWrapMode(true);
    editor.getSession().setUndoManager(undoManager);

    editor.setTheme('ace/theme/github');

    editor.setOptions({
        fontSize: "12pt",
        enableMultiselect: false
    });
    return editor;
};

var getEditor = exports.getEditor = function getEditor() {
    return editor;
};

var getUndoManager = exports.getUndoManager = function getUndoManager() {
    return undoManager;
};