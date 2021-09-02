import Container from "../../../Container";

function NoShiftsMessage() {
    return(
        <Container name='message-container'>
            <p>
                Sorry, there are no shifts for this organization. <br></br>
                Please add one or check back later.
            </p>
        </Container>
    )
}

export default NoShiftsMessage;