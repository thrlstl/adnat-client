import useDashboard from '../useDashboard'
import Container from '../../Container'

function OrgItem(org) {

    const { leaveOrg, selectOrg, editOrg, viewShifts } = useDashboard()

    const handleClick = (e, type) => {
        e.preventDefault()
        selectOrg(org)
        switch(type) {
            case 'view-shifts':
                viewShifts()
                break
            case 'edit':
                editOrg()
                break
            case 'leave':
                leaveOrg(org)
                break
            default:
                return 
        }
    }

    return(
        <Container name='org-container'>
            <h2 id='org-name'>{org.name}</h2>
            <a type='view-shifts' onClick={e => handleClick(e, e.target.type)} href='/dashboard' id='org-action'>View Shifts</a>
            <a type='edit' onClick={e => handleClick(e, e.target.type)} href='/dashboard' id='org-action'>Edit</a>
            <a type='leave' onClick={e => handleClick(e, e.target.type)} href='/dashboard' id='org-action'>Leave</a>
        </Container>
    )
}

export default OrgItem;