const myOrgsReducer = (state = [], action) => {
    switch (action.type) {
        case 'LOAD_DASHBOARD':
            return [...action.myOrgs]
        default:
            return state
    }
}

export default myOrgsReducer