/**
 * Created by yeanzhi on 17/5/20.
 */
'use strict';
import React, {Component} from 'react';
import {inject, observer} from 'mobx-react';

import ToolTip from './components/tooltip';
import Icon from './components/icon';
import classnames from 'classnames';

import {getEditor,getUndoManager} from './lib/aceEditor';
import {getCtrl} from './lib/util';

@inject(state => ({
    rangeFormat: state.editor.format,
    editor: state.editor
})) @observer
export default class EditorToolbar extends Component {
    constructor() {
        super();
    }

    componentDidMount() {
        setTimeout(() => {
            if (false&&getEditor()) {
                getEditor().addKeyMap({
                    [`${getCtrl()}-B`]: (cm) => {
                        this.insertAround('**', '**');
                    },
                    [`${getCtrl()}-I`]: (cm) => {
                        this.insertAround('**', '**');
                    },
                    [`${getCtrl()}-shift-S`]: () => {
                        this.insertAround('~', '~')
                    },
                    [`${getCtrl()}-Alt-L`]: () => {
                        this.insertBefore('1. ', 3);
                    },
                    [`${getCtrl()}-Alt-U`]: () => {
                        this.insertBefore('* ', 3);
                    },
                    [`${getCtrl()}-Alt-H`]: () => {
                        this.insert('---');
                    },
                    [`${getCtrl()}-Alt-C`]: () => {
                        this.insertAround('```\r\n', '\r\n```')
                    },
                    [`${getCtrl()}-Alt-I`]: () => {
                        this.insertAround('[', '](http://)');
                    },
                    [`${getCtrl()}-Alt-Q`]: () => {
                        this.insertBefore('> ', 2);
                    },
                    [`${getCtrl()}-Alt-L`]: () => {
                        this.insertBefore('![](http://)', 2);
                    },
                    [`${getCtrl()}-Alt-0`]: () => {
                        this.insertBefore('![](http://)', 2);
                    },
                    [`${getCtrl()}-Alt-1`]: () => {
                        this.insertBefore('# ', 0);
                    },
                    [`${getCtrl()}-Alt-2`]: () => {
                        this.insertBefore('## ', 0);
                    },
                    [`${getCtrl()}-Alt-3`]: () => {
                        this.insertBefore('### ', 0);
                    },
                    [`${getCtrl()}-Alt-4`]: () => {
                        this.insertBefore('#### ', 0);
                    },
                    [`${getCtrl()}-Alt-5`]: () => {
                        this.insertBefore('##### ', 0);
                    },
                    [`${getCtrl()}-Alt-6`]: () => {
                        this.insertBefore('###### ', 0);
                    }
                })
            }
        }, 1000);


    }

    /**
     * Check if the current selection has a mark with `type` in it.
     *
     * @param {String} type
     * @return {Boolean}
     */

    hasMark = (type) => {
        return this.props.editor.format[type]
    }

    /**
     * Check if the any of the currently selected blocks are of `type`.
     *
     * @param {String} type
     * @return {Boolean}
     */

    hasBlock = (type) => {
        return this.props.editor.format[type]
    }


    /**
     * Render a mark-toggling toolbar button.
     *
     * @param {String} type
     * @param {String} icon
     * @return {Element}
     */

    renderMarkButton = (type, icon) => {
        const isActive = this.hasMark(type);
        const onMouseDown = e => this.onClickMark(e, type);
        const classname = classnames({
            button: true,
            active: isActive
        })
        return (
            <button className={classname} onMouseDown={onMouseDown}>
                <Icon type={icon}/>
            </button>
        )
    }

    /**
     * When a mark button is clicked, toggle the current mark.
     *
     * @param {Event} e
     * @param {String} type
     */

    onClickMark = (e, type) => {
        e.preventDefault()
        const quillEditor = getEditor();
        if (quillEditor) {
            if (type === 'bold') {
                this.insertAround('**', '**')
            } else if (type === 'italic') {
                this.insertAround('*', '*')
            } else if (type === 'code') {
                this.insertAround('```\r\n', '\r\n```')
            } else if (type === 'strike') {
                this.insertAround('~', '~')
            } else if (type === 'ordered') {
                this.insertBefore('1. ', 3);
            } else if (type === 'bullet') {
                this.insertBefore('* ', 3);
            } else if (type === 'hr') {
                this.insert('---');
            } else if (type === 'quote') {
                this.insertBefore('> ', 2);
            } else if (type === 'image') {
                this.insertAround('[', '](http://)');
            } else if (type === 'link') {
                this.insertBefore('![](http://)', 2);
            } else if (type === 'h1') {
                this.insertBefore('# ', 0);
            } else if (type === 'h2') {
                this.insertBefore('## ', 0);
            } else if (type === 'h3') {
                this.insertBefore('### ', 0);
            }
        }
    }

    /**
     * Insert a string at cursor position
     * @param  {String} insertion
     */
    insert(insertion) {
        const aceEditor = getEditor();
        console.log(insertion)
        aceEditor.getSession().replace(aceEditor.getSelectionRange(), insertion)
    }

    /**
     * Insert a string at the start and end of a selection
     * @param  {String} start
     * @param  {String} end
     */
    insertAround(start, end) {
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
        console.log(start, end)
        const aceEditor = getEditor();
        this.insert(`${start}${aceEditor.getSession().getTextRange()}${end}`);
    }

