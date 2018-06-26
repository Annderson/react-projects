export const changeUsername = event => ({
    type: 'USERNAME_CHANGED',
    payload: event.target.value
})

export const changePassword = event => ({
    type: 'PASSWORD_CHANGED',
    payload: event.target.value
})