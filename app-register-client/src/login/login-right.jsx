import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

import Button from '../templae/button'
import { changeUsername, changePassword, search, logar } from './loginActions'

class LoginForm extends Component {

    constructor(props){
        super(props)
    }

    componentWillMount(){
        this.props.search()
    }

    render(){
        const {username, password, logar, search } = this.props
        return (
            <div>
                <form className="form-login">
                    <div className="form-group">
                        <label className=""><strong>Username</strong></label> <br/>
                        <input type="text" className="inputs" 
                               value={this.props.username}
                               onChange={this.props.changeUsername}/>
                    </div>
                    <div className="form-group">
                        <label className=""><strong>Password</strong></label> <br/>
                        <input type="password" className="inputs" 
                            value={this.props.password}
                            onChange={this.props.changePassword}/>
                    </div>
            
                    <br/>
                    <Button style='btn-primary btn-lg' titulo='Sign in'
                            onClick={() => logar(username, password)}>
                    </Button>
                    <br/>
                    <Button style='btn-primary btn-lg' titulo='Search'
                            onClick={search}>
                    </Button>
                </form>
             </div>
        )
    }
     
}



const mapStateProps = state => (
    {username: state.login.username, password: state.login.password}
)
const mapDispathProps = dispath => bindActionCreators({ changeUsername, changePassword, logar, search }, dispath)
export default connect(mapStateProps,mapDispathProps)(LoginForm)