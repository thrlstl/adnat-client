function TableRow(props) {
    const { children, name } = props
    return(
        <tr className={name}>
            {children}
        </tr>
    )
}

export default TableRow;