import React from 'react'
import If from './if'

export default props => (
    <If test={!props.hide}>
        <input type="button" className={'btn ' + props.style}
            value={props.titulo}
            onClick={props.onClick} />
    </If>
)