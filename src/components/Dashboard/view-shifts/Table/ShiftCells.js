import TableCell from "./TableCells";

function ShiftCells({shift}) {

    const shiftCells = [
        shift.user.name,
        shift.shift_date,
        shift.shift_start,
        shift.shift_finish,
        shift.break_length,
        shift.hours_worked,
        shift.shift_cost
    ]

    return(
        shiftCells.map(data => 
        <TableCell key={data} data={data} name='shift-cell' />)
    )
}

export default ShiftCells;