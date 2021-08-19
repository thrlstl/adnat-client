import { useEffect } from 'react'
import useDashboard from './useDashboard'
import UserStatus from './UserStatus'
import MyOrgs from './my-orgs/MyOrgs'
import OtherOrganizations from './other-orgs/OtherOrganizations'
import Container from '../Container'

function Dashboard() {

    const { fetchDashboardData } = useDashboard()
    useEffect(() => { fetchDashboardData() })

    return (
        <Container name='dashboard-container'>
            <UserStatus />
            <MyOrgs />
            <OtherOrganizations />
        </Container>

    )
}

export default Dashboard;