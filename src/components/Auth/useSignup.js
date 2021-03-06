import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { signupSuccess, updateAuthentication } from "../../Actions/auth";
import useAPI from "./API";
import validateSignup from "./validateSignup";

const useSignup = () => {
    
    const dispatch = useDispatch()
    const API_URL = useAPI()

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
            .then(({ user, token, error }) => {
                if (token) {
                    localStorage.setItem('token', token)
                    dispatch(signupSuccess(user))
                    dispatch(updateAuthentication(true))
                } else if (error) {
                    setErrors(error)
                }
            })
        }

        if (Object.keys(errors).length === 0 && isSubmitting) {
            createUser();
        }
    })

    return { errors, handleChange, handleSubmit }
}

export default useSignup;