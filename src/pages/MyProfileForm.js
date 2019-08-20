import React from 'react';
import withAuth from '../components/withAuth';
import authService from '../services/auth-service'
import {Redirect} from 'react-router-dom';
import Navbar from "../components/Navbar";


class MyProfileForm extends React.Component {
  state={
    username:this.props.user.username,
    hobbies:'',
    description:'',
    isRedirect: false,
  }

handleChange = (event)=>{
  const{ name, value }= event.target;
  this.setState({
    [name]: value,
  })
}
handleSubmit = (event)=>{
  event.preventDefault();
  const {hobbies, description}= this.state;
  authService.updateProfile({
    hobbies, description
  })
  .then(response =>{
    this.props.getMe();
    this.setState({
      isRedirect: true,
    })
  })
  .catch((error) => {
    console.log(error)
  })
}


  render() {
    const {username, hobbies,description,isRedirect} = this.state 
  return (
    <>
      <form onSubmit={this.handleSubmit}>
        <Navbar />
        <div>
          <h3>{username}</h3>
          <label htmlFor="hobbies">Hobbies</label>
          <input type="text" name="hobbies" value={hobbies} onChange={this.handleChange}/><br />

          <label htmlFor="description">Descripción</label>
          <textarea name="description" value={description} onChange={this.handleChange}/><br />
        </div>
        <button type="submit">Guardar</button>
      </form>
      {isRedirect ? <Redirect to='/myprofile' /> : null}
    </>
  )
}
}
export default withAuth(MyProfileForm);