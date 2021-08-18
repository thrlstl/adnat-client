import { useDispatch, useSelector } from 'react-redux'
import { logoutSuccess } from '../../Actions/auth'

function UserStatus() {

    const { name } = useSelector(state => state.user)
    const dispatch = useDispatch()

    const handleLogout = () => {
        localStorage.removeItem('token')
        dispatch(logoutSuccess())
    }

    return(
        <div>
            <p>Logged in as {name}</p>
            <a id='logout' onClick={handleLogout} href='/auth'>Logout</a>
        </div>
    )
}

export default UserStatus;