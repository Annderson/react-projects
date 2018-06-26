import React from 'react'
import { Link } from 'react-router-dom'


export default props => 
(
    <form className="form-login">
        <div className="form-group">
            <label className=""><strong>Username</strong></label> <br/>
            <input type="text" className="inputs" 
                   onChange={props.handleUsernameChange}/>
        </div>
        <div className="form-group">
            <label className=""><strong>Password</strong></label> <br/>
            <input type="password" className="inputs" 
                   onChange={props.handlePasswordChange}/>
        </div>
            
        <br/>
        <button className="btn btn-primary btn-lg"
            to="/lista" onClick={}>
             Sign in  <span className="fa fa-laptop"></span>     
        </button>
    </form>
)


//onClick={props.handleLogar}