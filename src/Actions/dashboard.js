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

export const loadSelectedOrg = org => {
    return {
        type: 'LOAD_SELECTED_ORG',
        selectedOrg: org,
    }
}

export const deleteOrg = id => {
    return {
        type: 'DELETE_ORG',
        id: id,
    }
}

