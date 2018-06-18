import React, { Component } from 'react'
import axios from 'axios'

import PageHeader from '../template/page-header'
import TodoForm from './todoForm'

const URL = 'http://localhost:3000/api/todos'

export default class Todo extends Component{

    constructor(props){
        super(props)
        this.state = { desc: '', list: [] }

        this.handleChange = this.handleChange.bind(this)
        this.handleAdd = this.handleAdd.bind(this)
    }

    handleChange(event){
        this.setState({...this.state, desc: event.target.value})
    }

    handleAdd(){
        const descricao = this.state.desc
        axios.post(URL, {descricao})
             .then(resp => console.log('test'))
    }

    render(){
        return(
           <div>
               <PageHeader name='Cadastro' small='de tarefas'/>
               <TodoForm desc={this.state.desc}
                    handleChange={this.handleChange}
                    handleAdd={this.handleAdd}/>
           </div>
        )
    }
}
