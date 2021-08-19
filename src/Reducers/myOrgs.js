const myOrgsReducer = (state = [], action) => {
    switch (action.type) {
        case 'LOAD_MY_ORGS':
            return [...action.myOrgs]
        case 'DELETE_ORG':
            const updatedOrgs = state.filter(org =>
                org.id !== action.id)
            return updatedOrgs  
        default:
            return state
    }
}

export default myOrgsReducer