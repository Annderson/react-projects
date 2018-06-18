import React from 'react'

export default props =>(
    <div role="form" className="">
        <form>
            <div className="col-xs-9 col-sm-10 col-md-10">
                <input type="text" value={props.desc}
                        onChange={props.handleChange}
                        className="form-control" 
                        placeholder="digite o nome da tarefa"/>
            </div>
            <div className="col-xs-3 col-sm-2 col-md-2">
                <button className="btn btn-success" onClick={props.handleAdd}>
                    <i className="fa fa-plus"></i> 
                </button> 
            </div>
        </form>
    </div>
)