/**
 * Created by yeanzhi on 17/4/12.
 */
'use strict';
import 'babel-polyfill';
import React, {Component} from "react";
import rab, {connect, createAction} from 'rabjs/index.js';
import {Router, Route} from 'rabjs/router';
import DemoContainer from './DemoContainer';
const app = rab({
    debug:true
});

app.router(({history}) => {
    return (
        <Router history={history}>
            <Route path="/demo.html" component={DemoContainer} />
            <Route path="/demo" component={DemoContainer} />
            <Route path="/" component={DemoContainer} />
        </Router>
    );
});
app.start('#app');
