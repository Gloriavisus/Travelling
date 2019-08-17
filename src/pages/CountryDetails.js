import React, { Component } from 'react';
import countryService from '../services/country-service';


 class CountryDetails extends Component {
   state={
     country:null,
   }
   componentDidMount(){
     const {id}= this.props.match.params;
     countryService.getOneContry(id)
     .then((response)=>{
       this.setState({
         country:response
       })
     })
     .catch((error)=>{
       console.log(error);
     })
   }
  // const id = this.props.match.params.id
  // componentDidMount se conecte con el service de getOneCountry (id)
  // this.setState({country que venga del backend})

  render() {
    const{country} = this.state;
    console.log(country)
    return (
      <>
        {country ? (
          <div>
            <h1>Descripción</h1>
            <h2>{country.name}</h2>
            <img src={country.image} alt={country.name}/>
            <p>{country.description}</p>
          </div> ):null}
      </>
    );
  }
}

export default CountryDetails;
