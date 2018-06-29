import { combineReducers } from 'redux'
import authReducer from '../auth-keycloak/authReducer'

const rootReducers = combineReducers({
    auth: authReducer
})

export default rootReducers