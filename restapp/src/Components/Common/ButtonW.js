import React from "react";
import { Link } from "react-router-dom";

export function ButtonW(props){
    return(
        <Link to={props.link}>
            <button className="w-auto h-10 pt-1 pl-8 pr-8 pb-1 rounded-xl border-solid border-2 text-xl border-black font-cuprum bg-white"
            id={props.id} onClick={()=>{props.event()}}>{props.text}</button>
        </Link>
    );
}


class Props{
    text;
    id;
    link;
    event;
}