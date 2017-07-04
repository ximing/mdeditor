/**
 * Created by yeanzhi on 17/4/6.
 */
'use strict';
import React,{Component} from 'react';
import ReactDOM from 'react-dom';

import {initCodeMirrorEditor} from '../../lib/codemirrorEditor.js';

export default class Editor extends Component {

    static defaultProps = {
        onChange:()=>{},
        defalutValue:''
    }

    shouldComponentUpdate() {
        return false;
    }

    componentDidMount() {
        let editor = initCodeMirrorEditor(ReactDOM.findDOMNode(this.refs.editor));
        editor.on('change', this.props.onChange);
        editor.setOption('readOnly',this.props.readOnly);
    }

    render() {
        return(
            <div >
                <textarea ref="editor" defaultValue={this.props.defaultValue}>
                </textarea>
            </div>
        );
    }
}
