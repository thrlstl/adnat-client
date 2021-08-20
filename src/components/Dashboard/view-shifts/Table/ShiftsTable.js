function ShiftsTable(props) {
    const { children, name } = props
    return(
        <table className={name}>
            <tbody>
                {children}
            </tbody>
        </table>
    )
}

export default ShiftsTable;