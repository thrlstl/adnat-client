import { useDispatch } from "react-redux"
import { deselectOrg } from "../../Actions/dashboard"
import Container from "../Container"

function CloseButton() {

    const dispatch = useDispatch()

    const handleClick = e => {
        e.preventDefault()
        dispatch(deselectOrg())
    }

    return(
        <Container name='close-button-container'>
            <a onClick={e => handleClick(e, e.target.type)} href='/dashboard' id='org-action close'>Close</a>
        </Container>
    )
}

export default CloseButton;