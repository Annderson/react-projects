import React, {Component} from 'react'
import { connect } from 'react-redux'

import LoginRight from './login-right';
import LoginLeft from './login-left';


class Login extends Component {

    constructor(props){
        super(props)

        //this.state = { username: '', password: '' }
        this.handleLogar = this.handleLogar.bind(this)

    }
    handleLogar(){
        console.log('Teste')
    }

    render(){
        return(
            <div className="row row-login">
                <div className="col-md-6 col-lg-6">
                   <LoginLeft />
                </div>
                <div className="col-md-6 col-lg-6">
                   <LoginRight
                        //username={this.state.username}
                        //password={this.state.password}          
                        handleLogar={this.handleLogar}
                    />  
                </div>    
            </div>
        )
        
    }
}

export default Login