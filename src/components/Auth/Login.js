import { useState } from 'react'

function Login(props) {

    const toggle = props.toggle
    const [formData, setFormData] = useState({
        username: '',
        password: '',
        error: null
    })

    const handleChange = e => {
        setFormData({...formData, [e.target.name]: e.target.value})
    }

    return (
        <>
            <form>
                <input
                    placeholder='Username'
                    name='username'
                    onChange={(e) => handleChange(e)}>
                </input><br />
                <input
                    placeholder='Password'
                    name='password'
                    onChange={(e) => handleChange(e)}>
                </input><br />
                <input
                    type="submit"
                    value="Login" />
            </form><br />
            <button onClick={() => props.setToggle(!toggle)}>Signup</button>
        </>
    )
}

export default Login;