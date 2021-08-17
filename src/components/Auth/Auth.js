import { useState } from 'react';
import { useSelector } from 'react-redux';
import { Redirect } from 'react-router';
import Login from './Login';
import Signup from './Signup';

function Auth() {

    const isAuthenticated = useSelector(state => state.isAuthenticated)
    
    function LoginOrSignup() {
        const [toggle, setToggle] = useState(true)
        return(
            toggle
            ? <Login toggle={toggle} setToggle={setToggle} />
            : <Signup toggle={toggle} setToggle={setToggle} /> 
        )
    }

    return (
        isAuthenticated
        ? <Redirect to='dashboard' />
        : <LoginOrSignup />
    )
}

export default Auth;