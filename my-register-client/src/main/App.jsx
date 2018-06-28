import React, { Component } from 'react';
import { BrowserRouter, Link, Switch, Route, Redirect } from 'react-router-dom'

//import logo from './logo.svg';
import './App.css';
import '../../node_modules/bootstrap/dist/css/bootstrap.min.css'
import '../../node_modules/font-awesome/css/font-awesome.min.css'

//import Login from '../login/login';
//import Lista from '../lista/lista';

import TesteLogin from './TesteLogin'
import TesteHome from '../auth-keycloak/TesteHome'


class App extends Component {
    render() {
        return ( 
            <BrowserRouter>
                <div className="container">
                    <Switch>
                        <Route exact={true} path="/" component={TesteHome}/>
                        <Route path="/home" component={TesteLogin}/>
                        <Redirect to="/"/>
                    </Switch>
         
                </div>
            </BrowserRouter>
        )
    }
}

export default App;