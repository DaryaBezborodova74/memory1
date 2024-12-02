import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { Header } from "./components/header/Header";
import { Grid } from './components/grid/Grid';
import { Footer } from './components/footer/Footer';
import { GamePage } from './pages/gamePage/GamePage';
import { FirstPage } from './pages/firstPage/FirstPage';

function App() {
  return (
    <div className="App">
       
    <BrowserRouter>
      <Routes>
      <Route path="/" element={<FirstPage/>} />
      <Route path="/game" element={<GamePage/>} />
      </Routes>
   </BrowserRouter>

     </div>
  );
  }


export default App;
