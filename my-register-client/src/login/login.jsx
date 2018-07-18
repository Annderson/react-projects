import React, {Component} from 'react'
import LoginRight from './login-right';
import LoginLeft from './login-left';

import './login.css'


class Login extends Component {

    constructor(props){
        super(props)

        this.handleLogar = this.handleLogar.bind(this)
        this.handleUsername = this.handleUsername.bind(this)
        this.handlePassword = this.handlePassword.bind(this)

        this.state = {
            username: '', password: '' 
        }

    }
    handleLogar(){
        console.log('Funcionou!')
    }

    handleUsername(e){
        this.setState({username: e.target.valeu})
    }
    handlePassword(e){
        this.setState({password: e.target.valeu})
    }

    render(){
        return(
            <div className="row row-login">
                <div className="col-md-7 col-lg-7 pane-left">
                   <LoginLeft />
                </div>
                <div className="col-md-5 col-lg-5 align-items-center">
                   <LoginRight
                        handleUsernameChange={this.handleUsername}
                        handlePasswordChange={this.handlePassword}
                        handleLogar={this.handleLogar}
                    />  
                </div>    
            </div>
        )
        
    }
}

export default Login