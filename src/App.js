import './App.css';
import { useEffect } from 'react';
import { Route, Redirect, Switch } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { loginSuccess, updateAuthentication } from '../src/Actions/auth'
import Auth from './components/Auth/Auth'
import Dashboard from './components/Dashboard';
import Header from './components/Header'

import API from '../src/components/Auth/API'
const API_URL = API()

function App() {
  
  const dispatch = useDispatch()
  const isAuthenticated = useSelector(state => state.isAuthenticated)

  useEffect(() => {
    let JWT_TOKEN = localStorage.getItem('token')
    function authenticateUser() {
      fetch(`${API_URL}auto_login`, {
        method: 'GET',
        headers: {
          'Authorization': `Bearer ${JWT_TOKEN}`
        }
      })
      .then(resp => resp.json())
      .then(result => {
        if (result.error) {
          console.log(result.error)
        } else {
          dispatch(loginSuccess(result))
          dispatch(updateAuthentication(true))
        }
      })
    }
    if (JWT_TOKEN) {
      authenticateUser()
    }
  }, [dispatch])

  return (
    <div className="App">
      <Header />
          { !isAuthenticated && <Redirect to="/auth" /> }
          { isAuthenticated && <Redirect to="/dashboard" /> }
          <Switch>
          <Route exact path='/auth' component={Auth} />
          <Route exact path='/dashboard' component={Dashboard} />
            <Route exact path="/">
                <Redirect to="/dashboard" />
            </Route>
          </Switch>
    </div>
  );
}

export default App;
