import { useEffect, useState } from "react";
import validateSignup from "./validateSignup";
import API from './API'
const API_URL = API()

const useSignup = () => {

    const [isSubmitting, setIsSubmitting] = useState(false)
    const [errors, setErrors] = useState({})
    const [values, setValues] = useState({
        name: '',
        email_address: '',
        password: '',
        passwordConfirmation: '',
    })
    
    const handleChange = e => {
        const { name, value } = e.target
        setValues({
            ...values, 
            [name]: value})
    }

    const handleSubmit = e => {
        e.preventDefault()
        setErrors(validateSignup(values))
        setIsSubmitting(true)
    }

    useEffect(() => {
        function createUser() {
            const reqObj = {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(values)
            }
                fetch(`${API_URL}users`, reqObj)
                .then(resp => resp.json())
                .then(result => {
                    result.error
                    ? setErrors(result.error)
                    : console.log(result)
                })
        }

        if (Object.keys(errors).length === 0 && isSubmitting) {
            createUser();
          }

    }, [errors, isSubmitting, values])

    return { values, errors, handleChange, handleSubmit }
}

export default useSignup;