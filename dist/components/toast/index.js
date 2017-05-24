/**
 * Created by yeanzhi on 17/3/29.
 */
'use strict';

import React, { Component } from 'react';
import Notification from 'rc-notification';
import './index.scss';
import Icon from '../icon';
var notification = Notification.newInstance({});

export var warning = function warning(content, onClose) {
    notification.notice({
        content: React.createElement(
            'p',
            { className: 'weditor-toast' },
            React.createElement(Icon, { type: 'warning' }),
            React.createElement(
                'span',
                null,
                content
            ),
            ' '
        ),
        onClose: onClose
    });
};
export var info = function info(content, onClose) {
    notification.notice({
        content: React.createElement(
            'p',
            { className: 'weditor-toast' },
            React.createElement(Icon, { type: 'info' }),
            React.createElement(
                'span',
                null,
                content
            )
        ),
        onClose: onClose
    });
};
export var success = function success(content, onClose) {
    notification.notice({
        content: React.createElement(
            'p',
            { className: 'weditor-toast' },
            React.createElement(Icon, { type: 'success' }),
            React.createElement(
                'span',
                null,
                content
            )
        ),
        onClose: onClose
    });
};
export var error = function error(content, onClose) {
    notification.notice({
        content: React.createElement(
            'p',
            { className: 'weditor-toast' },
            React.createElement(Icon, { type: 'error' }),
            React.createElement(
                'span',
                null,
                content
            )
        ),
        onClose: onClose
    });
};
;

var _temp = function () {
    if (typeof __REACT_HOT_LOADER__ === 'undefined') {
        return;
    }

    __REACT_HOT_LOADER__.register(notification, 'notification', 'src/components/toast/index.js');

    __REACT_HOT_LOADER__.register(warning, 'warning', 'src/components/toast/index.js');

    __REACT_HOT_LOADER__.register(info, 'info', 'src/components/toast/index.js');

    __REACT_HOT_LOADER__.register(success, 'success', 'src/components/toast/index.js');

    __REACT_HOT_LOADER__.register(error, 'error', 'src/components/toast/index.js');
}();

;