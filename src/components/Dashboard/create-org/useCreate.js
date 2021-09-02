import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import useAPI from "../../Auth/API";
import useDashboard from "../useDashboard";

const useCreate = () => {

    const API_URL = useAPI()
    const { fetchDashboardData } = useDashboard()
    const userID = useSelector(state => state.user.id)
    const [errors, setErrors] = useState({})
    const [values, setValues] = useState({})

    useEffect(() => {
        setValues({
            name: '',
            hourly_rate: null,
            user_id: userID
        })
        setErrors({})
    }, [userID])

    const handleChange = e => {
        const { name, value, valueAsNumber } = e.target
        setValues({
            ...values,
            [name]: valueAsNumber || value
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
        fetch(`${API_URL}organizations`, reqObj)
        .then(resp => resp.json())
        .then(({success, errors}) => {
            if (errors) {
                setErrors(errors)
            } else {
                fetchDashboardData()
                form.reset()
                setErrors({})
                setValues({})
                window.scrollTo(0, 0)
            }
        })
    }


    return { handleChange, handleSubmit, errors }
}

export default useCreate;