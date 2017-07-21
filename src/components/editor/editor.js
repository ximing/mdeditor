/**
 * Created by yeanzhi on 17/4/6.
 */
'use strict';
import React,{Component} from 'react';
import ReactDOM from 'react-dom';

// import {initCodeMirrorEditor} from '../../lib/codemirrorEditor.js';
import {initAceEditor} from '../../lib/aceEditor.js';

export default class Editor extends Component {

    static defaultProps = {
        onChange:()=>{},
        defalutValue:''
    }

    shouldComponentUpdate() {
        return false;
    }

    componentDidMount() {
        let editor = initAceEditor(ReactDOM.findDOMNode(this.refs.editor));
        // editor.setOption('readOnly',this.props.readOnly);
        editor.getSession().on('change', this.props.onChange);
    }

    render() {
        return(
            <div ref="editor">
                {this.props.defaultValue}
            </div>
        );
    }
}

{/*<textarea ref="editor" defaultValue={this.props.defaultValue}></textarea>*/}
