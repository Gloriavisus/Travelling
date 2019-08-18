import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import withAuth from './withAuth.js';

class Navbar extends Component {
  render() {  
    return (
      <div>
        {this.props.isLoggedIn ? (
          <nav className="navbar">
            <Link className="navbar-link" to='/'><i className="fas fa-home"></i></Link>
            <Link className="navbar-link" to='/me'><i className="far fa-user"></i></Link>
            <p className="navbar-link" onClick={this.props.logout}><i className="fas fa-sign-out-alt"></i></p>
          </nav>
        ) : (
          <>
            <Link to='/login'>Login</Link>
            <Link to='/signup'>Signup</Link>
          </>
        )}
      </div>
    )
  }
}

export default withAuth(Navbar);