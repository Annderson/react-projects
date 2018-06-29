import Keycloak from 'keycloak-js'
import React, { Component } from 'react'
import { Redirect } from 'react-router-dom'

class TesteHome extends Component {

  constructor(props) {
    super(props);
    this.state = { keycloak: null, authenticated: false };
  }

  componentDidMount() {
    const keycloak = Keycloak({
        "realm": "MyRegister",
        "url": "http://localhost:8080/auth",
        "ssl-required": "external",
        "clientId": "my-register-react",
        "public-client": true,
        "confidential-port": 0
    });
    keycloak.init({onLoad: 'login-required'}).then(authenticated => {
      this.setState({ keycloak: keycloak, authenticated: authenticated })
    })
  }

  render() {
    if (this.state.keycloak) {
      if (this.state.authenticated) return (
        <div>
            <Redirect to="/home"/>
        </div>
      ); else return (<div>Unable to authenticate!</div>)
    }
    return (
      <div>Initializing Keycloak...</div>
    )
  }
}
export default TesteHome
