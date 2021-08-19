import { useSelector } from 'react-redux'

function OtherOrganizations() {

    const otherOrgs = useSelector(state => state.otherOrgs)

    function OrgItem({name}) {
        return(
            <div className='org-container'>
                <h2 id='org-name'>{name}</h2>
                    <a href='/dashboard' id='org-action'>Edit</a>
                    <a href='/dashboard' id='org-action'>Join</a>
            </div>
        )
    }

    function OtherOrgsList() {
        return(
            otherOrgs.map(org => <OrgItem key={org.id} name={org.name} />)
        )
    }


    return(
        <div>
            <OtherOrgsList />
        </div>
    )
}

export default OtherOrganizations;