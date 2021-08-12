import useSignup from './useSignup';
import ErrorMessage from './ErrorMessage';

function Signup(props) {

    const { errors, handleChange, handleSubmit } = useSignup()
    const toggle = props.toggle

    return (
        <>
        <div>
            <form onSubmit={handleSubmit}>
                    { errors.length && <ErrorMessage error={errors} /> }
                <div>
                <input
                    placeholder='Name' 
                    name='name' 
                    onChange={handleChange}/>
                </div>
                    { errors.name && <ErrorMessage error={errors.name} /> }
                <div>
                <input 
                    placeholder='Email Address' 
                    name='email_address'
                    onChange={handleChange}/>
                </div>
                    { errors.email_address && <ErrorMessage error={errors.email_address} /> }
                <div>
                <input
                    type='password' 
                    placeholder='Password' 
                    name='password'
                    onChange={handleChange}/>
                </div>
                    { errors.password && <ErrorMessage error={errors.password} /> }
                <div>
                <input
                    type='password' 
                    placeholder='Password Confirmation' 
                    name='passwordConfirmation'
                    onChange={handleChange}/>
                </div>
                    { errors.passwordConfirmation && <ErrorMessage error={errors.passwordConfirmation} /> }
                <input 
                    type="submit" 
                    value="Signup"/>
            </form>
        </div><br />
            <button onClick={() => props.setToggle(!toggle)}>Login</button>
        </>
    )
}

export default Signup;