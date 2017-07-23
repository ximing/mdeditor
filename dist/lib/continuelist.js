/**
 * Created by yeanzhi on 17/5/24.
 */
'use strict';
// CodeMirror, copyright (c) by Marijn Haverbeke and others
// Distributed under an MIT license: http://codemirror.net/LICENSE

import CodeMirror from 'codemirror';

var listRE = /^(\s*)(>[> ]*|[*+-]\s|(\d+)\.)(\s*)/,
    emptyListRE = /^(\s*)(>[> ]*|[*+-]|(\d+)\.)(\s*)$/,
    unorderedListRE = /[*+-]\s/;

CodeMirror.commands.newlineAndIndentContinueMarkdownList = function (cm) {
    if (cm.getOption("disableInput")) return CodeMirror.Pass;
    var ranges = cm.listSelections(),
        replacements = [];

    //console.log('range:',ranges);

    for (var i = 0; i < ranges.length; i++) {
        var pos = ranges[i].head;
        var eolState = cm.getStateAfter(pos.line);
        var inList = eolState.list !== false;
        var inQuote = eolState.quote !== 0;

        var line = cm.getLine(pos.line),
            match = listRE.exec(line);
        if (!ranges[i].empty() || !inList && !inQuote || !match) {
            cm.execCommand("newlineAndIndent");
            return;
        }
        if (emptyListRE.test(line)) {
            cm.replaceRange("\n", {
                line: pos.line, ch: 0
            }, {
                line: pos.line, ch: pos.ch + 1
            });
            //replacements[i] = "\n";
        } else {
            var indent = match[1],
                after = match[4];
            var bullet = unorderedListRE.test(match[2]) || match[2].indexOf(">") >= 0 ? match[2] : parseInt(match[3], 10) + 1 + ".";

            replacements[i] = "\n" + indent + bullet + after;
        }
    }

    if (replacements.length > 0) {
        cm.replaceSelections(replacements);
    }
};
;

var _temp = function () {
    if (typeof __REACT_HOT_LOADER__ === 'undefined') {
        return;
    }

    __REACT_HOT_LOADER__.register(listRE, 'listRE', 'src/lib/continuelist.js');

    __REACT_HOT_LOADER__.register(emptyListRE, 'emptyListRE', 'src/lib/continuelist.js');

    __REACT_HOT_LOADER__.register(unorderedListRE, 'unorderedListRE', 'src/lib/continuelist.js');
}();

;