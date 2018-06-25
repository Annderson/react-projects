import React, { Component } from 'react';
import { BrowserRouter, Router, Switch, Route, Redirect } from 'react-router-dom'

//import logo from './logo.svg';
import './App.css';
import Login from '../login/login';
import Lista from '../lista/lista';

class App extends Component {
    render() {
        return ( 
            <BrowserRouter>
                 <Switch>
                     <Route exact={true} path="/" component={Login}/>
                     <Route path="/lista" component={Lista}/>
                     <Redirect to="/"/>
                 </Switch>
            </BrowserRouter>
        )
    }
}

export default App;

/*
<div className="App">
                <header className="App-header">
                    <img src={logo} className="App-logo" alt="logo"/>
                    <h1 className="App-title">Welcome to React</h1>
                </header>
                <p className="App-intro">
                    To get started, edit <code> src/App.js </code> and save to reload.
                </p>
            </div>
        )
*/