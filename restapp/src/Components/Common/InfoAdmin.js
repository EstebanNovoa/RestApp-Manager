import React from "react";
import { Link } from "react-router-dom";
import line from "../../resources/icons/headerLine.png"

export function InfoAdmin(props){
    return(
        <div className=" text-center font-cuprum bg-white w-full h-5/6 pt-3 mt-10">
            <a className="text-3xl ">{props.headerFrame}</a>
            <img src={line} className="w-5/6 mx-auto mt-2"></img>
            <div className="grid grid-rows-3 h-2/3 mt-6">
                <a className="text-2xl">{props.headerInfo1}</a><br/>
                <a className="text-2xl">{props.headerInfo2}</a><br/>
                <Link to={props.link} className="text-2xl"><a className="underline">Ir</a></Link>
            </div>
        </div>
    );
}

class Props{
    headerFrame;
    headerInfo1;
    headerInfo2;
    link;
}


