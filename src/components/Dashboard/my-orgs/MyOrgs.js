import { useSelector } from 'react-redux'
import OrgItem from './OrgItem'

function MyOrgs() {

    const myOrgs = useSelector(state => state.myOrgs)

    const renderMyOrgs = () => {
        return myOrgs.map(org => 
        <OrgItem
        {...org}
        key={org.id}/> )
    }

    return(
        <div>
            {renderMyOrgs()}
        </div>
    )
}

export default MyOrgs;