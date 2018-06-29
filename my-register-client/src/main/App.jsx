import React, { Component } from 'react';
import { BrowserRouter, Link, Switch, Route, Redirect } from 'react-router-dom'

import './App.css';
import '../../node_modules/bootstrap/dist/css/bootstrap.min.css'
import '../../node_modules/font-awesome/css/font-awesome.min.css'



import TesteLogin from '../login-test/TesteLogin'
import Auth from '../auth-keycloak/auth'


class App extends Component {
    render() {
        return ( 
            <BrowserRouter>
                <div className="container">
                    <Switch>
                        <Route exact={true} path="/" component={Auth}/>
                        <Route path="/home" component={TesteLogin}/>
                        <Redirect to="/"/>
                    </Switch>
         
                </div>
            </BrowserRouter>
        )
    }
}

export default App;