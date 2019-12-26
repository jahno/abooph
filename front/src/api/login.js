import request from '@/utils/request'

export function loginByEmail(email, password) {
  const data = {
    email,
    password
  }
  return request({
    url: 'auth/login',
    method: 'post',
    data
  })
}

export function register(name, email,password) {
  const data = {
    name,
    email,
    password
  }
  return request({
    url: 'auth/register',
    method: 'post',
    data
  })
}


export function logout() {
  return request({
    url: 'auth/logout',
    method: 'post'
  })
}

export function getUserInfo() {
  return request({
    url: 'me',
    method: 'get'
  })
}

export function ForgotPassword(email) {
  return request({
    url: '/auth/reset-password',
    method: 'post',
    data: { email }
  })
}

export function findResetToken(token) {
  return request({
    url: '/auth/reset-password',
    method: 'get',
    params: { token }
  })
}

export function resetPassword(data) {
  return request({
    url: '/auth/reset-password',
    method: 'put',
    data
  })
}
