import { useDispatch, useSelector } from 'react-redux'
import { loadDashboard, loadSelectedOrg } from '../../Actions/dashboard'

import API from '../Auth/API'
const API_URL = API()

const useDashboard = () => {
    
    const dispatch = useDispatch()
    const user = useSelector(state => state.user)
    
    const leaveOrg = org => {
        const formData = {
            user_id: user.id,
            organization_id: org.id
        }
        const reqObj = {
            method: 'DELETE',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(formData)
        }
        fetch(`${API_URL}leave`, reqObj)
        fetchDashboardData()
    }

    const selectOrg = org => {
        dispatch(loadSelectedOrg(org))
    }

    const fetchDashboardData = () => {
        fetch(`${API_URL}users/${user.id}`)
        .then(resp => resp.json())
        .then(({ organizations, shifts, other_organizations }) => {
            dispatch(loadDashboard(organizations, shifts, other_organizations))
        })
    }


    return { selectOrg, leaveOrg, fetchDashboardData }
}

export default useDashboard;