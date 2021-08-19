import { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { loadMyOrgs, loadMyShifts } from '../../Actions/dashboard'
import UserStatus from './UserStatus'
import Organizations from './Organizations.js'


import API from '../Auth/API'
import MyOrgs from './my-orgs/MyOrgs'
const API_URL = API()

function Dashboard() {

    const dispatch = useDispatch()
    const [userID, myOrgs] = useSelector((state) => [
        state.user.id,
        state.myOrgs
    ])

    useEffect(() => {
        fetch(`${API_URL}users/${userID}`)
        .then(resp => resp.json())
        .then(({ organizations, shifts }) => {
            dispatch(loadMyOrgs(organizations))
            dispatch(loadMyShifts(shifts))
        })
    }, [dispatch, userID])

    return (
        <>
            <UserStatus />
            { myOrgs.length > 0 ? <MyOrgs /> : <Organizations /> }
        </>

    )
}

export default Dashboard;