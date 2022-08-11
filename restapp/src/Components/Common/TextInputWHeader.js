import React from "react";
import { useState } from "react";


export function TextInputWHeader(prop){
    const[state,setState] = useState();
    return(
        <div>
            <a className="text-3xl font-cuprum text-main-blue">{prop.header}</a><br/>
            <input className="w-2/3 font-cuprum text-2xl border-solid border-b-2 border-black bg-transparent outline-none text-main-blue placeholderbg-gray-400 appearance-none" placeholder={prop.hintText} type={prop.type} id={prop.id} name={prop.name} onChange={(e)=>{setState:Function(e.target.value)
        }}></input></div>
    );
}
class Prop{
    header;
    type;
    hintText;
    id;
    name;
}