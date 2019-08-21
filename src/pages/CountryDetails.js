import React, { Component } from 'react';

import countryService from '../services/country-service';
import Navbar from "../components/Navbar";
import userService from '../services/user-service';
import UserCard from '../components/UserCard';

class CountryDetails extends Component {
  state = {
    country: null,
    showPeople: false,
    showInformation: true
  }
  componentDidMount() {
    const { id } = this.props.match.params;
    countryService.getOneCountry(id)
      .then((country) => {
        return userService.getAllUsers()
          .then((users) => {
            this.setState({
              users: users,
              country,
            })
          })

      })
      .catch((error) => {
        console.log(error);
      })
  }

  handleClick = () => {
    this.setState({
      showPeople: !this.state.showPeople,
    })
  }

  render() {
    const { country, showPeople, showInformation } = this.state;
    console.log(country)
    return (
      <>
        <Navbar />
        {country ? (
          <div className="info">
            <h2>{country.name}</h2>
            <img src={country.image} alt={country.name} />
            <p>{country.description}</p>
            <p onClick={this.handleClick} ><i className="fab fa-gratipay"></i></p>
          </div>) : null}
        {
          showPeople ? (
            <section className="viajeros">
              <h3>Compañeros de viaje</h3>
              {this.state.users.map((user) => {
                return (<div key={user._id}>
               
                  <UserCard user={user} country={country}/>
                   
               
                  </div>
                )
              })}
            </section>
          ) : null
        }
        {/* {
          showInformation ? (
            <section className="información">
              {this.state.users.map((user) => {
                return (
                  <>
                    <p>{user.hobbies}</p>
                    <p>{user.image}</p>
                  </>
                )
              })}
            </section>
          ) : null
        } */}
      </>
    );
  }
}
      
export default CountryDetails;
