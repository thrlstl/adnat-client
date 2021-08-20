import { useDispatch } from "react-redux"
import { deselectOrg } from "../../../Actions/dashboard"

function ShiftsHeader({selectedOrg}){

    const dispatch = useDispatch()

    const handleClick = e => {
        e.preventDefault()
        dispatch(deselectOrg())
    }

    return(
        <>
            <h3>Shifts for {selectedOrg}</h3>
            <a onClick={e => handleClick(e, e.target.type)} href='/dashboard' id='org-action close'>Close</a>
        </>
    )
}

export default ShiftsHeader;