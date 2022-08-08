import React, { useEffect, useState } from "react";
import { ButtonB } from "../../Components/Common/ButtonB.js";
import { Header } from "../../Components/Common/Header.js";
import { NavBarAdmin } from "../../Components/Common/NavBarAdmin.js";
import { SubHeaderAdmin } from "../../Components/Common/SubHeaderAdmin.js";
import { TextWHeader,NumberWithHeaderInput } from "../../Components/Common/TextWHeader2.js";
import { Table } from "../../models/Table.js";


export function CreateTable(){
    const [numberTables,setNumberTables] = useState(0);
    const [loading,setLoading] = useState(true);
    useEffect(() => {
        const getProducts = async () => {
          setLoading(true);
          setNumberTables(await getTotalTables());
          setLoading(false);
        }
        getProducts();
      }, []);
          
    return(
        <div className="w-screen h-screen">
            <Header></Header>
            <NavBarAdmin></NavBarAdmin>
            { loading == true ? <div className="h-screen w-screen text-4xl text-white font-cuprum">Cargando...</div> :
            <SubHeaderAdmin headerFrame="Administrar mesas - Crear Mesa" child={ 
                <div className="w-full h-full ">
                    <div className="h-1/3">
                        <div className="float-left w-1/2 pl-12 mt-16">
                            <TextWHeader  text={'Mesa ' + (numberTables.length + 1)} id='nameTable' name='nameTable'  header="Numero mesa" ></TextWHeader>
                        </div>
                        <div className="float-right w-1/3 pl-12 mt-16 mr-20">
                            <NumberWithHeaderInput type='number' text='' id='inpCapacityNewTable'  name='inpCapacity'  header="Capacidad" ></NumberWithHeaderInput>
                        </div>
                    </div>
                    <div className="text-center h-full pt-20    ">
                        <ButtonB text='Añadir' id='btnAddTable' link="../manageTables"  event={onClickAddTable}></ButtonB>
                    </div>
                </div>
            }>
            </SubHeaderAdmin>
 } </div>
    );
}

export function onClickAddTable(){
    let data = {
            capacity:document.getElementById('inpCapacityNewTable').value,
    };
    fetch('https://restapp-restaurant-manager.herokuapp.com/api/admin/tables/add', {
    method: 'POST', // or 'PUT'
    body: JSON.stringify(data), // data can be `string` or {object}!
    headers:{
        'Content-Type': 'application/json'
    }
    }).then(res => res.json())
    .catch(error => alert("No pudimos registrar tu mesa"))
   .then(response => alert('Mesa registrada!'));
}

export async function  getTotalTables(){
    const response = await fetch('https://restapp-restaurant-manager.herokuapp.com/api/admin/tables');
    return await response.json();
}




