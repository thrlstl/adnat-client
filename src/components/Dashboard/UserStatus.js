import { useSelector } from 'react-redux'
import { default as UserStatusContainer } from '../Container'
import useLogin from '../Auth/useLogin'

function UserStatus() {

    const { name } = useSelector(state => state.user)
    const { handleLogout } = useLogin()

    return(
        <UserStatusContainer name='user-status-container'>
            <p>Logged in as {name}</p>
            <a id='logout' onClick={handleLogout} href='/auth'>Logout</a>
        </UserStatusContainer>
    )
}

export default UserStatus;