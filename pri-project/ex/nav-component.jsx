import React, {Component} from 'react'
  
class Campo extends Component{
    constructor(props){
        super(props)
        this.state = { value: '' }
        this.handleChange = this.handleChange.bind(this)
    }

    handleChange(evento){
        this.setState({
            value: evento.target.value
        })
    }

    render(){
        return (
            <div>
                <label> {this.state.value} </label>
                <input  onChange={this.handleChange} value={this.state.value}/>
            </div>
        )
    }
}

export default Campo