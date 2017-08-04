/**
 * Created by yeanzhi on 17/3/26.
 */
'use strict';
import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import Toolbar from './toolbar';
import LinkBubble from './components/linkBubble';
import InsertImage from './components/insertImage';
import HotKeysDialog from './components/hotKeysDialog';
import Preview from './components/preview/preview';
import {inject, observer} from 'mobx-react';
import Editor from './components/editor';
const $ = window.jQuery;
import editor from './model/editor';
import {getEditor} from './lib/aceEditor';
import debounce from 'lodash.debounce';

@inject(state => ({
    insert: state.insert,
    open: state.catalogue.open,
    focus: state.editor.focus,
    help: state.help
})) @observer
export default class WEditor extends Component {
    state = {
        width: window.innerWidth,
        scrollTop: 0
    };

    constructor(props) {
        super(props);
        editor.value = props.defaultValue;
        this.debounceWindowResize = debounce(this.onWindowResize);
    }

    componentDidMount() {
        const $divs = $('.ace_scrollbar-v, .mdeditor-preview');
        const $aceScrollbar = $('.ace_scrollbar-v');
        let timer = null;
        const sync = function (e) {
            clearTimeout(timer);
            let $other = $divs.not(this).off('scroll'),
                other = $other.get(0);
            let percentage = this.scrollTop / (this.scrollHeight - this.offsetHeight);
            if (this !== $aceScrollbar[0]) {
                getEditor().getSession().setScrollTop(percentage * (other.scrollHeight - other.offsetHeight))
            } else {
                other.scrollTop = percentage * (other.scrollHeight - other.offsetHeight);
            }
            timer = setTimeout(function () {
                $other.on('scroll', sync);
            }, 200);
        };
        $divs.on('scroll', sync);
        $(window).on('resize', this.debounceWindowResize);
    }

    componentWillUnmount() {
        $(window).off('resize', this.debounceWindowResize);
    }

    onWindowResize = () => {
        this.setState({
            width: window.innerWidth
        });
        if(getEditor()){
            getEditor().renderer.updateFull();
        }
    };


    componentWillReceiveProps(nextProps) {
    }

    onChange(change, editSession) {
        editor.value = editSession.getValue();
    };

    render() {
        return (
            <div className="mdeditor-wrapper">
                <div className="editor-toolbar" id="toolbar">
                    <Toolbar/>
                </div>
                <div className="weditor-body">
                    <div className="content-container" style={{width: this.state.width > 900 ? '50%' : '100%'}}>
                        <Editor readOnly={this.props.readOnly}
                                defaultValue={this.props.defaultValue}
                                onChange={this.onChange}/>
                    </div>
                    <div className="mdeditor-preview" style={{display: this.state.width > 900 ? 'block' : 'none'}}>
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
