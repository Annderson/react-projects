import React, { Component } from 'react';
import {  Link} from 'react-router-dom'

//import UserInfo from './UserInfo'
//import Logout from './logout'


class TesteLogin extends Component {
  render() {
    return(
        <div className="container align-content-center align-items-center">
            <div className="form-group">
               <p>This is your public-facing component.</p>
            </div>

            <br/>
        </div>      
    )
  }
}
export default TesteLogin

/*
<UserInfo keycloak={this.state.keycloak} />
<Logout keycloak={this.state.keycloak} />
*/