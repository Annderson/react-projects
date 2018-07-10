const INITIAL_STATE = {
    keycloak: null,
    authenticated: false
}

export default (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case 'KEYCLOAK_CHANGE':
            return {...state, keycloak: action.payload }
        default:
            return state
    }
}