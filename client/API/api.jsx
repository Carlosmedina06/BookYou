import axios from 'axios'
/* const urlocal = 'http://localhost:3001' */
/* const url = 'https://bookyou-production.up.railway.app' */

const rutaApi = axios.create({
  baseURL: `http://localhost:3001`,
})

export default rutaApi
