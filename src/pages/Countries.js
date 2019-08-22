import React, { Component } from 'react';
import withAuth from '../components/withAuth.js';
import countryService from '../services/country-service.js';
import { Link } from 'react-router-dom';
import Navbar from "../components/Navbar";

class Countries extends Component {
  state = {
    countries: [],
  };

  componentDidMount(){
    countryService.getAllCountries()//recibe todos los countries del backend
      .then(response => {
        // console.log(response);
        this.setState({
          countries: response
        })
      })
  }

  render() {
    const {countries} = this.state;
    return (
      <div>
      <Navbar />
      <section className="content">
        <h1>Elige tu destino</h1>
        {countries.length > 0 ? countries.map((country)=>{
          return(
            <article className="country-card" key={country._id}>
              <Link to={`/countries/${country._id}`} >
                <p>{country.name}</p>
                <img src = {country.image} alt={country.name} />
              </Link>
            </article>
          )
        }) : <p>Loading ...</p>}
      </section>
      </div>
    )
  }
}

export default withAuth(Countries);