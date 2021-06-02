import React from "react";
import { NavLink } from 'react-router-dom'

export default function Header({ children}) {
    return <nav className="navbar navbar-expand-lg navbar-light bg-light fixed-top">
        <NavLink to="/" className={'navbar-brand h1'}>Shop React</NavLink>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent"
                aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"/>
        </button>

        <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav mr-auto">
                <li className="nav-item">
                    <NavLink exact activeClassName='active' to="/" className={'nav-link'}>Главная</NavLink>
                </li>
                <li className="nav-item">
                    <NavLink activeClassName="active" to="/about" className={'nav-link'}>Инфо</NavLink>
                </li>
            </ul>
            <div className="my-2 mr-5 my-lg-0">
                { children }
            </div>
        </div>
    </nav>
}