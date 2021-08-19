import { useSelector } from "react-redux"
import OrgItem from './OrgItem'

function OtherOrgsList() {

    const otherOrgs = useSelector(state => state.otherOrgs)
    
    return(
        otherOrgs.map(org => 
        <OrgItem key={org.id} {...org} /> )
    )
}

export default OtherOrgsList;