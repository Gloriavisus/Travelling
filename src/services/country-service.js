import axios from 'axios';

class CountryService {
  constructor() {
    this.countries = axios.create({
      baseURL: `${process.env.REACT_APP_BASE_URL}`,
      withCredentials: true,
    })
  }

  getAllCountries() {
    return this.countries.get('/countries')
      .then(({data}) => data);
  }
  getOneCountry(id){
    return this.countries.get(`/countries/${id}`)
    .then (({data}) => data);
  }
  // createNewCountry(newCountry){
  //   return this.countries.post('/countries/new', newCountry)
  //   .then(({ data }) => data);
  // }
  updateCountry(id, countryUpdated){
    return this.countries.put(`/countries/${id}/update`, countryUpdated)
    .then(({ data })=> data);
  }
  deleteCountry(id){
    return this.countries.delete(`countries/${id}/delete`)
    .then (({ data}) => data);
  }
}

const countryService = new CountryService();

export default countryService; 
