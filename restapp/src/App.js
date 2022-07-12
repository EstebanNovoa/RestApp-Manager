import './App.css';
import {Routes,Route, BrowserRouter as Router } from "react-router-dom";
import { Welcome } from './pages/Registry/Welcome';
import { SignIn } from './pages/Registry/SignIn';
import { Home } from './pages/Manager/Home';


export default function App() {
  let test = {username: "Esteban",
  pendingOrders: "Pendientes: 10",
  finishedOrders: "Despachados: 10",
  todaysBooking: "Hoy: 5",
  tomorrowsBooking: "Mañana: 8",
  bussyTables: "Ocupadas: 4",
  avaliableTables: "Disponibles: 2"
  }
  return (
    <Router>
      <Routes>
        <Route path='/registry' element={<Welcome/>}></Route>
        <Route path='/signin' element={<SignIn/>}></Route>        
        <Route path='/homeAdmin' element={<Home userName ={test.username}
          pendingOrders={test.pendingOrders} finishedOrders={test.finishedOrders} todaysBooking={test.todaysBooking} 
          tomorrowsBooking={test.tomorrowsBooking} bussyTables={test.bussyTables} avaliableTables={test.avaliableTables}>
        </Home>}></Route>        
      </Routes>
    </Router>
  );
}

