import lineHeader from "../../resources/icons/headerLine.png";
import { FilterField } from "./FilterField";
import arrowSliderLeft from "../../resources/icons/sliderArrowLeft.png"
import arrowSliderRigth from "../../resources/icons/sliderArrowRigth.png"
import { useState } from "react";
export function FrameInfo(props) {
  const[stateFramesBooking,setStatetFrameBooking] = useState(3);
  return (
    <div className="w-2/3 h-2/3 mx-auto bg-white mt-10 pt-5">
      <div>
        <div>
          <a className="text-left font-cuprum font-bold text-3xl text-main-blue ml-10 ">
            {props.header}
          </a>
          <div className="float-right mr-5 mt-2">
            <FilterField filterOptions={props.filterOptions}></FilterField>
          </div>
        </div>
        <img
          src={lineHeader}
          className="h-0.5 w-full mx-auto pl-2 pr-2 mt-2"
        ></img>
      </div>
      {/* Contenedor del slider !!!! */}
      <div className="flex ">
        {/* BOTON SLIDER LEFT */}
         <div><button onClick={()=>{
          let newState = (stateFramesBooking-3);
          if(newState>=3){
              setStatetFrameBooking(stateFramesBooking-3)
              showSortElementes(props.child,(stateFramesBooking),(stateFramesBooking-3))
          }          
        }}><img src={arrowSliderLeft}  className="w-10 h-10 mt-28 ml-4 mr-4"></img></button></div>
        <div className="w-5/6 h-2/3  mt-7 ml-12 grid grid-cols-3">{showSortElementes(props.child,(stateFramesBooking-3),stateFramesBooking)}</div>
        
        {/* BOTON SLIDER RIGHT */}
        <div><button onClick={()=>{
          let newState = (stateFramesBooking+3);
          if((Math.abs(newState-props.child.length))<=2){
            setStatetFrameBooking(stateFramesBooking+3)
            showSortElementes(props.child,(stateFramesBooking),(stateFramesBooking+3))
        }
        }}><img src={arrowSliderRigth} className="w-10 h-10 ml-4 mr-4 mt-28"></img></button></div>

      </div>

    </div>
  );
}

class Props {
  header;
  child;
  filterOptions;
}

export function generateOptionList(values) {
  return values.map((value) => {
    return <option value={value}> {value}</option>;
  });
}

export function showSortElementes(bookingFrames,start,end){
    return bookingFrames.slice(start,end).map((value) => {
        return value;
      })
}

export function onClickRigth(bookingFrames,start,end,setState){
    setState();
    showSortElementes(bookingFrames,start,end);
}
