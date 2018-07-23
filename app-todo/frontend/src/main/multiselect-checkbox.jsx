import React, { Component } from 'react'
import Multi from 'react-bootstrap-multiselect'
import 'react-select/dist/react-select.css'


const options = [
    { value: 'chocolate' },
    { value: 'strawberry' },
    { value: 'vanilla' }
]


export default props => ( 
    <Multi includeSelectAllOption data={options} multiple />
)