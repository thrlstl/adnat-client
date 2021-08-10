import './App.css';
import { useState } from 'react';
import Login from './components/Login';
import Signup from './components/Signup';

function App() {

  const [toggle, setToggle] = useState(true)

  const renderLoginOrSignup = () => {
    return toggle
      ? <Login
        toggle={toggle}
        setToggle={setToggle} />
      : <Signup
        toggle={toggle}
        setToggle={setToggle} />
  }

  return (
    <div className="App">
      {renderLoginOrSignup()}
    </div>
  );
}

export default App;
