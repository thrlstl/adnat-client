import Container from "../../Container";

function ShiftsHeader({selectedOrg}){
    return(
        <Container name='shift-header-container'>
            <h3 className='shifts-header'>Shifts —— {selectedOrg}</h3>
        </Container>
    )
}

export default ShiftsHeader;