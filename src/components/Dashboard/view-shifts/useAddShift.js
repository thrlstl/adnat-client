import { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import useAPI from "../../Auth/API";

const useAddShift = () => {

    const API_URL = useAPI()
    const [orgID, userID] = useSelector((state) => [
        state.selectedOrg.id,
        state.user.id
    ])

    const [values, setValues] = useState({})

    useEffect(() => {
        setValues({
            start: '',
            finish: '',
            break_length: null,
            user_id: userID,
            organization_id: orgID
        })
    }, [orgID, userID])


    // const reloadOrg = () => {
    //     fetch(`${API_URL}/organizations/${orgID}`)
    //     .then(resp => resp.json())
    //     .then(org => {
    //         debugger
    //     })
    // }

    const handleChange = e => {
        const { name, value } = e.target
        setValues({
            ...values,
            [name]: value
        })
    }

    const handleSubmit = e => {
        e.preventDefault()
        // const form = e.target.parentElement
        const reqObj = {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(values)
        }
        fetch(`${API_URL}shifts`, reqObj)
        .then(resp => resp.json())
        .then(result => {
            debugger
        })
    }

    return { handleChange, handleSubmit }
}

export default useAddShift;