import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import withAuth from './withAuth.js';

class Navbar extends Component {
  render() {  
    return (
      <div>
        {this.props.isLoggedIn ? (
          <navbar className="navbar">
            <Link className="navbar-link" to='/'><i class="fas fa-home"></i></Link>
            <Link className="navbar-link" to='/me'><i class="far fa-user"></i></Link>
            <p className="navbar-link" onClick={this.props.logout}><i class="fas fa-sign-out-alt"></i></p>
          </navbar>
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