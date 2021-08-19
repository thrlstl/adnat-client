const selectedOrgReducer = (state = {}, action) => {
    switch (action.type) {
        case 'LOAD_SELECTED_ORG':
            return {...state, ...action.selectedOrg} 
        default:
            return state
    }
}

export default selectedOrgReducer