
import React from 'react';
import { NavLink } from 'react-router-dom';
import '../css/SidebarMenu.css';


export default props => {

        return (
            <div >
                <nav id="sidebar" className=" sidebar list-unstyled">
                    <ul className="sidenav ">
                        <li className="first-link">
                            <NavLink exact to="/landing" activeClassName="active">
                                <div className="landing"></div>
                            </NavLink>
                        </li>
                        <li>
                            <NavLink to="/projects" activeClassName="active">
                                <div className="projects"></div>
                                Projects
                            </NavLink>
                        </li>
                        <li>
                            <NavLink to="/employees" activeClassName="active">
                                <div className="employees"></div>
                                Employees
                            </NavLink>
                        </li>
                    </ul>
                </nav>
            </div>
        );
    }
