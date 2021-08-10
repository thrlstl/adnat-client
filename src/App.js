import './App.css';
import Auth from './components/Auth/Auth'
import Header from './components/Header'
import HomeStack from './components/HomeStack';

function App() {
  return (
    <div className="App">
      <Header />
      <Auth />
      <HomeStack />
    </div>
  );
}

export default App;
