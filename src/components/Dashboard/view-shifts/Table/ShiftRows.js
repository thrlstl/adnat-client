import ShiftRow from "./ShiftRow";

function ShiftRows({shifts}) {
    return(
        shifts.map(shift => 
        <ShiftRow key={shift.id} shift={shift} /> )
    )
}

export default ShiftRows;