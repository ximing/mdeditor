/**
 * Created by yeanzhi on 17/5/24.
 */
'use strict';
import React ,{Component} from 'react';
import hljs from 'highlight.js';
import markdownit from 'markdown-it';
import markdownitFootnote from 'markdown-it-footnote';
import markdownitTask from 'markdown-it-task-lists';
import markdownitEmoji from 'markdown-it-emoji';
import {inject, observer} from 'mobx-react';

@inject(state => ({
    editor: state.editor
})) @observer
export default class Preview extends Component{
    constructor(props){
        super(props);
        // Because highlight.js is a bit awkward at times
        var languageOverrides = {
            js: 'javascript',
            html: 'xml'
        };
        this.md = markdownit({
            html: true,
            highlight: function(code, lang){
                if(languageOverrides[lang]) lang = languageOverrides[lang];
                if(lang && hljs.getLanguage(lang)){
                    try {
                        return hljs.highlight(lang, code).value;
                    }catch(e){}
                }
                return '';
            }
        })
            .use(markdownitFootnote)
            .use(markdownitTask)
            .use(markdownitEmoji);

    }
    render(){
        return(
            <div dangerouslySetInnerHTML={{__html:this.md.render(this.props.editor.value||'')}}>
            </div>
        )
    }
}
