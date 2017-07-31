import React, {Component} from 'react';
import {NavLink} from 'react-router-dom';

export default class Navigation extends Component{

  render() {
    return (
    <nav className="navbar">
        <NavLink activeClassName="selected" className="nav-link" exact to="/">Home</NavLink>
        <NavLink activeClassName="selected" className="nav-link" to="/About">About</NavLink>
        <NavLink activeClassName="selected" className="nav-link" to="/Portfolio">Portfolio</NavLink>
        <NavLink activeClassName="selected" className="nav-link" to="/Contacts">Contacts</NavLink>
        <NavLink activeClassName="selected" className="nav-link" to="/References">References</NavLink>
    </nav>
    )
  }
}
