const myOrgsReducer = (state = [], action) => {
    switch (action.type) {
        case 'LOAD_DASHBOARD':
            const myOrgs = [...action.myOrgs]
            myOrgs.sort((a,b) => {
                return a.updated_at < b.updated_at
                ? 1
                : ( a.updated_at > b.updated_at
                ? -1
                : 0 ) 
            })
            return myOrgs
        default:
            return state
    }
}

export default myOrgsReducer