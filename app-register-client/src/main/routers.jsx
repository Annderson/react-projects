import React from 'react'
import { BrowserRouter, HashRouter, Switch, Route, Redirect } from 'react-router-dom'

import Login from '../login/login'
import Todo from '../todo/lista'


export default props => (
    <BrowserRouter>
        <Switch>
           <Route path='/' component={Login}></Route>
           <Route path='/todo' component={Todo}></Route>
        </Switch>  
    </BrowserRouter>
)
