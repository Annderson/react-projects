const INITIAL_STATE = {
    username: '',
    password: '',
}



export default (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case 'USERNAME_CHANGED':
            console.log(action.payload);
            return {...state, username: action.payload }
        case 'PASSWORD_CHANGED':
            console.log(action.payload);
            return {...state, password: action.payload }
        default:
            return state
    }
}