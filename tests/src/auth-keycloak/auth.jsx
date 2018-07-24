import Keycloak from 'keycloak-js'
import React, { Component } from 'react'
import { withRouter } from 'react-router-dom'
import axios from 'axios'

class TesteHome extends Component {

  constructor(props) {
    super(props);
    this.state = { keycloak: null, authenticated: false };

    this.setToken = this.setToken.bind(this)
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
      this.setToken(keycloak)
      this.setState({ keycloak: keycloak, authenticated: authenticated })
    })
  }

  setToken(obj){
    window.localStorage.setItem('token',obj.token)
    console.log(obj)
  }

  getToken(){
    const headers = {
      'Authorization': 'Bearer ' + window.localStorage.getItem('token'),
      'Content-Type': 'application/json'
    }
    const URL =  'http://staging-enterprise/saraapi/api/Project/GetProjects'

    axios.get(URL,headers)
    .then(res =>{
      console.log(res.data)
    })
    .catch(error => {
      console.log(error)
    });
    //return window.localStorage.getItem('token')
  }
  


  render() {
    if (this.state.keycloak) {
      if (this.state.authenticated) return (
        <p>Teste {this.getToken()}</p>
        //this.props.history.push('/employees')
      ); else return (<div>Unable to authenticate!</div>)
    }
    return (
      <div>Initializing Keycloak...</div>
    )
  }
}
export default withRouter(TesteHome)
