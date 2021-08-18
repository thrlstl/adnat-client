import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux'
import { loadAllOrgs } from '../../Actions/dashboard';

import API from '../Auth/API'
const API_URL = API()

function Organizations() {

    const dispatch = useDispatch()
    const allOrgs = useSelector(state => state.allOrgs)

    useEffect(() => {
        fetch(`${API_URL}organizations`)
        .then(resp => resp.json())
        .then(orgs => {
            dispatch(loadAllOrgs(orgs))
        })
    }, [dispatch])

    function OrgItem({name}) {
        return(
            <>
            <h2 id='org-name'>{name}</h2>
                <a href='/dashboard' id='org-action'>Edit</a>
                <a href='/dashboard' id='org-action'>Join</a>
            </>
        )
    }

    const renderAllOrgs = () => {
        return allOrgs.map(org => <OrgItem key={org.id} name={org.name} />)
    }

    return(
        <div>
            <p>
            You aren't a member of any organizations.<br></br>
            Join an existing one or create a new one.
            </p>
            <h1>Organizations</h1>
            {renderAllOrgs()}
        </div>
    )
}

export default Organizations;