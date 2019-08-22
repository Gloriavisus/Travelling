import React, { Component } from 'react';
import axios from 'axios';
import Navbar from '../components/Navbar';
import tripService from '../services/trip-service'
import withAuth from '../components/withAuth';

class Trip extends Component {

  state ={
    trips:[],
    dateTo: '',
    dateFrom: '',
    countryFrom: '',
    isSave: false
  }

  handleSubmit = (event) => {
    event.preventDefault();
    const {dateTo, dateFrom, countryFrom} = this.state;
    const dateFromFormated = dateFrom.split('-').reverse().join('/');
    const dateToFormated = dateTo.split('-').reverse().join('/');
    const {countryTo} = this.props.location.state;
    console.log("From Handle Submit:", this.props.location)
    axios.get(`https://api.skypicker.com/flights?flyFrom=${countryFrom}&to=${countryTo}&dateFrom=${dateFromFormated}&dateTo=${dateToFormated}&partner=picky&one_for_city=1`)
    .then((response) => {
      console.log("Trip Response:", response.data.data)
      const userFromAPI = response.data.data;
      this.setState({
        trips: userFromAPI,
      })
    })
    .catch((error) => {
      console.log(error);

    })
  }

  bookTrip = (trip) => {
    console.log("bookTrip:", trip)
    tripService.createNewTrip(trip)
    .then(() => {
      this.setState({
        isSave: true
      })
    })
    .catch((e) => console.log(e))
  }

  handleOnChange = (event) => {
    const {name, value} = event.target;
    this.setState({
      [name]: value
    })
  }
  render() {

    console.log("Props from trip", this.props)
    const {dateTo, dateFrom, countryFrom, trips} = this.state;
    return (
    <>    
      <Navbar />
        <div className="viaje">
          <form onSubmit={this.handleSubmit}>
            <label>Ciudad</label>
            <input name='countryFrom' value={countryFrom} onChange={this.handleOnChange}/>
            <label>Desde</label>
            <input type='date' value={dateFrom} name='dateFrom' onChange={this.handleOnChange}/>
            <label>Hasta</label>
            <input type='date' value={dateTo} name='dateTo' onChange={this.handleOnChange}/>
            <button>Buscar viajes</button>
           </form>
           {trips.length > 0 ? (
            trips.map((trip) => {
            return(<article key={trip.price}>
              <p>Salida: {trip.cityFrom}</p>
              <p>Llegada: {trip.cityTo}</p>
              <p>Precio: {trip.price}€</p>
              <p>Duración del viaje: {trip.fly_duration}</p>
              {this.state.isSave ? <p>Buen Viaje!!</p>
              :<a onClick={() => {this.bookTrip(trip) }}>Guardar</a>
              }
            </article>)
           })
         ) : null}
         
        </div>
      </>
    )
  }
}

export default withAuth(Trip);