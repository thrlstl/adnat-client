const authReducer = (state=false, action) => {
    switch (action.type) {
        case 'UPDATE_AUTHENTICATION':
            return action.isAuthenticated
        default:
            return state
    }
}

export default authReducer