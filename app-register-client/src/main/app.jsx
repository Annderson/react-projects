import '../style/login.css'
import '../../node_modules/bootstrap/dist/css/bootstrap.min.css'
import '../../node_modules/font-awesome/css/font-awesome.min.css'

import React from 'react'
import { BrowserRouter, Switch ,Route, Redirect } from 'react-router-dom'
import Login from '../login/login'
import Lista from '../lista/lista'

export default props => (
    <div className="body-login">
       <BrowserRouter >
           <Switch>
               <Route exact={true} path='/' component={Login}/>
               <Route path='/lista' component={Lista}/>
               <Redirect  to="/"/>
            </Switch>  
        </BrowserRouter>
    </div>
)