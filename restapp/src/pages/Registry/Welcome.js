import React from "react";
import { ButtonW } from "../../Components/Common/ButtonW";
import { LogIn, SigninMessage } from "../../Components/RegistryElements/Login";
import { WelcomeHeader } from "../../Components/RegistryElements/WelcomeHeader";

export function Welcome() {
  return (
    <div className="w-screen h-screen bg-main-blue">
      <WelcomeHeader headerText="Bienvenidos a RestApp" />
      <div className=" w-screen h-80 mt-10 ml-10">
        <LogIn></LogIn>
        <SigninMessage></SigninMessage>
      </div>
      <div className="text-center w-1/2 float-left"><ButtonW text="Iniciar Sesión" className="mt-10" id="btnLogIn" link="" event={onClickLogIn} ></ButtonW></div>
      <div className=" w-1/3 float-right"><ButtonW text="Crear Cuenta" className="mt-10 text-center" id="btnCreateAccount" link="/signin" event={onClickLogIn}></ButtonW></div>
    </div>
  );
}



export function onClickLogIn(){
  let emailInput = document.getElementById('emailLogIn').value;
  let passwordInput = document.getElementById('passwordLogIn').value;
  
}

