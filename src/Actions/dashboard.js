export const loadDashboard = (myOrgs, myShifts, otherOrgs) => {
    return {
        type: 'LOAD_DASHBOARD',
        myOrgs: myOrgs,
        otherOrgs: otherOrgs,
        myShifts: myShifts,
    }
}

export const loadSelectedOrg = org => {
    return {
        type: 'LOAD_SELECTED_ORG',
        selectedOrg: org,
    }
}

export const deselectOrg = () => {
    return {
      type: 'DESELECT_ORG',
      selectedOrg: {}
    }
}
