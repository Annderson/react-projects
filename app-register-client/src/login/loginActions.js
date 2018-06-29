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
    return { type: 'LOGINS_SEARCH', payload: request }
}

export const logar = (username, password) => {

    return dispatch => {
        axios.post(URL, { username, password })
            .then(resp => dispatch({ type: 'LOGINS_ADDED', payload: resp.data }))
            .then(resp => dispatch(search()))
    }
}