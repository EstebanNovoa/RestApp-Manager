import React, { useEffect, useState } from "react";
import { ButtonB } from "../../Components/Common/ButtonB.js";
import { FrameListSlider } from "../../Components/Common/FrameListSlider.js";
import { Header } from "../../Components/Common/Header.js";
import { NavBarAdmin } from "../../Components/Common/NavBarAdmin.js";
import { SubHeaderAdmin } from "../../Components/Common/SubHeaderAdmin.js";

export function ManageMenu(){

    let headers = ["Nombre", "Categoria","Precio","Borrar"];
    const [loading,setLoading] = useState(false);
    let menuItems = [
      { id:1,name: "Pola", type: "Bebida", price : 3000 },
      { id:2,name: "Currasco 1/2", type: "Preparacion", price : 27000},
      { id:3,name: "Lasagna", type: "Preparacion", price : 20000 },
      { id:4,name: "Picada 4", type: "Preparacion", price : 57000 },
      { id:5,name: "Gaseosa 300 ml", type: "Bebida", price :  2500},

    ];
    const [menu,setMenu] = useState(menuItems);
  
    useEffect(() => {
      const getProducts = async () => {
        setLoading(true);
        setMenu( await getDataMenuItems());
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
          <div className="w-full h-full -mt-5">
            <div className="mx-auto w-4/5 h-2/3 pr-10 -pt-5 ">
              <FrameListSlider
                headers={headers}
                subHeaders={menu}
              ></FrameListSlider>
            </div>
            <div className="flex flex-col justify-center items-center bg-white pt-10">
                <ButtonB
                  text="Crear item"
                  id="btnCreateItem"
                  link="../createMenuItem"
                  event=""
                  className="mt-10"
                ></ButtonB>
                <br />
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

