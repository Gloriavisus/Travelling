import React from 'react';
import withAuth from '../components/withAuth';
import {Link} from 'react-router-dom'

function MyProfile(props) {
  console.log(props)
  return (
    <div>
      <h1>{props.user.username}</h1>
      <Link to="/myprofile/edit">Editar perfil</Link>
      <h1>{props.user.hobbies}</h1>
    </div>
  )
}
export default withAuth (MyProfile);