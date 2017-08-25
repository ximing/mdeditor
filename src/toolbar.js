/**
 * Created by yeanzhi on 17/5/20.
 */
'use strict';
import React, {Component} from 'react';
import {inject, observer} from 'mobx-react';

import ToolTip from './components/tooltip';
import Trigger from './components/Trigger';
import TableSelector from 'select-row-col';
import Icon from './components/icon';
import classnames from 'classnames';

import {getEditor,getUndoManager} from './lib/aceEditor';
import {getCtrl} from './lib/util';

import {insertAround,insertBefore,insert} from './lib/aceUtil';

@inject(state => ({
    rangeFormat: state.editor.format,
    editor: state.editor,
    insert: state.insert
})) @observer
export default class EditorToolbar extends Component {
    constructor() {
        super();
    }

    componentDidMount() {
        setTimeout(() => {
            if (getEditor()) {
                [{
                    name: "insert bold",
                    bindKey: {win: "Ctrl-B", mac: "Command-B"},
                    exec: function(editor) {
                        insertAround('**', '**');
                    }
                },{
                    name: "insert italic",
                    bindKey: {win: "Ctrl-I", mac: "Command-I"},
                    exec: function(editor) {
                        insertAround('*', '*');
                    }
                },{
                    name: "insert strike",
                    bindKey: {win: "Ctrl-Shift-S", mac: "Command-Shift-S"},
                    exec: function(editor) {
                        insertAround('~', '~')
                    }
                },{
                    name: "insert List",
                    bindKey: {win: "Ctrl-Alt-L", mac: "Command-Alt-L"},
                    exec: function(editor) {
                        insertBefore('1. ', 3);
                    }
                },{
                    name: "insert bullet List",
                    bindKey: {win: "Ctrl-Alt-U", mac: "Command-Alt-U"},
                    exec: function(editor) {
                        insertBefore('* ', 3);
                    }
                },{
                    name: "insert HR",
                    bindKey: {win: "Ctrl-Alt-H", mac: "Command-Alt-H"},
                    exec: function(editor) {
                        insertBefore('------\r\n');
                    }
                },{
                    name: "insert code",
                    bindKey: {win: "Ctrl-Alt-C", mac: "Command-Alt-C"},
                    exec: function(editor) {
                        insertAround('```\r\n', '\r\n```')
                    }
                },{
                    name: "insert image",
                    bindKey: {win: "Ctrl-Alt-I", mac: "Command-Alt-I"},
                    exec: function(editor) {
                        insertAround('![' + '](' + ')');
                    }
                },{
                    name: "insert link",
                    bindKey: {win: "Ctrl-Alt-L", mac: "Command-Alt-L"},
                    exec: function(editor) {
                        insertAround('[' + '](' + ')');
                    }
                },{
                    name: "insert quote",
                    bindKey: {win: "Alt-Shift-Q", mac: "Alt-Shift-Q"},
                    exec: function(editor) {
                        insertBefore('> ', 2);
                    }
                },{
                    name: "insert H1",
                    bindKey: {win: "Ctrl-Alt-1", mac: "Command-Alt-1"},
                    exec: function(editor) {
                        insertBefore('# ', 0);
                    }
                },{
                    name: "insert H2",
                    bindKey: {win: "Ctrl-Alt-2", mac: "Command-Alt-2"},
                    exec: function(editor) {
                        insertBefore('## ', 0);
                    }
                },{
                    name: "insert H3",
                    bindKey: {win: "Ctrl-Alt-3", mac: "Command-Alt-3"},
                    exec: function(editor) {
                        insertBefore('### ', 0);
                    }
                },{
                    name: "insert H4",
                    bindKey: {win: "Ctrl-Alt-4", mac: "Command-Alt-4"},
                    exec: function(editor) {
                        insertBefore('#### ', 0);
                    }
                },{
                    name: "insert H5",
                    bindKey: {win: "Ctrl-Alt-5", mac: "Command-Alt-5"},
                    exec: function(editor) {
                        insertBefore('##### ', 0);
                    }
                },{
                    name: "insert H6",
                    bindKey: {win: "Ctrl-Alt-6", mac: "Command-Alt-6"},
                    exec: function(editor) {
                        insertBefore('###### ', 0);
                    }
                }].forEach((item)=>{
                    getEditor().commands.addCommand(item);
                });
            }
        },100)
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
        });
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
        console.log(type)
        if (quillEditor) {
            if (type === 'bold') {
                insertAround('**', '**')
            } else if (type === 'italic') {
                insertAround('*', '*')
            } else if (type === 'code') {
                insertAround('```\r\n', '\r\n```')
            } else if (type === 'strike') {
                insertAround('~', '~')
            } else if (type === 'ordered') {
                insertBefore('1. ', 3);
            } else if (type === 'bullet') {
                insertBefore('* ', 3);
            } else if (type === 'hr') {
                insertBefore('------ \r\n', 0);
            } else if (type === 'quote') {
                insertBefore('> ', 2);
            } else if (type === 'image') {
                this.props.insert.openImageDialog = true;
            } else if (type === 'link') {
                this.props.insert.openLinkDialog = true;
            } else if (type === 'h1') {
                insertBefore('# ', 0);
            } else if (type === 'h2') {
                insertBefore('## ', 0);
            } else if (type === 'h3') {
                insertBefore('### ', 0);
            }
        }
    };

    onInsertTable = (size) => {
        let {row, col} = size;
        const _editor = getEditor();

        if(_editor){
            let _title = `|${' 标题 |'.repeat(col)}`,
                _config = `|${' ---- |'.repeat(col)}`,
                _body = `|${' 文本 |'.repeat(col)}\n`.repeat(row-1) + `|${' 文本 |'.repeat(col)}`;
            let _table = `${_title}\n${_config}\n${_body}`;

            let {row: cursorRow, column} = _editor.selection.getCursor();
            //cursor position cases:
            //1.光标在空行的开头 2.光标在非空行的开头 3.光标不在一行的开头但在一行的结尾 4.光标在一行的中间 5.还有「选中」的情况
            //case 1和2的处理方式: 当前行插入表格, 并在表格结尾另起一行; 3和4的处理方式: 另起一行, 插入表格
            if(column === 0){
                insert(`${_table}\n`, 0);
            } else {
                _editor.getSession().replace(_editor.getSelectionRange(), ''); //先清除选中的内容
                _editor.gotoLine(cursorRow + 2);  // +2: getCursor获取的row跟gotoLine的row起始值不一致
                insert(`${_table}\n`, 0);
            }
        }
    };

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

                <Trigger
                    destroyPopupOnHide={true}
                    action={['click']}
                    popup={<TableSelector onSelect={this.onInsertTable} maxSize={{row:15, col:10}} /> }
                    popupAlign={{
                        points: ['tl', 'bl'],
                        offset: [0, 0]
                    }}
                >
                    <ToolTip
                        ref='tableIcon'
                        placement="bottom"
                        mouseEnterDelay={0}
                        mouseLeaveDelay={0}
                        overlay={<div>插入表格 {getCtrl()}+Alt+t</div>}
                    >
                        {this.renderMarkButton('table', 'table')}
                    </ToolTip>
                </Trigger>


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
                    overlay={<div>插入引用 Alt+Shift+q</div>}
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
            </div>
        );

    }
}
