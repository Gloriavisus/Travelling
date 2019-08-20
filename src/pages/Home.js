import React from 'react';
import { Link } from 'react-router-dom'



function Home() {
  return (
    <div className="homepage">
      <h2 >TRAVELLING</h2>
      <Link to='/login'>Login</Link>
      <Link to='/signup'>Signup</Link>
    </div>
  )
}

export default Home;
