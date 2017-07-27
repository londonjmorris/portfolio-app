import React, {Component} from 'react';
import {Link} from 'react-router-dom';

export default class Navigation extends Component{

  render() {
    return (
    <nav className="navbar">
      <div className="is-white">
        <div><button className="button is-info"><Link to="/">Home</Link></button></div>
        <div><button className="button is-warning"><Link to="/About">About</Link></button></div>
        <div><button className="button is-danger"><Link to="/Portfolio">Portfolio</Link></button></div>
      </div>
    </nav>
    )
  }
}
