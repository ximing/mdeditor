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
        console.log(this.props.defalutValue)
        let editor = initCodeMirrorEditor(ReactDOM.findDOMNode(this.refs.editor));

        editor.on('change', this.props.onChange);

    }

    render() {
        return(
            <div >
                <textarea ref="editor">
                    {this.props.defalutValue}
                </textarea>
            </div>
        );
    }
}
