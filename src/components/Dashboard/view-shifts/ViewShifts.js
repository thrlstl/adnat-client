import Container from "../../Container";
import ShiftsHeader from "./ShiftsHeader";
import ShiftsTable from "./Table/ShiftsTable";
import ShiftColumns from "./Table/ShiftColumns";
import ShiftRows from "./Table/ShiftRows";
import { useSelector } from "react-redux";

function ViewShifts() {

    const [selectedOrg, shifts] = useSelector(state => [
        state.selectedOrg,
        state.selectedOrg.shifts
    ])

    return(
        <Container name='view-shifts-container'>
            <ShiftsHeader selectedOrg={selectedOrg.name} />
                <ShiftsTable name='shift-table-container'>
                    <ShiftColumns />
                    <ShiftRows shifts={shifts} />
                </ShiftsTable>
        </Container>
    )
}

export default ViewShifts;