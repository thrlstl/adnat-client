import { useState } from 'react'
import { useDispatch } from 'react-redux'
import { loginSuccess } from '../../Actions/auth'

import API from './API'
const API_URL = API()

const useLogin = () => {

    const dispatch = useDispatch()
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
        fetch(`${API_URL}auth`, reqObj)
        .then(resp => resp.json())
        .then(result => {
            result.error
            ? setError(result.error)
            : dispatch(loginSuccess(result))
        })
    }

    return { error, handleChange, handleSubmit}
}

export default useLogin;