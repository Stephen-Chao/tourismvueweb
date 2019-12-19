import axios from 'axios'

export default() => {
  return axios.create({
    baseURL: 'https://tourism-staging-api.herokuapp.com/'
    // baseURL: 'https://safe-peak-07733.herokuapp.com/'
  })
}
