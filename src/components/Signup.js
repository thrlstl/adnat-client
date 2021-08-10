function Signup(props) {

    const toggle = props.toggle

    return (
        <button onClick={() => props.setToggle(!toggle)}>Login</button>
    )
}

export default Signup;