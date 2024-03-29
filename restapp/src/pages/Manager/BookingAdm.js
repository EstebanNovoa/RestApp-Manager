import React, { useEffect, useState } from "react";
import { ReactElement } from "react";
import { FrameInfo } from "../../Components/Common/FramesInfo.js";
import { Header } from "../../Components/Common/Header.js";
import { InfoAdmin2 } from "../../Components/Common/infoAdmin2.js";
import { NavBarAdmin } from "../../Components/Common/NavBarAdmin.js";
import { Booking } from "../../models/Booking";


export function BookingAdm(){
    let filterOptions = ["Hoy","Mañana","Pasado mañana"]
     let children = [
         new Booking("Reservacion 1","11/04/22","11am",12),
         new Booking("Reservacion 2","11/04/22","11am",12),
         new Booking("Reservacion 3","11/04/22","11am",12),
         new Booking("Reservacion 4","11/04/22","11am",12),
         new Booking("Reservacion 5","11/04/22","11am",12),
         new Booking("Reservacion 6","11/04/22","11am",12),
         new Booking("Reservacion 7","11/04/22","11am",12),
         new Booking("Reservacion 8","11/04/22","11am",12),
     ]
    const[loading,setLoading] = useState(true);
    const[bookings,setBookings] = useState([]);
    useEffect(() => {
        const getProducts = async () => {
          setLoading(true);
          setBookings( await getBookings());
          setLoading(false);
        }
        getProducts();
      }, []);
    return(
        <div className="w-screen h-screen ">
            <Header></Header>
            <NavBarAdmin></NavBarAdmin>
            { loading == true ? <div className="h-screen w-screen text-4xl text-white font-cuprum">Cargando...</div> :
            <FrameInfo header="Reservaciones" filterOptions={filterOptions} child={generateBookingFields(bookings)}></FrameInfo>
            }<div className="bg-main-blue h-20" ></div>
    </div>
    );
}

export function generateBookingFields(bookingList){
    return bookingList.map((value) => {
       {getDateData(value.reserveDate)}
        return <InfoAdmin2 header={"Reservación:" + value.id} info1= {"Comensales: " + value.amountOfPeople} info2={"Hora: " + getDateData(value.reserveDate).hour} info3={"Fecha: " + getDateData(value.reserveDate).date}></InfoAdmin2>;
      });
}

export async function  getBookings(){
    const response = await fetch('https://restapp-restaurant-manager.herokuapp.com/api/admin/reserves/all');
    return await response.json();
}

export function getDateData(date){
  let data = {
    hour : "",
    date : "",
  } 
  let hourChecked = false
  for (let i = 0; i < date.length; i++) {
    if(date.charAt(i) == 'T' || hourChecked){    
      if(date.length - i == 4){
        return data;
      }else{
        data.hour += date.charAt(i+1);
        hourChecked = true;
      }
    }else{
      data.date +=  date.charAt(i);
    }
  }
}
