import React, { Component } from 'react';
import axios from 'axios';
import Navbar from '../components/Navbar';

class Trip extends Component {

  state ={
    trips:[],
    dateTo: '',
    dateFrom: '',
    countryFrom: '',
  }

  handleSubmit = (event) => {
    event.preventDefault();
    const {dateTo, dateFrom, countryFrom} = this.state;
    const dateFromFormated = dateFrom.split('-').reverse().join('/');
    const dateToFormated = dateTo.split('-').reverse().join('/');
    const {countryTo} = this.props.location.state
    axios.get(`https://api.skypicker.com/flights?flyFrom=${countryFrom}&to=${countryTo}&dateFrom=${dateFromFormated}&dateTo=${dateToFormated}&partner=picky&one_for_city=1`)
    .then((response) => {
      console.log(response.data.data)
      const userFromAPI = response.data.data;
      this.setState({
        trips: userFromAPI,
      })
    })
    .catch((error) => {
      console.log(error);

    })
  }

  handleOnChange = (event) => {
    const {name, value} = event.target;
    this.setState({
      [name]: value
    })
  }
  render() {
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
            return(<article>
              <p>Salida: {trip.cityFrom}</p>
              <p>Llegada: {trip.cityTo}</p>
              <p>Precio: {trip.price}€</p>
              <p>Duración del viaje: {trip.fly_duration}</p>
            </article>)
           })
         ) : null}
        </div>
      </>
    )
  }
}

export default Trip;