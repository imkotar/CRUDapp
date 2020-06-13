import Axios from 'axios'
const baseURL = 'http://localhost:7000/users'

class RegistrationService {
  static registerUser (name, email, password, password2) {
    return Axios
      .post(`${baseURL}/register`, {
        name: name,
        email: email,
        password: password,
        password2: password2
      })
      .then(res => res.data)
      .catch(err => console.log(err))
  }
}
export default RegistrationService
