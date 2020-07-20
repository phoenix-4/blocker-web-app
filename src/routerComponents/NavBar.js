import React, { Component } from 'react';
import { Link, NavLink } from "react-router-dom";
import './NavBar.css';
import 'bootstrap/dist/css/bootstrap.min.css';

export default class NavBar extends Component {
    render() {
        return (
            <div className = "tsrNav">
                <nav class="navbar navbar-expand-lg navbar-light bg-light">
                    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="navbar fixed-top navbar-light bg-light" id="navbarNavAltMarkup">
                        <div className="navbar-nav">
                        <NavLink className="navbar-brand" to="/home"><p>BLOCKER </p></NavLink>
                        <NavLink className="navbar-brand" to="/" disabled></NavLink>
                        <NavLink className="navbar-brand" to="/home"><p>Home</p></NavLink>
                        <NavLink className="navbar-brand" to="/create"></NavLink>
                        <NavLink className="navbar-brand" to="/create"><p>Create Vehicle</p></NavLink>
                       
                        </div>
                    </div>
                </nav>
            </div>
        )
    }
}
