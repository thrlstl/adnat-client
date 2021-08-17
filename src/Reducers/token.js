const tokenReducer = (state=null, action) => {
    switch (action.type) {
        case 'LOGIN_SUCCESS':
            return action.token
        case 'LOGOUT_SUCCESS':
            return action.token
        case 'SIGNUP_SUCCESS':
            return action.token
        default:
            return state
    }
}

export default tokenReducer