import axios from 'axios'

//https://server-bookyou.onrender.com
//http://localhost:3000

const api = axios.create({
  baseURL: 'https://server-bookyou.onrender.com',
})

export default api
