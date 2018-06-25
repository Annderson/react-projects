import React from 'react'

export default props => 
(
    <form className="form-login">
        <div className="form-group">
            <label className=""><strong>Username</strong></label> <br/>
            <input type="text" className="inputs" />
        </div>
        <div className="form-group">
            <label className=""><strong>Password</strong></label> <br/>
            <input type="password" className="inputs" />
        </div>
            
        <br/>
        <a className="btn btn-primary btn-lg" href="#/todo">
            <span className="fa fa-laptop"></span>&ensp;
            <strong> Sign in</strong>         
        </a>
    </form>
)
