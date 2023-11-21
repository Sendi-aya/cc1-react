import './App.css';
import { Routes, Route } from 'react-router-dom';
import Form from "./home/hom";
import Form1 from './tps/tp1/com';
import Form2 from './tps/tp2/Imgslide';
import Form3 from './tps/tp3/list';
import Form4 from './tps/tp4/page';
import Navbar from './nav/navb';

function App() {
  return (
    <div id="app" className="App">
      <div className="contents">
    <Navbar />
    <Routes>
          <Route path="/home"  element={<Form/>} />
          <Route path="/tp1-react"  element={<Form1 /> } />          
          <Route path="/tp2-react"  element={<Form2 />} />
          <Route path="/tp3-react"  element={<Form3 />} />
          <Route path="/tp4-react"  element={<Form4 />} />
          <Route path="*"  element={<h1>404</h1>} />
    </Routes>
    </div>
    </div>
  );
}

export default App;
