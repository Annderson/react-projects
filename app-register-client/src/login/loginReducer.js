const INITIAL_STATE = {
    username: '',
    password: '',
    list: [],
}

export default (state = INITIAL_STATE, action) => {
    switch (action.type) {

        case 'USERNAME_CHANGED':
            return {...state, username: action.payload }

        case 'PASSWORD_CHANGED':
            return {...state, password: action.payload }

        case 'LOGINS_SEARCH':
            console.log(action.payload.data)
            return {...state, list: action.payload.data }

        case 'LOGINS_ADDED':
            return {...state, username: '', password: '' }

        default:
            return state
    }
}