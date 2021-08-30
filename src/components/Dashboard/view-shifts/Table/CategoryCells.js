import TableCell from "./TableCell"

function CategoryCells() {

    const shiftCategories = [
        'Employee Name',
        'Shift Date',
        'Start Time',
        'Finish Time',
        'Break Length',
        'Hours Worked',
        'Shift Cost'
    ]

    return(
        shiftCategories.map(category => 
        <TableCell key={category} data={category} name='category-cell' />)
    )
}

export default CategoryCells