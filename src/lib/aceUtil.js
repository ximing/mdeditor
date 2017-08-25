/**
 * Created by yeanzhi on 17/7/23.
 */
'use strict';
import {getEditor} from './aceEditor';
/**
 * Insert a string at cursor position
 * @param  {String} insertion
 * @param {int} cursorOffset
 */
export const insert = function (insertion, cursorOffset) {
    const aceEditor = getEditor();
    aceEditor.getSession().replace(aceEditor.getSelectionRange(), insertion);
    if(cursorOffset){
        aceEditor.gotoLine(aceEditor.getSelectionRange().end.row + 1,
            aceEditor.getSelectionRange().end.column - insertion.length + cursorOffset - 1);
    }
};

/**
 * Insert a string at the start and end of a selection
 * @param  {String} start
 * @param  {String} end
 */
export const insertAround = function (start, end) {
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
    const aceEditor = getEditor();
    insert(`${start}${aceEditor.getSession().getTextRange()}${end}`);
};

/**
 * Insert a string before a selection
 * @param  {String} insertion
 */
export const insertBefore = function (insertion, cursorOffset = 0) {
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
    const aceEditor = getEditor();
    // aceEditor.insert(insertion);
    const position = aceEditor.selection.getCursor();
    aceEditor.session.insert({row: position.row, column: 0}, insertion);
};
