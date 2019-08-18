import React, { Component } from 'react';
import axios from 'axios';

class Trip extends Component {

  state ={
    trips:[],
  }

  componentDidMount(){
    axios.get('https://api.skypicker.com/flights?flyFrom=${countryFrom}&to=${countryTo}&dateFrom=${dateFrom}&dateTo=${dateTo}&partner=picky&one_for_city=1')
    .then((response) => {
      const userFromAPI = response.trips;
      this.setState({
        trips: userFromAPI,
      })
    })
    .catch((error) => {
      console.log(error);

    })
  }
  render() {
    return (
      <div>
        
      </div>
    )
  }
}

export default Trip;