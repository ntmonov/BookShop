import { APP_KEY, APP_SECRET, ADMIN_ROLE_ID } from './config'
import { getCookieValue } from './cookiefunctions'

const createCredentials = (type) => {
    const basicCredentials = 'Basic ' + btoa(APP_KEY + ':' + APP_SECRET)
    const kinveyCredentials = 'Kinvey ' + getCookieValue('authToken')
    return (type === 'basic') ? basicCredentials : kinveyCredentials
}

const isLoggedIn = () => {
    return getCookieValue('authToken') !== ''
}

const isAdmin = () => {
    return getCookieValue('roleId') === ADMIN_ROLE_ID
}