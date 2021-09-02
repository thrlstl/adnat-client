import Container from "../../Container";
import ShiftsHeader from "./ShiftsHeader";
import ShiftsTable from "./Table/ShiftsTable";
import ShiftColumns from "./Table/ShiftColumns";
import ShiftRows from "./Table/ShiftRows";
import { useSelector } from "react-redux";
import { Redirect } from "react-router-dom";
import CloseButton from "../CloseButton";
import AddShift from "./AddShift";
import AddShiftHeader from "./AddShiftHeader";

function ViewShifts() {

    const [selectedOrg, shifts] = useSelector(state => [
        state.selectedOrg,
        state.selectedOrg.shifts
    ])

    return(
        selectedOrg.id ?
        <Container name='view-shifts-container'>
            <ShiftsHeader selectedOrg={selectedOrg.name} />
                <Container name='shifts-table-container'>
                    <ShiftsTable name='shifts-table'>
                        <ShiftColumns />
                        <ShiftRows shifts={shifts} />
                    </ShiftsTable>
                </Container>
                <AddShiftHeader />
                    <AddShift />
            <CloseButton />
        </Container>
        : <Redirect to='/dashboard' />
    )
}

export default ViewShifts;