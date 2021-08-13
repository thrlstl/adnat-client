import useLogin from './useLogin';
import ErrorMessage from './ErrorMessage';

function Login({ toggle, setToggle }) {

    const { error, handleChange, handleSubmit } = useLogin()

    return (
        <>
        { error.length > 0 && <ErrorMessage error={error} /> }
            <form onSubmit={handleSubmit}>
                <input
                    placeholder='Email Address'
                    name='email_address'
                    onChange={handleChange}>
                </input><br />
                <input
                    type='password' 
                    placeholder='Password'
                    name='password'
                    onChange={handleChange}>
                </input><br />
                <input
                    type='submit'
                    value='Login' />
            </form><br />
            <button onClick={() => setToggle(!toggle)}>Signup</button>
        </>
    )
}

export default Login;