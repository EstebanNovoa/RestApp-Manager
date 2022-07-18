import React from "react";
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
    return(
        <div className="w-screen h-screen ">
            <Header></Header>
            <NavBarAdmin></NavBarAdmin>
            <FrameInfo header="Reservaciones" filterOptions={filterOptions} child={generateBookingFields(children)}><div></div></FrameInfo>
            <div className="bg-main-blue h-20" ></div>
        </div>
    );
}

export function generateBookingFields(bookingList){
    return bookingList.map((value) => {
        return <InfoAdmin2 header={value.name} info1= {"Comensales:" + value.noCustomer} info2={"Hora:" + value.hour} info3={"Fecha:" + value.date}> {value}</InfoAdmin2>;
      });
}
