import React from 'react'
import { Router, Redirect, hashHistory } from 'react-router'
import { BrowserRouter, Route } from 'react-router-dom'

import Login from '../login/login-right'
import Todo from '../todo/todo'


export default props => (
    <BrowserRouter history={hashHistory}>
        <Route path="/" component={Login}></Route>
        <Route path="/lista" component={Todo}></Route>
    </BrowserRouter>
)