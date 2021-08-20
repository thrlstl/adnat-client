import ShiftRow from "./ShiftRow";

function ShiftRows(props) {
    const { shifts } = props
    return(
        shifts.map(shift => <ShiftRow key={shift.id} shift={shift} />)
    )
}

export default ShiftRows;