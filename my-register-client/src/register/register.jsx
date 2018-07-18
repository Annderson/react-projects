import React,{Component} from 'react'

import RegisterLeft from './register-left'
import RegisterRight from './register-right'

class Register extends Component {
    render(){
        return(
            <div className="body-register">
                <div className="row ">
                    <div className="col-lg-6 col-md-6 col-sm-6">
                        <RegisterLeft/>
                    </div>
                    <div className="col-lg-6 col-md-6 col-sm-6">
                        <RegisterRight/>
                    </div>
                </div>
            </div>
        )
    }
}

export default Register