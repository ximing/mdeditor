/**
 * Created by yeanzhi on 17/7/20.
 */
'use strict';
// import ace from 'brace';
// import 'brace/mode/markdown';
// import 'brace/theme/github';

var ace = window.ace;
var editor = null;
var undoManager = new ace.UndoManager();
///mdEditor.session.addMarker(new Range(3, 3,3, 11), "bar", true);

export var initAceEditor = function initAceEditor(dom) {
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

export var getEditor = function getEditor() {
    return editor;
};

export var getUndoManager = function getUndoManager() {
    return undoManager;
};
;

var _temp = function () {
    if (typeof __REACT_HOT_LOADER__ === 'undefined') {
        return;
    }

    __REACT_HOT_LOADER__.register(ace, 'ace', 'src/lib/aceEditor.js');

    __REACT_HOT_LOADER__.register(editor, 'editor', 'src/lib/aceEditor.js');

    __REACT_HOT_LOADER__.register(undoManager, 'undoManager', 'src/lib/aceEditor.js');

    __REACT_HOT_LOADER__.register(initAceEditor, 'initAceEditor', 'src/lib/aceEditor.js');

    __REACT_HOT_LOADER__.register(getEditor, 'getEditor', 'src/lib/aceEditor.js');

    __REACT_HOT_LOADER__.register(getUndoManager, 'getUndoManager', 'src/lib/aceEditor.js');
}();

;