import axios from 'axios';

class UserService {
  constructor() {
    this.users = axios.create({
      baseURL: `${process.env.REACT_APP_BASE_URL}`,
      withCredentials: true,
    })
  }

  getAllUsers() {
    return this.users.get('/users')
      .then(({data}) => data);
  }
}

const userService = new UserService();

export default userService; 