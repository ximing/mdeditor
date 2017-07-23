/**
 * Created by yeanzhi on 17/7/23.
 */
'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.insertBefore = exports.insertAround = exports.insert = undefined;

var _aceEditor = require('./aceEditor');

/**
 * Insert a string at cursor position
 * @param  {String} insertion
 * @param {int} cursorOffset
 */
var insert = exports.insert = function insert(insertion, cursorOffset) {
    var aceEditor = (0, _aceEditor.getEditor)();
    aceEditor.getSession().replace(aceEditor.getSelectionRange(), insertion);
    if (cursorOffset) {
        aceEditor.gotoLine(aceEditor.getSelectionRange().end.row + 1, aceEditor.getSelectionRange().end.column - insertion.length + cursorOffset - 1);
    }
};

/**
 * Insert a string at the start and end of a selection
 * @param  {String} start
 * @param  {String} end
 */
var insertAround = exports.insertAround = function insertAround(start, end) {
    //const quillEditor = getEditor();
    // var doc = quillEditor.getDoc();
    // var cursor = doc.getCursor();
    //
    // if (doc.somethingSelected()) {
    //     var selection = doc.getSelection();
    //     doc.replaceSelection(start + selection + end);
    // } else {
    //     doc.replaceRange(start + end, { line: cursor.line, ch: cursor.ch });
    //     doc.setCursor({ line: cursor.line, ch: cursor.ch + start.length })
    // }
    var aceEditor = (0, _aceEditor.getEditor)();
    insert('' + start + aceEditor.getSession().getTextRange() + end);
};

/**
 * Insert a string before a selection
 * @param  {String} insertion
 */
var insertBefore = exports.insertBefore = function insertBefore(insertion) {
    var cursorOffset = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;

    // const quillEditor = getEditor();
    // var doc = quillEditor.getDoc();
    // var cursor = doc.getCursor();
    //
    // if (doc.somethingSelected()) {
    //     var selections = doc.listSelections();
    //     selections.forEach(function(selection) {
    //         var pos = [selection.head.line, selection.anchor.line].sort();
    //
    //         for (var i = pos[0]; i <= pos[1]; i++) {
    //             doc.replaceRange(insertion, { line: i, ch: 0 });
    //         }
    //
    //         doc.setCursor({ line: pos[0], ch: cursorOffset || 0 });
    //     });
    // } else {
    //     doc.replaceRange(insertion, { line: cursor.line, ch: 0 });
    //     doc.setCursor({ line: cursor.line, ch: cursorOffset || 0 })
    // }
    var aceEditor = (0, _aceEditor.getEditor)();
    var position = aceEditor.getCursorPositionScreen();
    aceEditor.getSession().insert({ row: position.row, column: 0 }, insertion);
};