import { useSelector } from "react-redux";

function Header() {

    const name = useSelector(state => state.selectedOrg.name)

    return(
        <h3 className='edit-org-header'>Edit —— {name}</h3>
    )
}

export default Header;