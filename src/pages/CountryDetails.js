import React, { Component } from 'react';
import countryService from '../services/country-service';
 import {Link} from 'react-router-dom';


 class CountryDetails extends Component {
   state={
     country:null,
   }
   componentDidMount(){
     const {id}= this.props.match.params;
     countryService.getOneCountry(id)
     .then((response)=>{
       this.setState({
         country:response
       })
     })
     .catch((error)=>{
       console.log(error);
     })
   }
  render() {
    const{country} = this.state;
    console.log(country)
    return (
      <>
        {country ? (
          <div className="info">
            <h2>{country.name}</h2>
            <img src={country.image} alt={country.name}/>
            <p>{country.description}</p>
            <Link to={`countries/${country.id}`}><i class="fab fa-gratipay"></i></Link> 
          </div> ):null}
      </>
    );
  }
}

export default CountryDetails;
