import { useSelector } from 'react-redux';
import { Redirect } from 'react-router';
import LoginOrSignup from './LoginOrSignup';

function Auth() {

    const isAuthenticated = useSelector(state => state.isAuthenticated)
    
    return (
        isAuthenticated
        ? <Redirect to='dashboard' />
        : <LoginOrSignup />
    )
}

export default Auth;