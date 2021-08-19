import useDashboard from '../useDashboard'

function OrgItem(org) {

    const { leaveOrg, selectOrg } = useDashboard()

    const handleClick = (e, type) => {
        e.preventDefault()
        switch(type) {
            case 'view-shifts':
                console.log('view-shifts')
                break
            case 'edit':
                console.log('edit')
                break
            case 'leave':
                leaveOrg(org)
                selectOrg(org)
                break
            default:
                return 
        }
    }

    return(
        <>
        <h2 id='org-name'>{org.name}</h2>
            <a type='view-shifts' onClick={e => handleClick(e, e.target.type)} href='/dashboard' id='org-action'>View Shifts</a>
            <a type='edit' onClick={e => handleClick(e, e.target.type)} href='/dashboard' id='org-action'>Edit</a>
            <a type='leave' onClick={e => handleClick(e, e.target.type)} href='/dashboard' id='org-action'>Leave</a>
        </>
    )
}

export default OrgItem;