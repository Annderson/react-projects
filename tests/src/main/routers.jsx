import React from 'react'
import { BrowserRouter, Route, Redirect, Switch } from 'react-router-dom'

import '../css/App.css';

import Auth from '../auth-keycloak/auth'
import SidebarMenu from '../templates/sidebarMenu';
import Projects from '../component/projects/Projects';
import Employees from '../component/employees/Employees';
import LandingScreen from '../component/landing/LandingScreen';

export default props => (
    <BrowserRouter>
    <div className="app">

        <div className="app-sidebar">
           <SidebarMenu />
        </div>

        <main id="app-main" className="app-main">
            <Switch>
                <Route exact path='/' component={Auth} />
                <Route path="/landing" component={LandingScreen} />
                <Route path="/projects" component={Projects} />
                <Route path="/employees" component={Employees} />
                <Redirect from="*" to="/" />
            </Switch>
        </main>

    </div>
    </BrowserRouter>
)