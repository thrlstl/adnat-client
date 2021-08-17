import { Redirect, Route } from "react-router-dom";
import { useSelector } from "react-redux";

const ProtectedRoute = props => {
    const isAuthenticated = useSelector(state => state.isAuthenticated)

    return(
        !isAuthenticated
        ? <Redirect to='/auth' />
        : <Route {...props} />
    )
}

export default ProtectedRoute;