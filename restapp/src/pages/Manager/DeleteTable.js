import React from "react";
import { ButtonB } from "../../Components/Common/ButtonB.js";
import { Header } from "../../Components/Common/Header.js";
import { NavBarAdmin } from "../../Components/Common/NavBarAdmin.js";
import { SubHeaderAdmin } from "../../Components/Common/SubHeaderAdmin.js";
import { TextInput } from "../../Components/Common/TextInput.js";
import { TextInputWHeader } from "../../Components/Common/TextInputWHeader.js";
import { TextWHeader, TextWHeaderInput } from "../../Components/Common/TextWHeader2.js";


export function DeleteTable(){
    return(
        <div className="w-screen h-screen">
            <Header></Header>
            <NavBarAdmin></NavBarAdmin>
            <SubHeaderAdmin headerFrame="Administrar mesas - Crear Mesa" child={ 
                <div className="w-full h-full ">
                    <div className="h-1/3">
                        <div className="float-left w-1/2 pl-12 mt-16">
                            <TextWHeaderInput  type='number' text='Mesa' id='nameTable' name='nameTable'  header="Numero mesa" ></TextWHeaderInput>
                        </div>
                        <div className="float-right w-1/3 pl-12 mt-16 mr-20">
                            <TextWHeader  text='' id='inpCapacity' name='inpCapacity'  header="Capacidad" ></TextWHeader>
                        </div>
                    </div>
                    <div className="text-center h-full pt-20    ">
                        <ButtonB text='Añadir' id='btnAddTable' link="" evento=''></ButtonB>
                    </div>
                </div>
            }>
                
            </SubHeaderAdmin>
        </div>
    );
}