import axios from 'axios'

export default () => {
  return axios.create({
    baseURL: `http://localhost:8081`
    // baseURL: `https://contact-manager-prod.herokuapp.com`
    // baseURL: ''
  })
}