    /**
     * Insert a string before a selection
     * @param  {String} insertion
     */
    insertBefore(insertion, cursorOffset = 0) {
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
        const position = aceEditor.getCursorPositionScreen();
        aceEditor.getSession().insert({row: position.row, column: 0}, insertion)

    }

    undo = () => {
        if (getUndoManager()) {
            getUndoManager().undo();
        }
    };

    redo = () => {
        if (getUndoManager()) {
            getUndoManager().redo();
        }
    };

    render() {
        let {rangeFormat} = this.props;
        let {header} = rangeFormat;
        return (
            <div className="toolbar-opver" id="toolbarOpver">
                <ToolTip
                    placement="bottom"
                    mouseEnterDelay={0}
                    mouseLeaveDelay={0}
                    overlay={<div>撤销({getCtrl()}+Z)</div>}
                >
                    <button className="ql-undo" onClick={this.undo}>
                        <Icon type="undo"/>
                    </button>
                </ToolTip>
                <ToolTip
                    placement="bottom"
                    mouseEnterDelay={0}
                    mouseLeaveDelay={0}
                    overlay={<div>重做({getCtrl()}+Y)</div>}
                >
                    <button className="ql-redo" onClick={this.redo}>
                        <Icon type="redo"/>
                    </button>
                </ToolTip>
                <Icon type="vertical"/>
                <ToolTip
                    placement="bottom"
                    mouseEnterDelay={0}
                    mouseLeaveDelay={0}
                    overlay={<div>H1 {getCtrl()}+Alt+1</div>}
                >
                    {this.renderMarkButton('h1', 'h1')}
                </ToolTip>
                <ToolTip
                    placement="bottom"
                    mouseEnterDelay={0}
                    mouseLeaveDelay={0}
                    overlay={<div>H2 {getCtrl()}+Alt+2</div>}
                >
                    {this.renderMarkButton('h2', 'h2')}
                </ToolTip>
                <ToolTip
                    placement="bottom"
                    mouseEnterDelay={0}
                    mouseLeaveDelay={0}
                    overlay={<div>H3 {getCtrl()}+Alt+3</div>}
                >
                    {this.renderMarkButton('h3', 'h3')}
                </ToolTip>
                <Icon type="vertical"/>
                <ToolTip
                    placement="bottom"
                    mouseEnterDelay={0}
                    mouseLeaveDelay={0}
                    overlay={<div>加粗 {getCtrl()}+b</div>}
                >
                    {this.renderMarkButton('bold', 'bold')}
                </ToolTip>
                <ToolTip
                    placement="bottom"
                    mouseEnterDelay={0}
                    mouseLeaveDelay={0}
                    overlay={<div>斜体 {getCtrl()}+i</div>}
                >
                    {this.renderMarkButton('italic', 'italic')}
                </ToolTip>
                <ToolTip
                    placement="bottom"
                    mouseEnterDelay={0}
                    mouseLeaveDelay={0}
                    overlay={<div>删除线 {getCtrl()}+shift+s</div>}
                >
                    {this.renderMarkButton('strike', 'strike')}
                </ToolTip>
                <Icon type="vertical"/>
                <ToolTip
                    placement="bottom"
                    mouseEnterDelay={0}
                    mouseLeaveDelay={0}
                    overlay={<div>有序列表 {getCtrl()}+Alt+L</div>}
                >
                    {this.renderMarkButton('ordered', 'ol')}
                </ToolTip>
                <ToolTip
                    placement="bottom"
                    mouseEnterDelay={0}
                    mouseLeaveDelay={0}
                    overlay={<div>无序列表 {getCtrl()}+Alt+U</div>}
                >
                    {this.renderMarkButton('bullet', 'ul')}
                </ToolTip>
                <Icon type="vertical"/>
                <ToolTip
                    placement="bottom"
                    mouseEnterDelay={0}
                    mouseLeaveDelay={0}
                    overlay={<div>插入水平线 {getCtrl()}+Alt+h</div>}
                >
                    {this.renderMarkButton('hr', 'min')}
                </ToolTip>
                <ToolTip
                    placement="bottom"
                    mouseEnterDelay={0}
                    mouseLeaveDelay={0}
                    overlay={<div>插入代码 {getCtrl()}+Alt+c</div>}
                >
                    {this.renderMarkButton('code', 'code')}
                </ToolTip>
                <ToolTip
                    placement="bottom"
                    mouseEnterDelay={0}
                    mouseLeaveDelay={0}
                    overlay={<div>插入引用 {getCtrl()}+Alt+q</div>}
                >
                    {this.renderMarkButton('quote', 'quote')}
                </ToolTip>
                <ToolTip
                    placement="bottom"
                    mouseEnterDelay={0}
                    mouseLeaveDelay={0}
                    overlay={<div>插入图片 {getCtrl()}+Alt+i</div>}
                >
                    {this.renderMarkButton('image', 'image')}
                </ToolTip>
                <ToolTip
                    placement="bottom"
                    mouseEnterDelay={0}
                    mouseLeaveDelay={0}
                    overlay={<div>插入链接 {getCtrl()}+Alt+l</div>}
                >
                    {this.renderMarkButton('link', 'link')}
                </ToolTip>
            </div>
        );

    }
}
