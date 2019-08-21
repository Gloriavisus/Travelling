import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import withAuth from '../components/withAuth';

class Login extends Component {
  state = {
    username: '',
    password: '',
  }

  handleFormSubmit = (event) => {
    event.preventDefault();
    const { username, password } = this.state

    this.props.login({ username, password })
    .then( (user) => {
      console.log(user)
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
      <div className="login-page">
        <form onSubmit={this.handleFormSubmit}>
          <label htmlFor='username' >Nombre:</label>
          <input id='username' type='text' name='username' value={username} onChange={this.handleChange}/>
          <label htmlFor='password'>Contraseña:</label>
          <input id='password' type='password' name='password' value={password} onChange={this.handleChange} />
          <button className="buttonlogin"type='submit'>Iniciar Sesion</button>
        </form>

        <p>¿Aún no tienes cuenta?
            <Link to={'/signup'}> Registrarse</Link>
        </p>
      </div>
    )
  }
}

export default withAuth(Login);