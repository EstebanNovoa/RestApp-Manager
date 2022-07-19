import React, { useEffect, useState } from "react";
import { ButtonB } from "../../Components/Common/ButtonB.js";
import { FrameListSlider } from "../../Components/Common/FrameListSlider.js";
import { Header } from "../../Components/Common/Header.js";
import { NavBarAdmin } from "../../Components/Common/NavBarAdmin.js";
import { SubHeaderAdmin } from "../../Components/Common/SubHeaderAdmin.js";
import { Table } from "../../models/Table.js";

export function ManageTables(){

    let headers = ["Mesa", "Capacidad"];
    const [loading,setLoading] = useState(false);
    let tablesw = [

    ];
    const [tables,setTables] = useState(tablesw);
  
    useEffect(() => {
      const getProducts = async () => {
        setLoading(true);
        setTables(await getDataTables());
        setLoading(false);
      }
      getProducts();
    }, []);
        

  return (
    <div className="w-screen h-screen">
      <Header />
      <NavBarAdmin />
       { loading == true ? <div className="h-screen w-screen text-4xl text-white font-cuprum">Cargando...</div> :
      <SubHeaderAdmin
        headerFrame="Administrar mesas"
        child={
          <div className="w-full h-full ">
            <div className="float-left w-1/3 h-1/2 grid grid-rows-2 mt-16 pl-20">
              <div className="flex flex-col justify-center items-center">
                <ButtonB
                  text="Crear mesa"
                  id="btnCreateTable"
                  link="../createTable"
                  event=""
                  className=""
                ></ButtonB>
                <br />
              </div>
              <div className="flex flex-col justify-center items-center">
                <ButtonB
                  text="Eliminar mesa"
                  id="btnCreateTable"
                  link=""
                  event=""
                  className=""
                ></ButtonB>
                <br />
              </div>
            </div>
            <div className="float-right w-3/5 h-2/3 pr-10 ">
              <FrameListSlider
                headers={headers}
                subHeaders={tables}
              ></FrameListSlider>
            </div>
          </div>
        }
      ></SubHeaderAdmin>
      }
    </div>
  );
}


export async function getDataTables() {
    const response = await fetch('http://localhost:8080/api/admin/tables');
    return await response.json();
}

