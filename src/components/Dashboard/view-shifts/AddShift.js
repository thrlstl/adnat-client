import Container from "../../Container";
import useAddShift from "./useAddShift";

function AddShift() {

    const { handleChange, handleSubmit } = useAddShift()

    return(
        <Container name='form-container add-shift'>
            <form className='form add-shift'>
                <label>Start</label>
                    <input
                    onChange={handleChange}
                    name='start'
                    type='datetime-local'>
                    </input>
                <label>Finish</label>
                    <input
                    onChange={handleChange}
                    name='finish'
                    type='datetime-local'>
                    </input>
                <label>Break Length</label>
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