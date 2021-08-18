const myOrgsReducer = (state = [], action) => {
    switch (action.type) {
        case 'LOAD_MY_ORGS':
            return [...state, ...action.myOrgs] 
        default:
            return state
    }
}

export default myOrgsReducer