import useLogin from './useLogin';
import ErrorMessage from './ErrorMessage';

function Login({ toggle, setToggle }) {

    const { error, handleChange, handleSubmit } = useLogin()

    return (
        <div className='form-container'>
        { error.length > 0 && <ErrorMessage error={error} /> }
            <form className='form' onSubmit={handleSubmit}>
                <input
                    placeholder='Email Address'
                    name='email_address'
                    onChange={handleChange}>
                </input>
                <input
                    type='password' 
                    placeholder='Password'
                    name='password'
                    onChange={handleChange}>
                </input>
                <input
                    type='submit'
                    value='Login' />
            </form>
            <button className='auth-toggle' onClick={() => setToggle(!toggle)}>Signup</button>
        </div>
    )
}

export default Login;