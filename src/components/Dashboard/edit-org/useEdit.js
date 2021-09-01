import { useEffect, useState } from "react"
import { useSelector } from "react-redux"
import useAPI from '../../Auth/API'
import useDashboard from "../useDashboard"

const useEdit = () => {

    const API_URL = useAPI()
    const { selectOrg } = useDashboard()
    const selectedOrg = useSelector(state => state.selectedOrg)

    const [values, setValues] = useState({})

    useEffect(() => {
        setValues({
            id: selectedOrg.id,
            name: selectedOrg.name,
            hourly_rate: selectedOrg.hourly_rate  
        })
    }, [selectedOrg])

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
            method: 'PATCH',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(values)
        }
        fetch(`${API_URL}organizations/${selectedOrg.id}`, reqObj)
        .then(resp => resp.json())
        .then(organization => {
            selectOrg(organization)
            form.reset()
        })
    }

    return { handleChange, handleSubmit }
}

export default useEdit;