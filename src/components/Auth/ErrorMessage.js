function ErrorMessage(props) {
    const error = props.error
    return(
        <p className='error-message'>{error}</p>
    )
}

export default ErrorMessage;