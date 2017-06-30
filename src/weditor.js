/**
 * Created by yeanzhi on 17/3/26.
 */
'use strict';
import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import Header from './header';
import Toolbar from './toolbar';
import LinkBubble from './components/linkBubble';
import InsertImage from './components/insertImage';
import HotKeysDialog from './components/hotKeysDialog';
import Preview from './components/preview/preview';
import {inject, observer} from 'mobx-react';
import Editor from './components/editor';
const $ = window.jQuery;
import editor from './model/editor';


@inject(state => ({
    insert: state.insert,
    open: state.catalogue.open,
    focus: state.editor.focus,
    help: state.help
})) @observer
export default class WEditor extends Component {
    state = {
        left: window.innerWidth / 2 - 400,
        scrollTop: 0
    };

    constructor(props) {
        super(props);
        editor.value = props.defaultValue;
    }

    componentDidMount() {
        let editorDom = this.editorDom = $(ReactDOM.findDOMNode(this.refs.editor)).find('.ql-editor');
        editorDom.on('blur', () => {
            editor.focus = false;
        });

        const $divs = $('.CodeMirror-scroll, .weditor-preview');
        let timer = null;
        const sync = function (e) {
            clearTimeout(timer);
            let $other = $divs.not(this).off('scroll'),
                other = $other.get(0);
            let percentage = this.scrollTop / (this.scrollHeight - this.offsetHeight);
            other.scrollTop = percentage * (other.scrollHeight - other.offsetHeight);
            timer = setTimeout(function () {
                $other.on('scroll', sync);
            }, 200);
        };
        $divs.on('scroll', sync);

    }

    componentWillUnmount() {
    }

    componentWillReceiveProps(nextProps) {
        this.setState({
            left: nextProps.open ? window.innerWidth / 2 - 300 : window.innerWidth / 2 - 400
        });
    }

    onChange(e) {
        editor.value = e.getValue();
    };

    render() {
        return (
            <div className="weditor-wrapper">
                <div className="editor-toolbar" id="toolbar">
                    <Toolbar/>
                </div>
                <div className="weditor-body">
                    <div className="content-container">
                        <Editor defalutValue={this.props.defaultValue} onChange={this.onChange}/>
                    </div>
                    <div className="weditor-preview">
                        <Preview/>
                    </div>
                </div>

                {
                    this.props.insert.openLinkDialog &&
                    <LinkBubble />
                }
                {
                    this.props.insert.openImageDialog &&
                    <InsertImage uploadUrl={this.props.options.uploadUrl}/>
                }
                {
                    this.props.help.hotKeysDialog &&
                    <HotKeysDialog />
                }
            </div>
        );
    }
}

export const call = function () {

}
