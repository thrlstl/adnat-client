import Container from "../../Container";
import CreateForm from "./CreateForm";
import Header from "./Header";

function CreateOrg() {
    return(
        <Container name='create-org-container'>
            <Header />
            <CreateForm />
        </Container>
    )
}

export default CreateOrg;