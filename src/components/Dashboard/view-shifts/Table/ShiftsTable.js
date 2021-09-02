import { useSelector } from "react-redux";
import Container from "../../../Container";
import TableData from "./TableData";
import ShiftColumns from './ShiftColumns'
import ShiftRows from './ShiftRows'

function ShiftsTable() {

    const shifts = useSelector(state => state.selectedOrg.shifts)

    return(
        <Container name='shifts-table-container'>
            <TableData name='shifts-table'>
                <ShiftColumns />
                <ShiftRows shifts={shifts} />
            </TableData>
        </Container>
    )
}

export default ShiftsTable;