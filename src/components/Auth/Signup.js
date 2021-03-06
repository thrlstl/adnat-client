import useSignup from './useSignup';
import ErrorMessage from './ErrorMessage';
import Container from '../Container';

function Signup({ toggle, setToggle }) {

    const { errors, handleChange, handleSubmit } = useSignup()

    return (
        <div className='form-container auth'>
            <form className='form' onSubmit={handleSubmit}>
                { errors.length && <ErrorMessage error={errors} /> }
                    <input
                    placeholder='Name' 
                    name='name' 
                    onChange={handleChange}/>
                { errors.name && <ErrorMessage error={errors.name} /> }
                    <input 
                    placeholder='Email Address' 
                    name='email_address'
                    onChange={handleChange}/>
                { errors.email_address && <ErrorMessage error={errors.email_address} /> }
                    <input
                    type='password' 
                    placeholder='Password' 
                    name='password'
                    onChange={handleChange}/>
                { errors.password && <ErrorMessage error={errors.password} /> }
                    <input
                    type='password' 
                    placeholder='Password Confirmation' 
                    name='passwordConfirmation'
                    onChange={handleChange}/>
                { errors.passwordConfirmation && <ErrorMessage error={errors.passwordConfirmation} /> }
                    <input 
                    type="submit" 
                    value="Signup"/>
            </form>
                <Container name='auth-toggle-container'>
                    <button className='auth-toggle' onClick={() => setToggle(!toggle)}>Login</button>
                </Container>
        </div>
    )
}

export default Signup;