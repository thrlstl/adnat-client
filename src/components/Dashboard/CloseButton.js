import { useDispatch } from "react-redux"
import { deselectOrg } from "../../Actions/dashboard"

function CloseButton() {

    const dispatch = useDispatch()

    const handleClick = e => {
        e.preventDefault()
        dispatch(deselectOrg())
    }

    return(
        <a onClick={e => handleClick(e, e.target.type)} href='/dashboard' id='org-action close'>Close</a>
    )
}

export default CloseButton;