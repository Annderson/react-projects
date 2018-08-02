import Keycloak from 'keycloak-js'
import React, { Component } from 'react'
import { withRouter } from 'react-router-dom'

class Auth extends Component {

  constructor() {
    super();
    this.state = { keycloak: null, authenticated: false };

    this.setToken = this.setToken.bind(this)
    this.getToken = this.getToken.bind(this)
  }

  componentDidMount() { 
    const keycloak = Keycloak({
        "realm": "Venturus",
        "url": "http://vntsrvkeycloak01:8080/auth",
        "ssl-required": "external",
        "clientId": "frontend-sara",
        "public-client": true,
        "confidential-port": 0
    });
      keycloak.init({onLoad: 'login-required'}).then(authenticated => {   
      this.setState({ keycloak: keycloak, authenticated: authenticated })
    })
  }

  setToken(obj){
    window.localStorage.setItem('token',obj.token)
  }
 
  getToken(){
    return window.localStorage.getItem('token')
  }
  


  render() {
    if (this.state.keycloak) {
      if (this.state.authenticated) return (
         <div>
          {this.setToken(this.state.keycloak)}
          {this.props.history.push('/projects')}
         </div>
      ); else return (<div>Unable to authenticate!</div>)
    }
    return (
      <div>Initializing Keycloak...</div>
    )
  }
}
export default withRouter(Auth)
