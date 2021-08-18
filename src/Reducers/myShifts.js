const myShiftsReducer = (state = [], action) => {
    switch (action.type) {
        case 'LOAD_MY_SHIFTS':
            return [...state, ...action.myShifts]
        default:
            return state
    }
}

export default myShiftsReducer