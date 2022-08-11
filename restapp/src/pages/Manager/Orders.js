import { useEffect, useState } from "react";
import { FrameListSlider } from "../../Components/Common/FrameListSlider";
import { FrameListSliderOrders } from "../../Components/Common/FrameListSliderOrder";
import { Header } from "../../Components/Common/Header";
import { NavBarAdmin } from "../../Components/Common/NavBarAdmin";
import { SubHeaderAdmin } from "../../Components/Common/SubHeaderAdmin";



export function Orders(){
    const headers = ["No Orden", "Total", "Fecha","Detalles"];
    const [orders,setOrders] = useState([]);
    const [loading,setLoading] = useState({});
    useEffect(() => {
        const getProducts = async () => {
          setLoading(true);
          setOrders(await getDataOrders());
          setLoading(false);
        }
        getProducts();
      }, []);
    return(
        <div className="h-screen w-screen">
            <Header></Header>
            <NavBarAdmin></NavBarAdmin>
            { loading == true ? <div className="h-screen w-screen text-4xl text-white font-cuprum">Cargando...</div> :
            <SubHeaderAdmin className="" headerFrame="Pedidos" child={
                <FrameListSliderOrders headers={headers} subHeaders={orders} ></FrameListSliderOrders>
            }></SubHeaderAdmin>
            }</div>
    );
}


export async function getDataOrders() {
    const response = await fetch('http://restapp-restaurant-manager.herokuapp.com/api/admin/orders/all');
    return await response.json();
}

