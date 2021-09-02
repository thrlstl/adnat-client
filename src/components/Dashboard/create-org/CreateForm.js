import Container from "../../Container";
import useCreate from "./useCreate";
import ErrorMessage from "../../Auth/ErrorMessage";

function CreateForm() {

    const { handleChange, handleSubmit, errors } = useCreate()

    return(
        <Container name='form-container create-org'>
            <form className='form create-org'>
                <label className='create-label'>Name:</label>
                { errors.name && <ErrorMessage error={errors.name} />}
                    <input
                    onChange={handleChange}
                    name='name'
                    placeholder='Organization Name'>
                    </input>
                <label className='create-label'>Hourly Rate:</label>
                { errors.hourly_rate && <ErrorMessage error={errors.hourly_rate} />}
                    <input
                    type='number'
                    onChange={handleChange}
                    name='hourly_rate'
                    placeholder='Hourly Rate'>
                    </input>
                    <input
                    onClick={handleSubmit}
                    type='submit'
                    value='Create' />
            </form>
        </Container>
    )
}

export default CreateForm;