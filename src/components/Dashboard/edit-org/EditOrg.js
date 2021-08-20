import { useSelector } from "react-redux";
import { Redirect } from "react-router-dom";
import Container from "../../Container";
import CloseButton from "../CloseButton";
import EditForm from "./EditForm";
import Header from './Header'

function EditOrg() {

    const selectedOrg = useSelector(state => state.selectedOrg)

    return(
        selectedOrg.id ?
        <Container name='edit-org-container'>
            <Header />
                <EditForm />
            <CloseButton />
        </Container>
        : <Redirect to='/dashboard' />
    )
}

export default EditOrg;