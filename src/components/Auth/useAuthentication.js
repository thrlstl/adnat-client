import { useDispatch } from 'react-redux'
import { loginSuccess, updateAuthentication } from '../../Actions/auth'
import useAPI from '../Auth/API'

const useAuthentication = () => {

    const dispatch = useDispatch()
    const API_URL = useAPI()

    const authenticateUser = JWT_TOKEN => {
        fetch(`${API_URL}auto_login`, {
            method: 'GET',
            headers: {
                'Authorization': `Bearer ${JWT_TOKEN}`
            }
        })
        .then(resp => resp.json())
        .then(result => {
            if (result.error) {
                window.alert(result.error)
            } else {
                dispatch(loginSuccess(result))
                dispatch(updateAuthentication(true))
            }
        })
    }

    return authenticateUser
}

export default useAuthentication;