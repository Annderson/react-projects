import axios from 'axios'

const URL = 'http://localhost:3005/api/logins'

export const changeUsername = event => ({
    type: 'USERNAME_CHANGED',
    payload: event.target.value
})

export const changePassword = event => ({
    type: 'PASSWORD_CHANGED',
    payload: event.target.value
})

export const search = () => {
    const request = axios.get(`${URL}?sort=`)
    console.log(request)
    return {
        type: 'LOGINS_SEARCH',
        payload: request
    }
}