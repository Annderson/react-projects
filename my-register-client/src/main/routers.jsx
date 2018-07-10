import React from 'react'
import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom'

import Login from '../login/login'
import Register from '../register/register'
import Auth from '../auth-keycloak/auth'

export default props => (
    <BrowserRouter>
        <Switch>
            <Route exact={true} path="/" component={Login}/>
            <Route path="/register" component={Register}/>
            <Route path="/auth" component={Auth}/>
            <Redirect to="/"/>
        </Switch> 
    </BrowserRouter>
)
