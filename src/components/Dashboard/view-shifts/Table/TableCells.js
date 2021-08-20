function TableCell(props) {
    const { name, data } = props
    return(
        <td className={name}>{data}</td>
    )
}

export default TableCell;