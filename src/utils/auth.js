import { BASE_URL, APP_KEY, USER_ROLE_ID, ADMIN_ROLE_ID } from './config'
import { post, put } from './crud'
import { setCookie, getCookieValue } from './cookiefunctions'

function saveCookie (user) {
    setCookie('username', user.username)
    setCookie('authToken', user._kmd.authtoken)
    setCookie('roleId', user._kmd.roles[0].roleId)
    setCookie('userId', user._id)
  }
  
  function isAuth () {
    return getCookieValue('authToken') !== ''
  }
  
  function isAdmin () {
    return getCookieValue('roleId') === ADMIN_ROLE_ID
  }

function register ({ username, password, email, address }) {
  const data = { username, password, email, address }
  return post(`${BASE_URL}user/${APP_KEY}`, 'basic', data)
}

function login ({ username, password }) {
  const data = { username, password }
  return post(`${BASE_URL}user/${APP_KEY}/login`, 'basic', data)
}

async function assignRole (userId) {
  return put(`${BASE_URL}user/${APP_KEY}/${userId}/roles/${USER_ROLE_ID}`, 'basic')
}

async function logout () {
  return post(`${BASE_URL}user/${APP_KEY}/_logout`, 'kinvey')
}

export { register, login, assignRole, logout, saveCookie, isAuth, isAdmin }