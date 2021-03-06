import React from 'react'
import { BrowserRouter, Route, Redirect, Switch } from 'react-router-dom'

import '../css/App.css';

import Auth from '../auth-keycloak/auth'
import SidebarMenu from '../templates/sidebarMenu';
import Projects from '../component/projects/Projects';
import Employees from '../component/employees/Employees';
import LandingScreen from '../component/landing/LandingScreen';

export default props => (
    <BrowserRouter basename="/sara">
    <div className="row">

        <div className="col-lg-1 col-md-1 col-sm-1">
           <SidebarMenu />
        </div>

        <div  className="col-lg-10 col-md-10 col-sm-10">
            <Switch>
                <Route exact path="/" component={Auth} />
                <Route path="/landing" component={LandingScreen} />
                <Route path="/projects" component={Projects} />
                <Route path="/employees" component={Employees} />
                <Redirect to="/" />
            </Switch>
        </div>

    </div>
    </BrowserRouter>
)