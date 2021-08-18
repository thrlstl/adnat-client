import { useSelector } from 'react-redux'

function MyOrgs() {

    const myOrgs = useSelector(state => state.myOrgs)

    function OrgItem({name}) {
        return(
            <>
            <h2 id='org-name'>{name}</h2>
                <a href='/dashboard' id='org-action'>View Shifts</a>
                <a href='/dashboard' id='org-action'>Edit</a>
                <a href='/dashboard' id='org-action'>Leave</a>
            </>
        )
    }

    const renderMyOrgs = () => {
        return myOrgs.map(org => <OrgItem key={org.id} name={org.name} />)
    }

    return(
        <div>
            {renderMyOrgs()}
        </div>
    )
}

export default MyOrgs;