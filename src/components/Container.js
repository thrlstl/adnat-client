function Container(props) {
    const className = props.name
    return(
        <div className={className}>
            {props.children}
        </div>
    )
}

export default Container;