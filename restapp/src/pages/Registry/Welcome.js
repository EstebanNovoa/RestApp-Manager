import React from "react";
import { ButtonW } from "../../Components/Common/ButtonW";
import { LogIn, Signin, SigninMessage } from "../../Components/RegistryElements/Login";
import { WelcomeHeader } from "../../Components/RegistryElements/WelcomeHeader";

export function Welcome() {
  return (
    <div className="w-screen h-screen bg-main-blue">
      <WelcomeHeader headerText="Bienvenidos a RestApp" />
      <div className=" w-screen h-80 mt-10 ml-10">
        <LogIn></LogIn>
        <SigninMessage></SigninMessage>
      </div>
      <div className="text-center w-1/2 float-left"><ButtonW text="Crear Cuenta" className="mt-10 w-auto h-auto " ></ButtonW></div>
      <div className=" w-1/3 float-right"><ButtonW text="Crear Cuenta" className="mt-10 w-auto h-auto text-center " ></ButtonW></div>
    </div>
  );
}
