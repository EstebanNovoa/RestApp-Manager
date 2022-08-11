import React from "react";
import { Link } from "react-router-dom";
import { getDateData } from "../../pages/Manager/BookingAdm";
import { FilterFieldWorker } from "./FilterFieldWorker";


export function FrameListSliderOrdersWorker(props) {
  return (
    <div className="w-5/6 h-2/3 mb-10 mt-5 mx-auto border-2 rounded-xl border-main-blue pr-3 ">
      <div className="pb-3 w-11/12 grid grid-cols-4 text-center pt-5 border-b-2 border-main-blue ml-5 ">
        {generateHeaders(props.headers)}
      </div>
      <div className="overflow-y-scroll h-4/6 scrollbar mt-2  w-11/12 mx-auto ">
        {generateSubHeaders(props.subHeaders)}
      </div>
    </div>
  );
}

class Props {
  headers;
  subHeaders;
  // listener?: (selected_id: string) => void;
}

export function generateHeaders(headers) {
  return headers.map((value) => {
        return <a className="text-main-blue font-cuprum text-3xl ">{value}</a>
  });
}
  

export function generateSubHeaders(subHeaders) {  
   const orderStates = ["Pendiente","Preparación","Entregado"]
    return subHeaders.map((value) => {
                return <div className=" border-main-softBlue pb-3 pt-5 border-b-2 grid grid-cols-4  text-center">
                  <a className="text-main-blue font-cuprum text-xl"> {value.id} </a>
                  <a className="text-main-blue font-cuprum text-xl "> {"$"+value.totalPrice} </a>
                  <Link to={ "" + value.id}><button><a className="text-main-blue font-cuprum text-xl   underline"> Ir </a></button></Link>
                  <div className="w-full h-full "><FilterFieldWorker filterOptions={orderStates} defaultValue={value.state}></FilterFieldWorker></div>
                </div>           
    });
}












