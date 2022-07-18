import React from "react";
import headerLine from  "../../resources/icons/headerLine.png";

export function Header(){
    return(
            <div className="w-screen h-40 pt-8 flex justify-center ">    
                <img src={headerLine} className="mt-8  w-1/3 h-3 ml-12 flo"></img>
                <a className="font-cuprum text-7xl ml/ ml-6 mr-6 text-white">RestApp</a>
                <img src={headerLine} className="w-1/3  mt-8 h-3 mr-12"></img>
        </div>
    );
}