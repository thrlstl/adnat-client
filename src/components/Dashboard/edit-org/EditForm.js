import { useSelector } from "react-redux"
import Container from "../../Container";
import useEdit from "./useEdit";

function EditForm() {

    const { handleChange, handleSubmit } = useEdit()
    const [name, hourlyRate] = useSelector((state) => [
        state.selectedOrg.name,
        `$${state.selectedOrg.hourly_rate.toFixed(2)}`,
    ])

    return(
        <Container name='form-container edit'>
            <form className='form edit-org'>
                <label className='edit-label'>Name: {name}</label>
                    <input
                    onChange={handleChange}
                    name='name'
                    placeholder={name}>
                    </input>
                <label className='edit-label'>Hourly Rate: {hourlyRate}</label>
                    <input
                    type='number'
                    onChange={handleChange}
                    name='hourly_rate'
                    placeholder={hourlyRate}>
                    </input>
                    <input
                    onClick={handleSubmit}
                    type='submit'
                    value='Update' />
            </form>
        </Container>
        
    )
}

export default EditForm;