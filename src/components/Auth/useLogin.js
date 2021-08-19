import { useState } from 'react'
import { useDispatch } from 'react-redux'
import { loginSuccess, updateAuthentication, logoutSuccess } from '../../Actions/auth'
import useAPI from './API'

const useLogin = () => {

    const dispatch = useDispatch()
    const API_URL = useAPI()
    
    const [error, setError] = useState('')
    const [values, setValues] = useState({
        email_address: '',
        password: ''
    })

    const handleChange = e => {
        const { name, value } = e.target
        setValues({
            ...values, 
            [name]: value})
    }

    const handleSubmit = e => {
        e.preventDefault()
        const reqObj = {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(values)
        }
        fetch(`${API_URL}login`, reqObj)
        .then(resp => resp.json())
        .then(({ user, token, error }) => {
            if (token) {
                localStorage.setItem('token', token)
                dispatch(loginSuccess(user))
                dispatch(updateAuthentication(true))
            } else if (error) {
                setError(error)
            }
        })
    }

    const handleLogout = () => {
        localStorage.removeItem('token')
        dispatch(logoutSuccess())
    }

    return { error, handleChange, handleSubmit, handleLogout }
}

export default useLogin;