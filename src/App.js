import logo from './logo.svg';
import './App.css';
import Addmovie from './components/Addmovie';
import Viewallmovie from './components/Viewallmovie';

function App() {
  return (
    <div className="App">
      <Addmovie/>
      <Viewallmovie/>
    </div>
  );
}

export default App;
