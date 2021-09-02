import { useSelector } from "react-redux";
import { Redirect } from "react-router-dom";
import Container from "../../Container";
import ShiftsHeader from "./ShiftsHeader";
import CloseButton from "../CloseButton";
import AddShift from "./AddShift";
import AddShiftHeader from "./AddShiftHeader";
import ShiftsTable from "./Table/ShiftsTable";
import NoShiftsMessage from "./Table/NoShiftsMessage";

function ViewShifts() {

    const [selectedOrg, shifts] = useSelector(state => [
        state.selectedOrg,
        state.selectedOrg.shifts
    ])

    return(
        selectedOrg.id ?
        <Container name='view-shifts-container'>
            <ShiftsHeader selectedOrg={selectedOrg.name} />
                { shifts.length ? <ShiftsTable /> : <NoShiftsMessage />}
                <AddShiftHeader />
                    <AddShift />
            <CloseButton />
        </Container>
        : <Redirect to='/dashboard' />
    )
}

export default ViewShifts;