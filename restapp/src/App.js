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
import { ManageMenu } from './pages/Manager/ManageMenu';
import { CreateItemMenu } from './pages/Manager/CreateMenuItem';
import { DeleteItemMenu } from './pages/Manager/DeleteMenuItem';
import { Orders } from './pages/Manager/Orders';
import { OrderDetails } from './pages/Manager/OrderDetails';
import { OrdersWorker } from './pages/Worker/OrdersWorker';
import { OrderDetailsWorker } from './pages/Worker/OrderDetailsWorker';


export default function App() {
  let test = {username: "Esteban"}
  return (
    <Router>
      <Routes>
          <Route path="registry" >
              <Route path='index' element={<Welcome/>}></Route>
              <Route path='signin' element={<SignIn/>}></Route> 
          </Route>
          <Route path="manager" >
              <Route path='home' element={<HomeAdm userName ={test.username}
              pendingOrders={test.pendingOrders} finishedOrders={test.finishedOrders} todaysBooking={test.todaysBooking} 
              tomorrowsBooking={test.tomorrowsBooking} bussyTables={test.bussyTables} avaliableTables={test.avaliableTables}>
              </HomeAdm>}></Route>
              <Route path='booking' element={<BookingAdm></BookingAdm>}></Route>     
              <Route path='manageTables' element={<ManageTables></ManageTables>}></Route>
              <Route path='createTable' element={<CreateTable></CreateTable>}></Route>     
              <Route path='deleteTable' element={<DeleteTable></DeleteTable>}></Route>  
              <Route path='manageMenu' element={<ManageMenu></ManageMenu>}></Route>
              <Route path='createMenuItem' element={<CreateItemMenu></CreateItemMenu>}></Route>
              <Route path='deleteMenuItem/:id' element={<DeleteItemMenu></DeleteItemMenu>}></Route>
              <Route path='orders' element={<Orders></Orders>}></Route>
              <Route path='orders/:id' element={<OrderDetails></OrderDetails>}></Route>
          </Route>
          <Route path="client" ></Route>
          <Route path="worker" >
            <Route path='orders' element={<OrdersWorker></OrdersWorker>}></Route>
            <Route path='orders/:id' element={<OrderDetailsWorker></OrderDetailsWorker>}></Route>
          </Route>
          

      </Routes>
  </Router>
  );


  

}

