import logo from './logo.svg';
import './App.css';
import Addmovie from './components/Addmovie';
import Viewallmovie from './components/Viewallmovie';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<Addmovie/>}/>
      <Route path='/view' element={<Viewallmovie/>}/>
      
    </Routes>
    </BrowserRouter>
  );
}

export default App;
