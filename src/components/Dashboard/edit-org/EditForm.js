import { useSelector } from "react-redux"
import Container from "../../Container";

function EditForm() {

    const [name, hourlyRate] = useSelector((state) => [
        state.selectedOrg.name,
        state.selectedOrg.hourly_rate
    ])

    return(
        <Container name='form-container'>
            <form className='form edit-org'>
                <label className='edit-label'>Name:</label>
                    <input
                    placeholder={name}>
                    </input>
                <label className='edit-label'>Hourly Rate:</label>
                    <input
                    placeholder={hourlyRate}>
                    </input>
            </form>
        </Container>
        
    )
}

export default EditForm;