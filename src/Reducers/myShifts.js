const myShiftsReducer = (state = [], action) => {
    switch (action.type) {
        case 'LOAD_DASHBOARD':
            return [...action.myShifts]
        default:
            return state
    }
}

export default myShiftsReducer