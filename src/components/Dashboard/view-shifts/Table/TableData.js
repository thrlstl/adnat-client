function TableData({children, name}) {
    return(
        <table className={name}>
            <tbody className={name}>
                {children}
            </tbody>
        </table>
    )
}

export default TableData;