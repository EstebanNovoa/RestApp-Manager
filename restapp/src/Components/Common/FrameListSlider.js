import React from "react";
import { ReactElement } from "react";

export function FrameListSlider(props) {
  return (
    <div className="w-full h-full mt-14 border-2 mr-12 rounded-xl border-main-blue pr-3">
      <div className="pb-3 w-11/12 text-center pt-5 border-b-2 border-main-blue mx-auto">
        {generateHeaders(props.headers)}
      </div>
      <div className="overflow-y-scroll h-2/3 scrollbar mt-2">
        {generateSubHeaders(props.headers,props.subHeaders)}
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
    switch (headers.length) {
      case 2:
        return (
          <a className="text-main-blue font-cuprum text-3xl mr-14 ml-14 text-center"> {value} </a>
        );
      case 3:
        return (
          <a className="text-main-blue font-cuprum text-3xl mr-10 ml-10">
            {value}
          </a>
        );
      default:
        break;
    }

  });
}


export function generateSubHeaders(headers,subHeaders) {
    return subHeaders.map((value) => {
        switch (headers.length) {
          case 2:
            return (
            <div className=" border-main-softBlue mx-auto pb-3 w-11/12 text-center pt-5 border-b-2 ">
                <a className="text-main-blue font-cuprum text-xl mr-24 ml-20 text-center"> {value.id} </a>
                <a className="text-main-blue font-cuprum text-xl mr-24 ml-20 text-center"> {value.capacity} </a>
            </div>
            );
          case 3:
            return (
                <div className=" border-main-softBlue mx-auto pb-3 w-11/12 text-center pt-5 border-b-2 grid grid-cols-3 pl-4">
                <a className="text-main-blue font-cuprum text-xl text-center "> {value.name} </a>
                <a className="text-main-blue font-cuprum text-xl text-center pl-6"> {value.type} </a>
                <a className="text-main-blue font-cuprum text-xl text-center pl-10"> {"$"+value.price} </a>
            </div>
            );
          default:
            break;
        }
    
      });
}
