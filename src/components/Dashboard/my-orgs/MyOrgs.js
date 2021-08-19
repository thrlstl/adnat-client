import OrgsList from "./OrgsList";
import Message from "./Message";
import Container from '../../Container'
import { useSelector } from "react-redux";

function MyOrgs() {

    const myOrgs = useSelector(state => state.myOrgs)

    return(
        <Container name='my-orgs-container'>
            { myOrgs.length > 0 ? <OrgsList /> : <Message /> }
        </Container>
    )
}

export default MyOrgs;