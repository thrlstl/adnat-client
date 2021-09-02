import Container from "../../Container";
import useAddShift from "./useAddShift";
import ErrorMessage from "../../Auth/ErrorMessage";

function AddShift() {

    const { handleChange, handleSubmit, errors } = useAddShift()




    return(
        <Container name='form-container add-shift'>
            <form className='form add-shift'>
                <label>Start — Date | Time</label>
                { errors.start && <ErrorMessage error={errors.start} /> }
                    <input
                    onChange={handleChange}
                    name='start'
                    type='datetime-local'>
                    </input>
                <label>Finish — Date | Time</label>
                { errors.finish && <ErrorMessage error={errors.finish} /> }
                    <input
                    onChange={handleChange}
                    name='finish'
                    type='datetime-local'>
                    </input>
                <label>Break Length (In Minutes)</label>
                { errors.break_length && <ErrorMessage error={errors.break_length} /> }
                    <input
                    onChange={handleChange}
                    name='break_length'
                    type='number'
                    min='10'
                    max='60'
                    step='10'
                    placeholder='Minutes'>
                    </input>
                <input
                onClick={handleSubmit}
                type='submit'
                value='Add' />
            </form>
        </Container>
    )
}

export default AddShift;