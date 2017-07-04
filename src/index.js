/**
 * Created by pomy on 07/02/2017.
 */

'use strict';
import React, {Component} from 'react';
import {Provider} from 'mobx-react';

import './style/index.scss';
import {getEditor} from './lib/codemirrorEditor';
import WEditor from './weditor';
import catalogue from './model/catalogue';
import insert from './model/insert';
import editor from './model/editor';
import help from './model/help';

class  Editor extends Component {
    static defaultProps = {
        options:{
            uploadUrl:'',
            helpOptions:[],
            fileOptions:[]
        },
        doc:{
            name:'',
            status:''
        },
        coCursors:[],
        rightContent:null,
        readOnly:false
    };

    constructor() {
        super();
        this.getEditor = getEditor;
    };

    getEditor(){
        return getEditor();
    }

    render() {
        return(
            <Provider
                catalogue={catalogue}
                insert={insert}
                editor={editor}
                help={help}
            >
                <WEditor readOnly={this.props.readOnly}
                         defaultValue={this.props.defaultValue}
                        options={this.props.options}
                         coCursors = {this.props.coCursors}
                         doc={this.props.doc}
                         rightContent = {this.props.rightContent}/>
            </Provider>
        );
    }
}
export default Editor;
