import './App.css';
import {Routes,Route, BrowserRouter as Router } from "react-router-dom";
import { Welcome } from './pages/Registry/Welcome';
import { SignIn } from './pages/Registry/SignIn.js';
import { HomeAdm } from './pages/Manager/HomeAdm.js';
import { BookingAdm } from './pages/Manager/BookingAdm.js';
import { ManageTables } from './pages/Manager/ManageTables.js';
import { CreateTable } from './pages/Manager/CreateTable.js';
import { DeleteTable } from './pages/Manager/DeleteTable.js';
import React from 'react';


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
        <Route path='/homeAdmin' element={<HomeAdm userName ={test.username}
          pendingOrders={test.pendingOrders} finishedOrders={test.finishedOrders} todaysBooking={test.todaysBooking} 
          tomorrowsBooking={test.tomorrowsBooking} bussyTables={test.bussyTables} avaliableTables={test.avaliableTables}>
        </HomeAdm>}></Route>   
        <Route path='/adminBooking' element={<BookingAdm></BookingAdm>}></Route>     
        <Route path='/adminManageTables' element={<ManageTables></ManageTables>}></Route>     
        <Route path='/createTable' element={<CreateTable></CreateTable>}></Route>     
        <Route path='/deleteTable' element={<DeleteTable></DeleteTable>}></Route>     
      </Routes>
    </Router>
  );
}

