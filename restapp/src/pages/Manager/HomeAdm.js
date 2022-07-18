import React from "react";
import { Header } from "../../Components/Common/Header.js";
import { InfoAdmin } from "../../Components/Common/InfoAdmin.js";
import { NavBarAdmin } from "../../Components/Common/NavBarAdmin.js";

export function HomeAdm(prop) {
  return (
    <div className="w-screen h-screen bg-main-blue">
      <Header></Header>
      <NavBarAdmin></NavBarAdmin>
      <div className="mt-10 text-center">
        <a className=" text-white text-4xl font-cuprum ">
          Bienvenido: {prop.userName}
        </a>
      </div>
      <div className="w-4/6 h-2/4  mx-auto mt-5 grid grid-cols-3 gap-20">
        <InfoAdmin headerFrame="Pedidos" headerInfo1={prop.pendingOrders} headerInfo2={prop.finishedOrders} link=""></InfoAdmin>
        <InfoAdmin headerFrame="Reservaciónes" headerInfo1={prop.todaysBooking} headerInfo2={prop.tomorrowsBooking} link=""></InfoAdmin>
        <InfoAdmin headerFrame="Mesas" headerInfo1={prop.bussyTables} headerInfo2={prop.avaliableTables} link=""></InfoAdmin>
      </div>
    </div>
  );
}

class Props {
  userName;
  pendingOrders;
  finishedOrders;
  todaysBooking;
  tomorrowsBooking;
  bussyTables;
  avaliableTables;
  link;
}
