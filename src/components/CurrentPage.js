import { Switch, Route, Redirect } from 'react-router-dom'
import AccountPage from './Pages/AccountPage';
import HomePage from './Pages/HomePage';
import OrganizationPage from './Pages/OrganizationPage';
import ShiftsPage from './Pages/ShiftsPage';

function CurrentPage() {
    return (
        <Switch>
            <Route exact path='/home' component={HomePage} />
            <Route exact path='/organization' component={OrganizationPage} />
            <Route exact path='/shifts' component={ShiftsPage} />
            <Route exact path='/account' component={AccountPage} />
        </Switch>
    )
}

export default CurrentPage;