import { APP_KEY, APP_SECRET } from './config'
import { getCookieValue } from './cookiefunctions'

function createCredentials (type) {
  const basicCredentials = 'Basic ' + window.btoa(APP_KEY + ':' + APP_SECRET)
  const masterCredentials = 'Basic a2lkX0J5VExFVk9aVTowODlkNTExYzY1MWU0ZWE5YWE1YjMwM2Q5NTAxZWJlNw=='
  const kinveyCredentials = 'Kinvey ' + getCookieValue('authToken')
  if (type === 'basic') {
    return basicCredentials
  } else if (type === 'master') {
    return masterCredentials
  } else {
    return kinveyCredentials
  }
}

function request (method) {
  return async function (url, credentials, data = {}, options = {}) {
    const response = await window.fetch(url, {
      method,
      headers: {
        'Authorization': createCredentials(credentials),
        'Content-Type': 'application/json',
        'Accept': 'application/json'
      },
      body: Object.keys(data).length ? JSON.stringify(data) : undefined,
      ...options
    })
    return response
  }
}

export const get = request('get')
export const post = request('post')
export const put = request('put')
export const remove = request('delete')