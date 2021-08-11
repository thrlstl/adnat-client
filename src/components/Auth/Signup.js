import { useState, useEffect } from 'react'

function Signup(props) {

    const toggle = props.toggle
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        password: '',
        passwordConfirmation: '',
        error: null
    })

    const handleChange = e => {
        setFormData({...formData, [e.target.name]: e.target.value})
    }

    const renderErrorMessage = () => {
        return formData.error
        ? <p>{formData.error}</p>
        : null
    }

    const handleSubmit = e => {
        e.preventDefault()
        if (formData.password !== formData.passwordConfirmation) {
            setFormData({...formData, error: 'Passwords do not match.'})
        }
        console.log(formData)
    }

    return (
        <>
            {renderErrorMessage()}
            <form onSubmit={handleSubmit}>
                <input 
                    placeholder='Name' 
                    name='name' 
                    onChange={handleChange}>
                </input><br />
                <input 
                    type='email'
                    placeholder='Email' 
                    name='email'
                    onChange={handleChange}>
                </input><br />
                <input
                    type='password' 
                    placeholder='Password' 
                    name='password'
                    onChange={handleChange}>
                </input><br />
                <input
                    type='password' 
                    placeholder='Password Confirmation' 
                    name='passwordConfirmation'
                    onChange={handleChange}>
                </input><br />
                <input 
                    type="submit" 
                    value="Signup"/>
            </form><br />
            <button onClick={() => props.setToggle(!toggle)}>Login</button>
        </>
    )
}

export default Signup;