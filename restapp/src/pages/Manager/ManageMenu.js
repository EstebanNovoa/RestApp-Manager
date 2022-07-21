import React, { useEffect, useState } from "react";
import { ButtonB } from "../../Components/Common/ButtonB.js";
import { FrameListSlider } from "../../Components/Common/FrameListSlider.js";
import { Header } from "../../Components/Common/Header.js";
import { NavBarAdmin } from "../../Components/Common/NavBarAdmin.js";
import { SubHeaderAdmin } from "../../Components/Common/SubHeaderAdmin.js";

export function ManageMenu(){

    let headers = ["Nombre", "Categoria","Precio"];
    const [loading,setLoading] = useState(false);
    let menuItems = [
      { name: "Pola", type: "Bebida", price : 3000 },
      { name: "Currasco 1/2", type: "Preparacion", price : 27000},
      { name: "Lasagna", type: "Preparacion", price : 20000 },
      { name: "Picada 4", type: "Preparacion", price : 57000 },
      { name: "Gaseosa 300 ml", type: "Bebida", price :  2500},

    ];
    const [menu,setMenu] = useState(menuItems);
  
    useEffect(() => {
      const getProducts = async () => {
        setLoading(true);
        setMenu(await getDataMenuItems());
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
        headerFrame="Administrar menú"
        child={
          <div className="w-full h-full ">
            <div className="float-left w-1/3 h-1/2 grid grid-rows-2 mt-16 pl-20">
              <div className="flex flex-col justify-center items-center">
                <ButtonB
                  text="Crear item"
                  id="btnCreateItem"
                  link="../createMenuItem"
                  event=""
                  className=""
                ></ButtonB>
                <br />
              </div>
              <div className="flex flex-col justify-center items-center">
                <ButtonB
                  text="Eliminar item"
                  id="btnDeleteItem"
                  link="../createMenuItem"
                  event=""
                  className=""
                ></ButtonB>
                <br />
              </div>
            </div>
            <div className="float-right w-3/5 h-2/3 pr-10 ">
              <FrameListSlider
                headers={headers}
                subHeaders={menu}
              ></FrameListSlider>
            </div>
          </div>
        }
      ></SubHeaderAdmin>
      }
    </div>
  );
}


export async function getDataMenuItems() {
    const response = await fetch('http://localhost:8080/api/admin/products');
    return await response.json();
}

