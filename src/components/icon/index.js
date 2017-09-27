/**
 * Created by liz
 * Email: lizhengnacl@163.com
 * Tel: 18686768624
 * Date: 16/12/16
 */

'use strict';
import './index.scss';
import classNames from 'classnames';
import React, {Component} from 'react';
import PropTypes from 'prop-types';

export default class extends Component {
    static defaultProps = {
        type: 'default',
        className: '',
        onClick: () => {},
        style: {},
        spin: false
    };
    static propTypes    = {
        type: PropTypes.string,
        className: PropTypes.string,
        onClick: PropTypes.func,
        style: PropTypes.object,
        spin: PropTypes.bool
    };

    render () {
        let {type, spin, className,...other} = this.props;
        let classString = classNames({
            'xm-icon docicon': true,
            [`docicon-${type}`]: type,
            'iconfont-spin': !!spin || type === 'loading'
        }, className);
        return (
            <i className={classString} {...other}/>
        );
    }
}
