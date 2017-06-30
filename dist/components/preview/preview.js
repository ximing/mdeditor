/**
 * Created by yeanzhi on 17/5/24.
 */
'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _dec, _class;

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

import React, { Component } from 'react';
import hljs from 'highlight.js';
import markdownit from 'markdown-it';
import markdownitFootnote from 'markdown-it-footnote';
import markdownitTask from 'markdown-it-task-lists';
import markdownitEmoji from 'markdown-it-emoji';
import { inject, observer } from 'mobx-react';

var Preview = (_dec = inject(function (state) {
    return {
        editor: state.editor
    };
}), _dec(_class = observer(_class = function (_Component) {
    _inherits(Preview, _Component);

    function Preview(props) {
        _classCallCheck(this, Preview);

        // Because highlight.js is a bit awkward at times
        var _this = _possibleConstructorReturn(this, (Preview.__proto__ || Object.getPrototypeOf(Preview)).call(this, props));

        var languageOverrides = {
            js: 'javascript',
            html: 'xml'
        };
        _this.md = markdownit({
            html: true,
            highlight: function highlight(code, lang) {
                if (languageOverrides[lang]) lang = languageOverrides[lang];
                if (lang && hljs.getLanguage(lang)) {
                    try {
                        return hljs.highlight(lang, code).value;
                    } catch (e) {}
                }
                return '';
            }
        }).use(markdownitFootnote).use(markdownitTask).use(markdownitEmoji);

        return _this;
    }

    _createClass(Preview, [{
        key: 'render',
        value: function render() {
            return React.createElement('div', { dangerouslySetInnerHTML: { __html: this.md.render(this.props.editor.value || '') } });
        }
    }]);

    return Preview;
}(Component)) || _class) || _class);
export { Preview as default };
;

var _temp = function () {
    if (typeof __REACT_HOT_LOADER__ === 'undefined') {
        return;
    }

    __REACT_HOT_LOADER__.register(Preview, 'Preview', 'src/components/preview/preview.js');
}();

;