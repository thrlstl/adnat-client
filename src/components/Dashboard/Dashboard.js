import { useEffect } from 'react'
import useDashboard from './useDashboard'
import UserStatus from './UserStatus'
import MyOrgs from './my-orgs/MyOrgs'
import OtherOrganizations from './OtherOrganizations.js'

function Dashboard() {

    const { fetchDashboardData } = useDashboard()
    useEffect(() => { fetchDashboardData() })

    return (
        <>
            <UserStatus />
            <MyOrgs />
            <OtherOrganizations />
        </>

    )
}

export default Dashboard;