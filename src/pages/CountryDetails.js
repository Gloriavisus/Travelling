import React, { Component } from 'react';
import countryService from '../services/country-service';
import Navbar from "../components/Navbar";
import userService from '../services/user-service';





 class CountryDetails extends Component {
   state={
     country: null,
     showPeople: false,
   }
   componentDidMount(){
     const {id}= this.props.match.params;
     countryService.getOneCountry(id)
     .then((country)=>{
      return userService.getAllUsers()
      .then((users)=>{
        this.setState({
          users: users,
          country,
        })
      })
     
     })
     .catch((error)=>{
       console.log(error);
     })
   }

   handleClick = () => {
    this.setState({
      showPeople: !this.state.showPeople,
    })
   }
   
  render() {
    const{country, showPeople} = this.state;
    console.log(country)
    return (
      <>
      <Navbar />
        {country ? (
          <div className="info">
            <h2>{country.name}</h2>
            <img src={country.image} alt={country.name}/>
            <p>{country.description}</p>
            <p onClick={this.handleClick} ><i className="fab fa-gratipay"></i></p> 
          </div> ):null}
        {
          showPeople ?( 
          <>
            <h2>List people</h2>
            {this.state.users.map((user) => {
              return (
                <p>user.username</p>
                

              )
            })}
          </>
          ) : null
        }
      </>
    );
  }
}

export default CountryDetails;
