import React from 'react'

export default props => {
    return (
        <form className="">
            <div className="form-group">
                <label className="label-camp">Username</label> <br/>
                <input type="text" className="field-sizes" />
            </div>
            <div className="form-group">
                <label className="label-camp">Senha</label> <br/>
                <input type="password" class="field-sizes" />
            </div>
            
            <br/>
            <div className="form-group">
                <a className="btn btn-lg btn-success">
                    <strong>Entrar</strong>
                </a>
            </div>
        </form>
    )
}