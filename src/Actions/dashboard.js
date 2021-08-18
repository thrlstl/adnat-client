export const loadMyOrgs = orgs => {
    return {
        type: 'LOAD_MY_ORGS',
        myOrgs: orgs,
    }
}

export const loadMyShifts = shifts => {
    return {
        type: 'LOAD_MY_SHIFTS',
        myShifts: shifts,
    }
}

export const loadAllOrgs = orgs => {
    return {
        type: 'LOAD_ALL_ORGS',
        allOrgs: orgs,
    }
}

