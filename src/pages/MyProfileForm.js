import React from 'react';
import withAuth from '../components/withAuth';
import authService from '../services/auth-service'
import {Redirect} from 'react-router-dom';
import Navbar from "../components/Navbar";
import FileComponent from '../components/FileComponent';

class MyProfileForm extends React.Component {
  state={
    username:this.props.user.username,
    hobbies:this.props.user.hobbies,
    description: this.props.user.description,
    image: this.props.user.image,
    isRedirect: false,
  }

handleChange = (event)=>{
  const{ name, value }= event.target;
  this.setState({
    [name]: value,
  })
}

uploadUrl = (url) => {
  this.setState({
    image: url
  })
}

handleSubmit = (event)=>{
  event.preventDefault();
  const {hobbies, description, image}= this.state;
  authService.updateProfile({
    hobbies, description, image
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
    // console.log(this.props.user)
  return (
  <>
    <Navbar />
    <section className="editme">
      <form onSubmit={this.handleSubmit}>
        <div>
          <FileComponent uploadUrl={this.uploadUrl}/>
          <h3>{username}</h3>
          <label htmlFor="hobbies">Hobbies</label>
          <input type="text" name="hobbies" value={hobbies} onChange={this.handleChange}/><br />

          <label htmlFor="description">Descripción</label>
          <textarea name="description" value={description} onChange={this.handleChange}/><br />
        </div>
        <button type="submit">Guardar</button>
      </form>
      {isRedirect ? <Redirect to='/myprofile' /> : null}
    </section>
    </>
  )
}
}
export default withAuth(MyProfileForm);