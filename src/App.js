
import './App.css';
import Chatbot from './Components/Chatbot/Chatbot';
import Home from './Components/Home/Home';
import Navigation from './Components/Navigation/Navigation';

function App() {
  return (
    <div className="App">
      <Navigation/>
      <Home/>
      <Chatbot/>
    </div>
  );
}

export default App;
