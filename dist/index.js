/**
 * Created by pomy on 07/02/2017.
 */

'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _class, _temp;

require('./style/index.scss');

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _mobxReact = require('mobx-react');

var _aceEditor = require('./lib/aceEditor');

var _mdeditor = require('./mdeditor');

var _mdeditor2 = _interopRequireDefault(_mdeditor);

var _insert = require('./model/insert');

var _insert2 = _interopRequireDefault(_insert);

var _editor = require('./model/editor');

var _editor2 = _interopRequireDefault(_editor);

var _help = require('./model/help');

var _help2 = _interopRequireDefault(_help);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Editor = (_temp = _class = function (_Component) {
    _inherits(Editor, _Component);

    function Editor() {
        _classCallCheck(this, Editor);

        var _this = _possibleConstructorReturn(this, (Editor.__proto__ || Object.getPrototypeOf(Editor)).call(this));

        _this.getEditor = _aceEditor.getEditor;
        return _this;
    }

    _createClass(Editor, [{
        key: 'getEditor',
        value: function getEditor() {
            return (0, _aceEditor.getEditor)();
        }
    }, {
        key: 'render',
        value: function render() {
            return _react2.default.createElement(
                _mobxReact.Provider,
                {
                    insert: _insert2.default,
                    editor: _editor2.default,
                    help: _help2.default
                },
                _react2.default.createElement(_mdeditor2.default, { readOnly: this.props.readOnly,
                    defaultValue: this.props.defaultValue,
                    options: this.props.options,
                    coCursors: this.props.coCursors,
                    doc: this.props.doc,
                    rightContent: this.props.rightContent })
            );
        }
    }]);

    return Editor;
}(_react.Component), _class.defaultProps = {
    options: {
        uploadUrl: '',
        helpOptions: [],
        fileOptions: []
    },
    doc: {
        name: '',
        status: ''
    },
    coCursors: [],
    rightContent: null,
    readOnly: false
}, _temp);
exports.default = Editor;