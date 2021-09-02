import { useState } from 'react'
import Login from './Login';
import Signup from './Signup';

function LoginOrSignup() {
    const [toggle, setToggle] = useState(true)
    return(
        toggle
        ? <Login toggle={toggle} setToggle={setToggle} />
        : <Signup toggle={toggle} setToggle={setToggle} /> 
    )
}

export default LoginOrSignup;