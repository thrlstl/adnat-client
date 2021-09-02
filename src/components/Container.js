function Container({name, children}) {
    return(
        <div className={name}>
            {children}
        </div>
    )
}

export default Container;