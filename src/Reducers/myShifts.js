const myShiftsReducer = (state = [], action) => {
    switch (action.type) {
        case 'LOAD_DASHBOARD':
            return [...state, ...action.myShifts]
        default:
            return state
    }
}

export default myShiftsReducer