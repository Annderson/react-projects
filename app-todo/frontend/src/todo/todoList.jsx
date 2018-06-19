import React from 'react'
import IconButton from '../template-html/iconButton'

export default props => {

    const renderRows = () => {
        const list = props.list || [];
        return list.map(todo => (
            <tr key={todo._id}>
                <td className={todo.done ? 'maskTask' : ''}>
                    {todo.description}
                </td>
                <td >
                    <IconButton style='success' icon='check' hide={todo.done}
                        onClick={() => props.handleMarkTask(todo)}></IconButton>
                    <IconButton style='warning' icon='undo' hide={!todo.done} 
                        onClick={() => props.handleMarkPending(todo)}></IconButton>
                    <IconButton style='danger' icon='trash-o' hide={!todo.done} 
                        onClick={() => props.handleRemove(todo)}></IconButton>
                </td>
            </tr>
        ))
    }

    return (
        <table className="table">
            <thead>
               <tr>
                   <th>Tarefas</th>
                   <th className="col-action">Ações</th>
                </tr>
            </thead>
            <tbody>
                {renderRows()}
            </tbody>
        </table>
    )
}