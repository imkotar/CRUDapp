import Axios from 'axios'
const baseURL = 'http://localhost:7000/users'

class AuthenticationService {
  static loginUser (id) {
    return Axios
      .get(`${baseURL}/${id}`)
      .then(res => res.data)
      .catch(err => console.log(err))
  }
}
export default AuthenticationService
