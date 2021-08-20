import { useDispatch, useSelector } from 'react-redux'
import { useHistory } from 'react-router-dom'
import { loadDashboard, loadSelectedOrg } from '../../Actions/dashboard'
import useAPI from '../Auth/API'

const useDashboard = () => {
    
    const dispatch = useDispatch()
    const history = useHistory()
    const API_URL = useAPI()
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

    const joinOrg = org => {
        const formData = {
            user_id: user.id,
            organization_id: org.id
        }
        const reqObj = {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(formData)
        }
        fetch(`${API_URL}join`, reqObj)
        .then(resp => resp.json())
        .then(({success, error}) => {
            success
            ? fetchDashboardData()
            : console.log(error)
        })
    }

    const selectOrg = org => {
        dispatch(loadSelectedOrg(org))
    }

    const viewShifts = () => {
        history.push('/dashboard/shifts')
    }

    const editOrg = () => {
        history.push('/dashboard/edit')
    }

    const fetchDashboardData = () => {
        fetch(`${API_URL}users/${user.id}`)
        .then(resp => resp.json())
        .then(({ organizations, shifts, other_organizations }) => {
            dispatch(loadDashboard(organizations, shifts, other_organizations))
        })
    }


    return { 
        selectOrg, 
        leaveOrg, 
        joinOrg, 
        editOrg, 
        viewShifts, 
        fetchDashboardData 
    }
}

export default useDashboard;