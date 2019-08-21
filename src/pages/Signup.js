import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import withAuth from '../components/withAuth.js';

class Signup extends Component {

  state = {
    username: '',
    password: '',
  };

  handleFormSubmit = (event) => {
    event.preventDefault();
    const username = this.state.username;
    const password = this.state.password;

    this.props.signup({ username, password })
      .then( (user) => {
        console.log(user)
        this.setState({
            username: '',
            password: '',
        });
      })
      .catch( error => console.log(error) )
  }

  handleChange = (event) => {  
    const {name, value} = event.target;
    this.setState({[name]: value});
  }

  render() {
    const { username, password } = this.state;
    return (
      <div className="signup-page">
        <form onSubmit={this.handleFormSubmit}>
          <label htmlFor='username'>Nombre:</label>
          <input id='username' type='text' name='username' value={username} onChange={this.handleChange}/>
          <label htmlFor='password'>Contraseña:</label>
          <input id='password' type='password' name='password' value={password} onChange={this.handleChange} />
          <button className="buttonsignup"type='submit'>Registrarse</button>
        </form>

        <p>¿Ya tienes cuenta? 
          <Link to={'/login'}> Iniciar sesion</Link>
        </p>

      </div>
    )
  }
}

export default withAuth(Signup);