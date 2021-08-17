const userReducer = (state = {}, action) => {
    switch (action.type) {
        case 'LOGIN_SUCCESS':
            return action.user
        case 'LOGOUT_SUCCESS':
            return action.user
        case 'SIGNUP_SUCCESS':
            return action.user
        default:
            return state
    }
}

export default userReducer