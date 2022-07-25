import React, { useEffect, useState } from "react";
import { Header } from "../../Components/Common/Header.js";
import { InfoAdmin } from "../../Components/Common/InfoAdmin.js";
import { NavBarAdmin } from "../../Components/Common/NavBarAdmin.js";

export function HomeAdm(props) {
  const[loading,setLoading] = useState(true);
  const[mainData,setMainData] = useState({});
  const testData = {
    pendingOrders: "Pendientes: 10",
    finishedOrders: "Despachados: 10",
    todaysBooking: "Hoy: 5",
    tomorrowsBooking: "Mañana: 8",
    bussyTables: "Ocupadas: 4",
    avaliableTables: "Disponibles: 2"
  }
  useEffect(() => {
    const getMainData = async () => {
      setLoading(true);
      setMainData(testData/*await getData()*/);
      setLoading(false);
    }
    getMainData();
  }, []);
  return (
    <div className="w-screen h-screen bg-main-blue">
      <Header></Header>
      <NavBarAdmin></NavBarAdmin>
      <div className="mt-10 text-center">
        <a className=" text-white text-4xl font-cuprum ">
          Bienvenido: {props.userName}
        </a>
      </div>
      { loading == true ? <div className="h-screen w-screen text-4xl text-white font-cuprum">Cargando...</div> :
      <div className="w-4/6 h-2/4  mx-auto mt-5 grid grid-cols-3 gap-20">
        <InfoAdmin headerFrame="Pedidos" headerInfo1={mainData.pendingOrders} headerInfo2={mainData.finishedOrders} link=""></InfoAdmin>
        <InfoAdmin headerFrame="Reservaciónes" headerInfo1={mainData.todaysBooking} headerInfo2={mainData.tomorrowsBooking} link="../booking"></InfoAdmin>
        <InfoAdmin headerFrame="Mesas" headerInfo1={mainData.bussyTables} headerInfo2={mainData.avaliableTables} link="../manageTables"></InfoAdmin>
      </div>
      }
      <div className="w-screen h-20 bg-main-blue"></div>
    </div>
  );
}

export async function getData() {
  const response = await fetch('');//CORREJIR RUTA!!!!
  return await response.json();
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
