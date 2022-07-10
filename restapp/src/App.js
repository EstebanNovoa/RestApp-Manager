import './App.css';
import {Routes,Route, BrowserRouter as Router } from "react-router-dom";
import { Welcome } from './pages/Registry/Welcome';


export default function App() {
  return (
    <Router>
      <Routes>
        <Route path='/registry' element={<Welcome/>}></Route>
      </Routes>
    </Router>
  );
}

