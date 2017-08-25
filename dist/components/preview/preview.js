/**
 * Created by yeanzhi on 17/5/24.
 */
'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _dec, _class;

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _highlight = require('highlight.js');

var _highlight2 = _interopRequireDefault(_highlight);

var _markdownIt = require('markdown-it');

var _markdownIt2 = _interopRequireDefault(_markdownIt);

var _markdownItFootnote = require('markdown-it-footnote');

var _markdownItFootnote2 = _interopRequireDefault(_markdownItFootnote);

var _markdownItTaskLists = require('markdown-it-task-lists');

var _markdownItTaskLists2 = _interopRequireDefault(_markdownItTaskLists);

var _markdownItEmoji = require('markdown-it-emoji');

var _markdownItEmoji2 = _interopRequireDefault(_markdownItEmoji);

var _mobxReact = require('mobx-react');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Preview = (_dec = (0, _mobxReact.inject)(function (state) {
    return {
        editor: state.editor
    };
}), _dec(_class = (0, _mobxReact.observer)(_class = function (_Component) {
    _inherits(Preview, _Component);

    function Preview(props) {
        _classCallCheck(this, Preview);

        // Because highlight.js is a bit awkward at times
        var _this = _possibleConstructorReturn(this, (Preview.__proto__ || Object.getPrototypeOf(Preview)).call(this, props));

        var languageOverrides = {
            js: 'javascript',
            html: 'xml'
        };
        _this.md = (0, _markdownIt2.default)({
            html: true,
            highlight: function highlight(code, lang) {
                if (languageOverrides[lang]) lang = languageOverrides[lang];
                if (lang && _highlight2.default.getLanguage(lang)) {
                    try {
                        return _highlight2.default.highlight(lang, code).value;
                    } catch (e) {}
                }
                return '';
            }
        }).use(_markdownItFootnote2.default).use(_markdownItTaskLists2.default).use(_markdownItEmoji2.default);
        // Remember old renderer, if overriden, or proxy to default renderer
        var defaultRender = _this.md.renderer.rules.link_open || function (tokens, idx, options, env, self) {
            return self.renderToken(tokens, idx, options);
        };

        _this.md.renderer.rules.link_open = function (tokens, idx, options, env, self) {
            // If you are sure other plugins can't add `target` - drop check below
            var aIndex = tokens[idx].attrIndex('target');

            if (aIndex < 0) {
                tokens[idx].attrPush(['target', '_blank']); // add new attribute
            } else {
                tokens[idx].attrs[aIndex][1] = '_blank'; // replace value of existing attr
            }

            // pass token to default renderer.
            return defaultRender(tokens, idx, options, env, self);
        };
        return _this;
    }

    _createClass(Preview, [{
        key: 'render',
        value: function render() {
            return _react2.default.createElement('div', { dangerouslySetInnerHTML: { __html: this.md.render(this.props.editor.value || '') } });
        }
    }]);

    return Preview;
}(_react.Component)) || _class) || _class);
exports.default = Preview;