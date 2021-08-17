const userReducer = (state = {}, action) => {
    switch (action.type) {
        case 'LOGIN_SUCCESS':
            return { ...state, ...action.user }
        case 'SIGNUP_SUCCESS':
            return { ...state, ...action.user }
        default:
            return state
    }
}

export default userReducer