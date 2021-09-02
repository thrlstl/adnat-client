import { useEffect } from 'react'
import { Route, Switch } from 'react-router-dom'
import useDashboard from './useDashboard'
import UserStatus from './UserStatus'
import MyOrgs from './my-orgs/MyOrgs'
import OtherOrganizations from './other-orgs/OtherOrganizations'
import Container from '../Container'
import ViewShifts from './view-shifts/ViewShifts'
import EditOrg from './edit-org/EditOrg'

function Dashboard() {

    const { fetchDashboardData } = useDashboard()
    useEffect(() => { fetchDashboardData() })

    return (
        <Container name='dashboard-container'>
            <UserStatus />
                <Switch>
                    <Route exact path='/dashboard/shifts' component={ViewShifts} />
                    <Route exact path='/dashboard/edit' component={EditOrg} />
                </Switch>
            <MyOrgs />
            <OtherOrganizations />
        </Container>

    )
}

export default Dashboard;