import useDashboard from "../useDashboard"
import Container from "../../Container"

function OrgItem(org) {

    const { joinOrg, editOrg } = useDashboard()

    const handleClick = (e, type) => {
        e.preventDefault()
        switch(type) {
            case 'edit':
                editOrg(org)
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
            <Container name='org-contents-container'>
                <Container name='org-name-container'>
                    <h2 id='org-name'>{org.name}</h2>
                </Container>
                <Container name='org-actions-container'>
                    <a type='edit' onClick={e => handleClick(e, e.target.type)} href='/dashboard' id='org-action'>Edit</a>
                    <a type='join' onClick={e => handleClick(e, e.target.type)} href='/dashboard' id='org-action'>Join</a>
                </Container>
            </Container>
        </Container>
    )
}

export default OrgItem;