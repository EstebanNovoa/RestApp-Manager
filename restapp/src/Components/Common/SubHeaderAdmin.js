import React from "react";
import lineHeader from "../../resources/icons/headerLine.png";

export function SubHeaderAdmin(props) {
  return (
    <div className="w-2/3 h-2/3 mx-auto bg-white mt-10 pt-5">
      <div>
        <div>
          <a className="text-left font-cuprum font-bold text-3xl text-main-blue ml-10 ">
            {props.headerFrame}
          </a>
        </div>
        <img
          src={lineHeader}
          className="h-0.5 w-full mx-auto pl-2 pr-2 mt-2"
        ></img>
      </div>
      {props.child} 
      <div className="w-screen h-20 bg-main-blue "></div>
    </div>
  );
}

class Props {
  headerFrame;
  child;
}
