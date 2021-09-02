const otherOrgsReducer = (state = [], action) => {
    switch (action.type) {
        case 'LOAD_DASHBOARD':
            return [...action.otherOrgs]
        default:
            return state
    }
}

export default otherOrgsReducer