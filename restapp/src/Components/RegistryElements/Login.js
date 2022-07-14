import { useState } from "react";
import { TextInput } from "../Common/TextInput";

export function LogIn(){
    return(
        <div className="w-1/2 h-full float-left text-center">
            <div className="h-1/6 text-2xl text-white font-bold font-cuprum">Iniciar Sesion</div>
            <div className=" mt-10">
                <TextInput type='Text' hintText='Email' id="emailLogIn" name="email"  ></TextInput>
                <div className="mt-16"><TextInput type='Password' hintText='Password' id="passwordLogIn" name="password" ></TextInput></div>
            </div>
        </div>
    );
}






export function SigninMessage(){
    return(
        <div className="w-1/3 h-full float-left   ">
            <div className="h-1/6 text-2xl text-white text-center font-bold font-cuprum   ">Registrate</div>
            <div className="text-m text-white text-center font-cuprum text-justify ">SI TODAVÍA NO TIENES UNA CUENTA DE USUARIO DE RESTAPP UTILIZA ESTA OPCIÓN PARA ACCEDER AL FORMULARIO DE REGISTRO.<br/> <br/>
                TE SOLICITAREMOS LA INFORMACIÓN IMPRESCINDIBLE PARA AGILIZAR EL PROCESO DE REGISTRO.</div>            
        </div>
    );
}