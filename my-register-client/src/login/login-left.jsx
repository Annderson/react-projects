import React from 'react'
import { Link } from 'react-router-dom'


export default props => 
( 
    <div className="text-center style-font">
        <h3><span className="fa fa-hand-grab-o"></span><strong> Helping Hand</strong> </h3><br/>
        <h4>Inavação e Tecnonogia Social </h4>
        <p>
            Participe! <Link to="/register" className="linkar">Clique aqui <i className="fa fa-institution"></i></Link> e inscreva-se.
        </p>
    </div>      
)       
