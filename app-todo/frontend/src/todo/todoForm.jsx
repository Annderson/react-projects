import React from 'react'
import IconButton from '../template-html/iconButton'

export default props =>(
    <div role="form" className="">
        <form>
            <div className="col-xs-9 col-sm-10 col-md-10">
                <input type="text" value={props.desc}
                        onChange={props.handleChange}
                        className="form-control" 
                        placeholder="Busque ou adcione uma tarefa"/>
            </div>
            <div className="col-xs-3 col-sm-2 col-md-2">
                <IconButton style='success' icon='plus' 
                            onClick={props.handleAdd}>
                </IconButton>
                <IconButton style='info' icon='search' 
                            onClick={props.handleSearch}>
                </IconButton>
            </div>
        </form>
    </div>
)