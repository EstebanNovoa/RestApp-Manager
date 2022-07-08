import './App.css';
import {Routes,Route, BrowserRouter as Router } from "react-router-dom";


function App() {
  return (
    <Router>
      <Routes>
        <Route path='/manager' element={<h1>Pureba</h1>}></Route>
      </Routes>
    </Router>
  );
}

export default App;
