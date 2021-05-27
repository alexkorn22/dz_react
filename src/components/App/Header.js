import React from "react";

export default function Header({ children}) {
    return <nav className="navbar navbar-expand-lg navbar-light bg-light fixed-top">
        <a className="navbar-brand h1" href="/" onClick={e => e.preventDefault()}>Shop React</a>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent"
                aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"/>
        </button>

        <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav mr-auto">
            </ul>
            <div className="my-2 mr-5 my-lg-0">
                { children }
            </div>
        </div>
    </nav>
}