import Axios from 'axios'
const baseURL = 'http://localhost:7000/posts'

class PostService {
  static getPosts () {
    return Axios
      .get(baseURL)
      .then(res => res.data)
      .catch(err => console.log(err))
  }

  static addPost (title, description) {
    return Axios.post(`${baseURL}`, {
      title: title,
      description: description
    })
      .then(res => console.log(res))
      .catch(err => console.log(err))
  }

  static modifyPost (id, title, description) {
    return Axios.patch(`${baseURL}/${id}`, {
      title: title,
      description: description
    })
      .then(res => console.log(res))
      .catch(err => console.log(err))
  }

  static deletePost (id) {
    return Axios.delete(`${baseURL}/${id}`)
  }
}
export default PostService
