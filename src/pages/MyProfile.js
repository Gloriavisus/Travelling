import React from 'react';
import withAuth from '../components/withAuth';
import {Link} from 'react-router-dom';
import Navbar from "../components/Navbar";

function MyProfile(props) {
  const {username, hobbies, image, description} = props.user;
  return (
    <div className="miperfil">
    <Navbar />
     {image ? <img src={image} alt={username} /> : null}
      <Link className='editar-perfil' to="/myprofile/edit">Editar perfil</Link>
      <h3>{username}</h3>
      <p>{hobbies}</p>
      <p>{description}</p>
    </div>
  )
}
export default withAuth (MyProfile);