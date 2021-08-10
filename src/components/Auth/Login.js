function Login(props) {

    const toggle = props.toggle

    return (
        <button onClick={() => props.setToggle(!toggle)}>Signup</button>
    )
}

export default Login;