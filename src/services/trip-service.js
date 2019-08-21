import axios from 'axios';

class TripService {
  constructor() {
    this.tripService = axios.create({
      baseURL: process.env.REACT_APP_BASE_URL,
      withCredentials: true,
    })
  }

  createNewTrip(newTrip){
  return this.tripService.post('/trip/create', newTrip)
   .then(({ data }) => data);
  }

  deleteTrip(id){
    return this.tripService.delete(`/trip/delete/${id}`)
     .then(({ data }) => data);
    }
}

  const tripService = new TripService();

  export default tripService; 