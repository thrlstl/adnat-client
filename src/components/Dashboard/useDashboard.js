import { useDispatch, useSelector } from 'react-redux'
import { deleteOrg, loadSelectedOrg } from '../../Actions/dashboard'

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
        dispatch(deleteOrg(org.id))
    }

    const selectOrg = org => {
        dispatch(loadSelectedOrg(org))
    }

    return { selectOrg, leaveOrg }
}

export default useDashboard;