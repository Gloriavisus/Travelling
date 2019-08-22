import withAuth from '../components/withAuth';
import {Link} from 'react-router-dom';
import Navbar from "../components/Navbar";
import tripService from '../services/trip-service'
import React, { Component } from 'react'

class MyProfile extends Component {
  state = {
    trips: [],
    noShow: []
  }
  deleteTrip = (id) => {
    const array = [...this.state.noShow]
    array.push(id)
    this.setState({
      noShow: array
    })
    tripService.deleteTrip(id)
    .then()
    .catch(e => console.log(e))
  }

  componentDidMount = () => {
    this.setState({
      trips: this.props.user.trips
    })
  }

  render() {
    const {username, hobbies, image, description} = this.props.user;
    return (
      <div>
        <>
      <Navbar />
        <div className="miperfil">
        {image ? <div className="img-contenedor"><img src={image} alt={username} /></div> : null}
        <Link className='editar-perfil' to="/myprofile/edit">Editar perfil</Link>
        <h3>{username}</h3>
        <p>{hobbies}</p>
        <p>{description}</p>
        </div>
        <div className='trips'>
          {this.state.trips.map((trip, i) => {
            return this.state.noShow.includes(trip._id) ? null :
             <article key={i}>
              <p>{trip.salida + ' -> ' + trip.llegada}</p>
              <p>price: {trip.precio}</p>
              <a onClick={() => {this.deleteTrip(trip._id)}}>Borrar</a>
            </article>
          })}
        </div>
      </>
      </div>
    )
  }
}

export default withAuth(MyProfile);