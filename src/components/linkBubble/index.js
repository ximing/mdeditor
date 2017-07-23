/**
 * Created by yeanzhi on 17/3/26.
 */
'use strict';
import './index.scss';
import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import debounce from 'lodash.debounce';

import Input from '../input/index';
import Button from '../button/index';
import {contains} from '../../lib/util';
import {insert as insertText} from '../../lib/aceUtil';
import insert from '../../model/insert';
import Dialog from '../dialog';

const $ = window.jQuery;

import {inject, observer} from 'mobx-react';

@observer
export default class LinkBubble extends Component {
    static defaultProps = {
        linkTitle: '',
        linkUrl: ''
    };
    onWindowResize = ()=>{
        this.closeBubble();
    };

    constructor(){
        super();
        this.debounceWindowResize = debounce(this.onWindowResize);
    }
    componentDidMount() {
        setTimeout(() => {
            $(document).on('mousedown',this.otherDOMClick);
        }, 10);
        this.target = ReactDOM.findDOMNode(this);
        $(window).on('resize',this.debounceWindowResize)
    }

    componentWillUnmount() {
        $(document).off('mousedown',this.otherDOMClick);
        $(window).off('resize',this.debounceWindowResize);
    }

    closeBubble = () => {
        insert.openLinkDialog = false;
        insert.isReadOnlyLink = false;
    };

    otherDOMClick = (e) => {
        let node = e.target;
        if (!insert.openLinkDialog) {
            return false;
        }
        let target = this.target;
        if (insert.openLinkDialog && !(contains(target, node))) {
            this.closeBubble();
        }
    };

    onLinkUrlChange = (e) => {
        this.setState({
            linkUrl: e.target.value
        });
    };

    onTitleChange = (e) => {
        this.setState({
            linkTitle: e.target.value
        });
    };

    insertLink = () => {
        if (this.state.linkUrl) {
            if(this.state.linkUrl.indexOf('http')!==0){
                this.state.linkUrl = `http://${this.state.linkUrl}`;
            }
            if(!this.state.linkTitle){
                this.state.linkTitle = this.state.linkUrl;
            }
            insertText(`[${this.state.linkTitle}](${this.state.linkUrl})`);
        }
        this.closeBubble();
    };

    render() {
        return (
            <Dialog
                title="插入链接"
                className="mdeditor-insert-link-dialog"
                content={
                    <div className="mdeditor-insert-link">
                        <div className="mdeditor-form-item">
                            <span className="mdeditor-form-title">Title</span>
                            <Input className="mdeditor-form-content" onChange={this.onTitleChange}/>
                        </div>
                        <div className="mdeditor-form-item">
                            <span className="mdeditor-form-title">URL</span>
                            <Input className="mdeditor-form-content" onChange={this.onLinkUrlChange}/>
                        </div>
                    </div>
                }
                buttons={[
                    {text:'取消', type:'white', action: this.closeBubble},
                    {text:'插入', action: this.insertLink}
                ]}
                onClose={this.closeBubble}
            />
        );
    }
}
