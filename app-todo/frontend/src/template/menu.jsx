import React from 'react'

export default props => (
    <nav className="navbar navbar-inverse bg-inverse">
        <div className="navbar-header">
           <a className="navbar-brand" href="">  
              <i className="fa fa-anchor"></i>  Navbar 
           </a>
        </div>
        <div id="navbar" className="navbar-collapse collapse">
          <ul className="nav navbar-nav">
            <li className="">
              <a className="" href="/tarefas">
                <span className="fa fa-calendar"/> Tarefas  
              </a>
            </li>
            <li className="">
              <a className="" href="/about">
                <span className="fa fa-bank"/>  Sobre
              </a>
            </li>
           </ul>
         </div>
     </nav>
)