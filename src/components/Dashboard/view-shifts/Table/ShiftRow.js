import { useSelector } from "react-redux";
import { useEffect, useState } from "react";
import TableRow from "./TableRow";
import ShiftCells from "./ShiftCells";

function ShiftRow({shift}) {
    
    const userID = useSelector(state => state.user.id)
    const [isUserShift, setIsUserShift] = useState('')

    useEffect(() => {
        setIsUserShift(() => {
            return shift.user.id === userID
            ? 'user-shift'
            : ''
        })
    }, [shift.user.id, userID])

    return(
        <TableRow name={`shift-row ${isUserShift}`}>
            <ShiftCells shift={shift} />
        </TableRow>
    )
}

export default ShiftRow;