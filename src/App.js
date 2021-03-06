import './App.css';
import { useEffect } from 'react';
import { Route, Redirect, Switch } from 'react-router-dom'
import { useSelector } from 'react-redux'
import Auth from './components/Auth/Auth'
import Dashboard from './components/Dashboard/Dashboard';
import Header from './components/Header'
import ProtectedRoute from './components/Auth/ProtectedRoute';
import useAuthentication from './components/Auth/useAuthentication';
import Container from './components/Container';

function App() {
  
  const isAuthenticated = useSelector(state => state.isAuthenticated)
  const authenticateUser = useAuthentication()

  useEffect(() => {
    let JWT_TOKEN = localStorage.getItem('token')
    if (!isAuthenticated && JWT_TOKEN) {
      authenticateUser(JWT_TOKEN)
    }
  })

  return (
    <Container name='App'>
      <Header />
          <Switch>
          <Route exact path='/auth' component={Auth} />
          <ProtectedRoute path='/dashboard' component={Dashboard} />
            <Route exact path="/">
                <Redirect to="/dashboard" />
            </Route>
          </Switch>
    </Container>
  );
}

export default App;
