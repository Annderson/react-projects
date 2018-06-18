import React from 'react'


export default props => (
    <header className="page-header">
        <h2>
            <strong>{props.name}</strong> 
            <small><strong> {props.small}</strong></small>
        </h2>
    </header>
)