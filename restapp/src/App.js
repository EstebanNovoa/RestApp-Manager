import './App.css';
import {Routes,Route, BrowserRouter as Router } from "react-router-dom";
import { Welcome } from './pages/Registry/Welcome';
import { SignIn } from './pages/Registry/SignIn';


export default function App() {
  return (
    <Router>
      <Routes>
        <Route path='/registry' element={<Welcome/>}></Route>
        <Route path='/signin' element={<SignIn/>}></Route>        
      </Routes>
    </Router>
  );
}

