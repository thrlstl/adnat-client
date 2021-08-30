function TableRow({children, name}) {
    return(
        <tr className={name}>
            {children}
        </tr>
    )
}

export default TableRow;