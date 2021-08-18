const allOrgsReducer = (state = [], action) => {
    switch (action.type) {
        case 'LOAD_ALL_ORGS':
            return [...state, ...action.allOrgs] 
        default:
            return state
    }
}

export default allOrgsReducer