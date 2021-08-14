// import { useEffect } from 'react';
import './App.css';
import Auth from './components/Auth/Auth'
import Header from './components/Header'
import HomeStack from './components/HomeStack';

// import API from '../src/components/Auth/API'
// const API_URL = API()

function App() {

  // useEffect(() => {
  //   let token = localStorage.getItem('token')
  //   if (token) {
  //     fetch(`${API_URL}auth`, {
  //       method: 'POST',
  //       headers: {
  //         'Authorization': `Bearer ${token}`
  //       }
  //     })
  //     .then(resp => resp.json())
  //     .then(result => {
  //       console.log(result)
  //     })
  //   }
  // }, [])

  return (
    <div className="App">
      <Header />
      <Auth />
      <HomeStack />
    </div>
  );
}

export default App;
