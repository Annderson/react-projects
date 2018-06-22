import React, {Component} from 'react'
import LoginLeft from './login-left';
import LoginRight from './login-right';


class Login extends Component {
    render(){
        <div className="row">
            <div className="col-md-6 col-lg-6">
                <LoginRight />
            </div>
            <div className="col-md-6 col-lg-6">
                <LoginLeft />
            </div> 
        </div>
    }
}

export default Login