import { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import useDashboard from "../useDashboard";
import useAPI from "../../Auth/API";

const useAddShift = () => {

    const { reloadOrg } = useDashboard()
    const API_URL = useAPI()
    const [orgID, userID] = useSelector((state) => [
        state.selectedOrg.id,
        state.user.id
    ])

    const [values, setValues] = useState({})
    const [errors, setErrors] = useState({})

    useEffect(() => {
        setValues({
            start: null,
            finish: null,
            break_length: null,
            user_id: userID,
            organization_id: orgID
        })
    }, [orgID, userID])


    const handleChange = e => {
        const { name, value } = e.target
        setValues({
            ...values,
            [name]: value
        })
    }

    const handleSubmit = e => {
        e.preventDefault()
        const form = e.target.parentElement
        const reqObj = {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(values)
        }
        fetch(`${API_URL}shifts`, reqObj)
        .then(resp => resp.json())
        .then(({shift, errors}) => {
            if (errors) {
                setErrors(errors)
            } else {
                reloadOrg()
                form.reset()
                setErrors({})
                setValues({})
            }
        })
    }

    return { handleChange, handleSubmit, errors }
}

export default useAddShift;