import React, {Component} from 'react'
import LoginLeft from './login-left';
import LoginRight from './login-right';


class Login extends Component {

    constructor(props){
        super(props)
    }

    render(){
        return(
            <div >
                <LoginRight />
                <LoginLeft />
            </div>
        )
        
    }
}

export default Login