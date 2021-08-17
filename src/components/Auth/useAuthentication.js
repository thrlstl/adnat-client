import { useDispatch } from 'react-redux'
import { loginSuccess, updateAuthentication } from '../../Actions/auth'
import API from '../Auth/API'
const API_URL = API()

const useAuthentication = () => {

    const dispatch = useDispatch()

    const authenticateUser = JWT_TOKEN => {
        fetch(`${API_URL}auto_login`, {
            method: 'GET',
            headers: {
                'Authorization': `Bearer ${JWT_TOKEN}`
            }
        })
        .then(resp => resp.json())
        .then(({ user, error }) => {
            if (error) {
                window.alert(error)
            } else {
                dispatch(loginSuccess(user))
                dispatch(updateAuthentication(true))
            }
        })
    }

    return authenticateUser
}

export default useAuthentication;