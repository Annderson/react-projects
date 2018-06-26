import React from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

import Button from '../templae/button'
import { changeUsername, changePassword } from './loginActions'

const LoginForm = props => 
(
    <form className="form-login">
        <div className="form-group">
            <label className=""><strong>Username</strong></label> <br/>
            <input type="text" className="inputs" 
                   value={props.username}
                   onChange={props.changeUsername}/>
        </div>
        <div className="form-group">
            <label className=""><strong>Password</strong></label> <br/>
            <input type="password" className="inputs" 
                   value={props.password}
                   onChange={props.changePassword}/>
        </div>
            
        <br/>
        <Button style='btn-primary btn-lg' titulo='Sign in'
             onClick={props.handleLogar}>
        </Button>
    </form>
)

const mapStateProps = state => (
    {username: state.login.username, password: state.login.password}
)
const mapDispathProps = dispath => bindActionCreators({ changeUsername, changePassword }, dispath)
export default connect(mapStateProps,mapDispathProps)(LoginForm)