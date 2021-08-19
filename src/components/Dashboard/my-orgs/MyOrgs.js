import { useSelector } from 'react-redux'
import OrgItem from './OrgItem'

function MyOrgs() {

    const myOrgs = useSelector(state => state.myOrgs)

    function OrgsList() {
        return(
            myOrgs.map(org => 
                <OrgItem
                {...org}
                key={org.id}/> )
        )
    }

    function Message() {
        return(
            <p>
            You aren't a member of any organizations.<br></br>
            Join an existing one or create a new one.
            </p>
        )
    }

    return(
        <div className='my-orgs-container'>
            { myOrgs.length > 0 ? <OrgsList /> : <Message /> }
        </div>
    )
}

export default MyOrgs;