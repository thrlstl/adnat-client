import { useSelector } from "react-redux";
import Container from "../../Container";

function Header() {
    const name = useSelector(state => state.selectedOrg.name)
    return(
        <Container name='edit-org-header-container'>
            <h3 className='edit-org-header'>Edit —— {name}</h3>
        </Container>

    )
}

export default Header;