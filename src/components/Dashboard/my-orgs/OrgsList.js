import { useSelector } from "react-redux";
import OrgItem from './OrgItem'

function OrgsList() {

    const myOrgs = useSelector(state => state.myOrgs)

    return(
        myOrgs.map(org => 
            <OrgItem
            {...org}
            key={org.id}/> )
    )
}

export default OrgsList;