import axios from 'axios'
import { Message } from 'element-ui'
//import store from '@/store'
import { getToken, getRefreshToken } from '@/utils/auth'

// create an axios instance
const service = axios.create({
  baseURL: 'http://localhost:3333/v1',
  timeout: 1000 * 60 // request timeout
})

// request interceptor
service.interceptors.request.use(
  config => {

    if (getToken()) {
      config.headers['Authorization'] = 'Bearer '+getToken()
      //config.headers['refresh_token'] = getRefreshToken()
    }
    return config
  },
  error => {
    // Do something with request error
    console.log(error) // for debug
    Promise.reject(error)
  }
)

// response interceptor
service.interceptors.response.use(
  response => response,

  error => {
    console.log('err' + error) // for debug
    Message({
      message: 'd',
      type: 'error',
      duration: 5 * 1000
    })
    return Promise.reject(error)
  }
)

export default service
