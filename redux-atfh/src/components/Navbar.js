import React from 'react';
import logo from '../logo.jpg';

export default function Navbar() {
    return (
        <nav className="navbar navbar-expand-sm navbar-dark bg-primary mb-4">
            <img src={logo} className="App-logo" alt="logo" />
            <div className="container">
                <a className="navbar-brand" href="Dashboard.html">
                    ATFH
                </a>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#mobile-nav">
                    <span className="navbar-toggler-icon" />
                </button>
            </div>
        </nav>
    )
}
