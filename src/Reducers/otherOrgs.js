const otherOrgsReducer = (state = [], action) => {
    switch (action.type) {
        case 'LOAD_DASHBOARD':
            return [...action.otherOrgs]
        // case 'FILTER_ORGS':
        //     const currentOrgs = action.orgs
        //     const updatedOrgs = state.filter(org1 => !currentOrgs.some(org2 => org1.id === org2.id))
        //     return updatedOrgs  
        default:
            return state
    }
}

export default otherOrgsReducer