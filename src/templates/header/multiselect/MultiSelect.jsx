import React, {Component} from 'react'

import './test.css'

const options = [
  { id: 1, value: 'Todas', label: 'Todas', estado: true},
  { id: 2, value: 'one', label: 'One', estado: true},
  { id: 3, value: 'two', label: 'Two', estado: true},
  { id: 4, value: 'three', label: 'three', estado: true},
  { id: 5, value: 'four', label: 'four', estado: true}
]

class MultiSelect extends Component {

  constructor(){
    super()
    this.state = {
      listCheck: []
    }

    this.checkboxHandle = this.checkboxHandle.bind(this)
  }

  componentDidMount(){
    this.setState({ listCheck:options })
  }

  checkboxHandle(event){
    let value; 
    if (event.target.type === 'checkbox'){
      value = event.target.checked
    }
    else{
      value = event.target.value
    }

    this.setState({ [event.target.name]: value })
  }

  render(){

    let contas = this.state.listCheck.map(
      conta => {
        return(
          <li key={conta.id}> 
            <label htmlFor={conta.label}>
            <input name={conta.label} type="checkbox"
                   onChange={this.checkboxHandle} /> {conta.value}</label>
          </li>
        )
      }
    )

    return(
      <div>
          <div className="combo">
            <button className="btn-select" type="button">
              Todas <span className="fa fa-caret-down"></span>
            </button>
            <ul className="options list-unstyled" >
                {contas}
            </ul>
          </div>
      </div>
    )
    
  }
  
}

export default MultiSelect;
