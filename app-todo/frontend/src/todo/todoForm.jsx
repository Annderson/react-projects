import React from 'react'
import IconButton from '../template-html/iconButton'

export default props =>(
    <div role="form" >
        <form className="">
            <div className="space col-xs-6 col-sm-9 col-md-9">
                <input type="text" value={props.desc}
                        onChange={props.handleChange}
                        className="form-control" 
                        placeholder="Busque ou adcione uma tarefa"/>
            </div>
            <div className="col-xs-6 col-sm-3 col-md-3">
                <IconButton style='success' icon='plus' 
                            onClick={props.handleAdd}>
                </IconButton>
                <IconButton style='info' icon='search' 
                            onClick={props.handleSearch}>
                </IconButton>
                <IconButton style='danger' icon='close' 
                            onClick={props.handleClear}>
                </IconButton>
            </div>
        </form>
    </div>
)