import React, {Component} from 'react'
import LoginRight from './login-right';
import LoginLeft from './login-left';


class Login extends Component {

    constructor(props){
        super(props)
    }

    render(){
        return(
            <div className="row row-login">
                <div className="col-md-6 col-lg-6">
                   <LoginLeft />
                </div>
                <div className="col-md-6 col-lg-6">
                   <LoginRight />  
                </div>    
            </div>
        )
        
    }
}

export default Login