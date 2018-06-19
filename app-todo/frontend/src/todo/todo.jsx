import React, { Component } from 'react'
import axios from 'axios'

import PageHeader from '../template-html/page-header'
import TodoForm from './todoForm'
import TodoList from './todoList'

const URL = 'http://localhost:3000/api/todos'


export default class Todo extends Component{

    constructor(props){
        super(props)
        this.state = { desc: '', list: [] }

        this.handleAdd = this.handleAdd.bind(this)
        this.handleClear = this.handleClear.bind(this)
        this.handleSearch = this.handleSearch.bind(this)
        this.handleChange = this.handleChange.bind(this)

        this.handleRemove = this.handleRemove.bind(this)
        this.handleMarkTask = this.handleMarkTask.bind(this)
        this.handleMarkPending = this.handleMarkPending.bind(this)
        
        this.refresh()
    }

    refresh(description){
        const search = description ? '&description__regex=/'+description+'/' : ''
        axios.get(URL+'?sort='+search)
             .then(resp => this.setState({...this.state, description, list: resp.data}))
    }

    handleChange(event){
        this.setState({...this.state, desc: event.target.value})
    }

    handleAdd(){
        const description = this.state.desc
        axios.post(URL, {description})
             .then(resp => this.refresh())
        this.setState({desc: ''})
    }

    handleSearch(){
        this.refresh(this.state.desc)
    }

    handleClear() {
        this.refresh()
        this.setState({desc: ''})
    }

    handleRemove(todo){
        axios.delete(URL+'/'+todo._id)
             .then(reso => this.refresh(this.state.desc))
    }  

    handleMarkTask(todo){
        axios.put(URL+'/'+todo._id, {todo, done: true})
             .then(resp => this.refresh(this.state.desc))
    }
    handleMarkPending(todo){
        axios.put(URL+'/'+todo._id, {todo, done: false})
             .then(resp => this.refresh(this.state.desc))
    }

    render(){
        return(
           <div>
               <PageHeader name='Cadastro' small='de tarefas'/>
               <TodoForm desc={this.state.desc}
                    handleAdd={this.handleAdd}
                    handleClear={this.handleClear}
                    handleChange={this.handleChange}
                    handleSearch={this.handleSearch}/>
                <TodoList className="tb-sty" list={this.state.list}
                    handleRemove={this.handleRemove} 
                    handleMarkTask={this.handleMarkTask}
                    handleMarkPending={this.handleMarkPending}/>
           </div>
        )
    }
}
