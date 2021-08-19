const allOrgsReducer = (state = [], action) => {
    switch (action.type) {
        case 'LOAD_ALL_ORGS':
            return [...action.allOrgs] 
        default:
            return state
    }
}

export default allOrgsReducer