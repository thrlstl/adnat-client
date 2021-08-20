import TableRow from "./TableRow";
import ShiftCells from "./ShiftCells";
import { useSelector } from "react-redux";

function ShiftRow({shift}) {
    
    const userID = useSelector(state => state.user.id)
    let isUserShift = ''

    if (shift.user.id === userID) {
        isUserShift = 'user-shift'
    }

    return(
        <TableRow name={`shift-row ${isUserShift}`}>
            <ShiftCells shift={shift} />
        </TableRow>
    )
}

export default ShiftRow;