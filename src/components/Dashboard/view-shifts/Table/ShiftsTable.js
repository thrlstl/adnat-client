function ShiftsTable(props) {
    const { children, name } = props
    return(
        <table className={name}>
            <tbody className={name}>
                {children}
            </tbody>
        </table>
    )
}

export default ShiftsTable;