import useDashboard from "../useDashboard"
import Container from "../../Container"

function OrgItem(org) {

    const { selectOrg, joinOrg } = useDashboard()

    const handleClick = (e, type) => {
        selectOrg(org)
        e.preventDefault()
        switch(type) {
            case 'edit':
                break
            case 'join':
                joinOrg(org)
                break
            default:
                return 
        }
    }

    return(
        <Container name='org-container'>
            <Container name='org-name-container'>
                <h2 id='org-name'>{org.name}</h2>
            </Container>
            <a type='edit' onClick={e => handleClick(e, e.target.type)} href='/dashboard' id='org-action'>Edit</a>
            <a type='join' onClick={e => handleClick(e, e.target.type)} href='/dashboard' id='org-action'>Join</a>
        </Container>
    )
}

export default OrgItem;