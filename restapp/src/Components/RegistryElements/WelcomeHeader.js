import restIcon from  "../../resources/icons/iconRest.png";
import headerLine from  "../../resources/icons/headerLine.png";
import React from "react";
export function WelcomeHeader(props){
    return (
        <div className="bg-main-blue w-screen h-60" >
            <div className="w-screen h-40">
                <div className="w-screen h-16 pt-5 pr-5"><div><img src={restIcon} className = "w-16 h-16 float-right mr-6 mt-3 "></img></div></div>
                <div className="font-cuprum text-7xl text-white text-center">{props.headerText}</div>
                <div className=" mt-5 w-5/6 h-5 mx-auto "><img src={headerLine}></img></div>
          </div>  </div>
    );
}

class Props{
    headerText;
}

