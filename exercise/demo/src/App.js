import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.css';
import Home from './Pages/Home';
import Info from './Pages/Info';
import { Route, Routes, Navigate } from "react-router-dom";

function App() {
  return (
    <> 
      <Routes>
        <Route path="/" exact element={<Home />} />
        <Route path="/info/:id" element={<Info />} />
      </Routes>
    </>
  );
}

export default App;
