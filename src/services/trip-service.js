import axios from 'axios';

class TripService {
  constructor() {
    this.countries = axios.create({
      baseURL: `${process.env.REACT_APP_BASE_URL}`,
      withCredentials: true,
    })
  }
  createNewTrip(newTrip){
  return this.countries.post('/trip/new', newTrip)
   .then(({ data }) => data);
  }
}

  const tripService = new TripService();

  export default TripService; 