import React, { Component } from 'react'
import axios from 'axios'

import PageHeader from '../template/page-header'
import TodoForm from './todoForm'
import TodoList from './todoList'

const URL = 'http://localhost:3000/api/todos/'


export default class Todo extends Component{

    constructor(props){
        super(props)
        this.state = { desc: '', list: [] }

        this.handleChange = this.handleChange.bind(this)
        this.handleAdd = this.handleAdd.bind(this)
        this.handleRemove = this.handleRemove.bind(this)

        this.refresh()
    }

    handleChange(event){
        this.setState({...this.state, desc: event.target.value})
    }

    handleRemove(todo){
        axios.delete(URL+'/'+todo._id)
             .then(reso => this.refresh())
    }

    handleAdd(){
        const description = this.state.desc
        axios.post(URL, {description})
             .then(resp => this.refresh())
    }

    refresh(){
        axios.get(URL+'?sort')
              .then(resp => this.setState({...this.state, description: '', list: resp.data}))
    }

    render(){
        return(
           <div>
               <PageHeader name='Cadastro' small='de tarefas'/>
               <TodoForm desc={this.state.desc}
                    handleChange={this.handleChange}
                    handleAdd={this.handleAdd}/>
                <TodoList handleRemove={this.handleRemove}
                    list={this.state.list} />
           </div>
        )
    }
}
