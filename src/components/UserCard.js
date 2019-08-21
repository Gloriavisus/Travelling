import React, { Component } from 'react'
import { Link } from 'react-router-dom';
export default class UserCard extends Component {
  state = {
    showMore: false,
  }

  handleShow = () => {
    this.setState({showMore: !this.state.showMore})
  }
  render() {
    const {username, hobbies, description} = this.props.user;
    console.log(this.props.user);
    return (
      <div>
      <p>{username}</p>
      

      {this.state.showMore && <>
        <p>{hobbies}</p>
        <p>{description}</p>
        <Link to={{
                    pathname: "/trip",
                    state: { countryTo: this.props.country.shortName }
                  }}>
        Book</Link>
      </>}
        <button onClick={this.handleShow}>{this.state.showMore ? "hide" : "show"}</button>
     </div>
    )
  }
}


