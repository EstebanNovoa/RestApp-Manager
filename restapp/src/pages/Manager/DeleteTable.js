import React, { useEffect, useState } from "react";
import { ButtonB } from "../../Components/Common/ButtonB.js";
import { Header } from "../../Components/Common/Header.js";
import { NavBarAdmin } from "../../Components/Common/NavBarAdmin.js";
import { SubHeaderAdmin } from "../../Components/Common/SubHeaderAdmin.js";
import { TextInput } from "../../Components/Common/TextInput.js";
import { TextInputWHeader } from "../../Components/Common/TextInputWHeader.js";
import { TextWHeader, TextWHeaderInput, TextWHeaderInput2 } from "../../Components/Common/TextWHeader2.js";


export function DeleteTable(){
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
                        <div className="w-1/2 pl-12 mt-20 mx-auto">
                            <TextWHeaderInput2  type='number' text='Mesa' id='nameTable' name='nameTable'  header="Numero mesa" max={numberTables.length}></TextWHeaderInput2>
                        </div>
                    </div>
                    <div className="text-center h-full pt-20 ">
                        <ButtonB text='Eliminar' id='btnDeleteTable' link="" evento=''></ButtonB>
                    </div>
                </div>
            }>
                
            </SubHeaderAdmin>
        }</div>
    );
}


export function onClickAddTable(){
    let capacityInput = document.getElementById('inpCapacity')
    let data = {
            capacity:capacityInput.value,
    };
    fetch('http://localhost:8080/api/admin/tables/add', {
    method: 'POST', // or 'PUT'
    body: JSON.stringify(data), // data can be `string` or {object}!
    headers:{
        'Content-Type': 'application/json'
    }
    }).then(res => res.json())
    .catch(error => console.error('Error:', error))
   .then(response => console.log('Success:', response));
}

export async function  getTotalTables(){
    const response = await fetch('http://localhost:8080/api/admin/tables');
    return await response.json();
}
