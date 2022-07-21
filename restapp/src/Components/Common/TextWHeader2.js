import React, { ReactElement } from "react";
import { useState } from "react";


export function TextWHeader(prop){
    const[state,setState] = useState();
    return(
        <div>
            <a className="text-3xl font-cuprum text-main-blue">{prop.header}</a><br/><br/>
            <div className="w-full  border-solid border-b-2 border-black text-center"><a className="mt-10  font-cuprum text-2xl  text-gray-400 " id={prop.id}  >{prop.text + " "} </a></div></div>
    );
}
class Prop{
    type;
    header;
    text;
    id;
    name;
    max;
}

export function NumberWithHeaderInput(prop){
    
    const[state,setState] = useState();
    return(
        <div>
            <a className="text-3xl font-cuprum text-main-blue">{prop.header}</a><br/><br/>
            <div className="w-full  border-solid border-b-2 border-black text-center"><a className="mt-10  font-cuprum text-2xl  text-main-blue text-center"  >{prop.text + " "} <input type={prop.type} id={prop.id}  className=" outline-none text-center hover:non" min="2" max="9" step="1" defaultValue='2' ></input></a></div>
            </div>
    );
}
export function TextWithHeaderInput(prop){
    const[state,setState] = useState();
    return(
        <div>
            <a className="text-3xl font-cuprum text-main-blue">{prop.header}</a><br/><br/>
            <div className="w-full  border-solid border-b-2 border-black text-center"><a className="mt-10  font-cuprum text-2xl  text-main-blue text-center"   >{prop.text + " "} <input type={prop.type} id={prop.id}  className=" outline-none text-center hover:non"  ></input></a></div></div>
    );
}
export function TextWHeaderInput2(prop){
    const[state,setState] = useState();
    return(
        <div>
            <a className="text-3xl font-cuprum text-main-blue">{prop.header}</a><br/><br/>
            <div className="w-full  border-solid border-b-2 border-black text-center"><a className="mt-10  font-cuprum text-2xl  text-main-blue text-center"  >{prop.text + " "} <input type={prop.type} id={prop.id}  className=" outline-none text-center hover:non" min="1" max={prop.max} step="1" defaultValue='1'   ></input></a></div></div>
    );
}
export function TextWHeaderInputPrice(prop){
    const[state,setState] = useState();
    return(
        <div>
            <a className="text-3xl font-cuprum text-main-blue">{prop.header}</a><br/><br/>
            <div className="w-full  border-solid border-b-2 border-black text-center"><a className="mt-10  font-cuprum text-2xl  text-main-blue text-center" id={prop.id}  >{prop.text + " "} <input type={prop.type} className=" outline-none text-center hover:non" min="1000" step="500"  defaultValue='1000'></input></a></div></div>
    );
}
