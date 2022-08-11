import { useEffect, useState } from "react";
import { useParams, useSearchParams } from "react-router-dom";
import { ButtonB } from "../../Components/Common/ButtonB";
import { FrameListSliderProducts } from "../../Components/Common/FrameListSliderOrder";
import { FrameInfo } from "../../Components/Common/FramesInfo";
import { Header } from "../../Components/Common/Header";
import { NavBarAdmin } from "../../Components/Common/NavBarAdmin";
import { SubHeaderAdmin } from "../../Components/Common/SubHeaderAdmin";


export function OrderDetailsWorker(){
    const params = useParams();
    const headers = ["Nombre","Cantidad","Precio","SubTotal"]
    let filterOptions = ["Hoy","Mañana","Pasado mañana"]
    const [orders,setOrders] = useState([]);
    const [loading,setLoading] = useState({}); 
   const products = [
    {
        name:"Gaseosa",
        quantity:3,
        price:2500,
    },
    {
        name:"Churrasco",
        quantity:2,
        price:5000,
    },
    {
        name:"Postre",
  quantity:1,
  price:5000,
},
{
  name:"Postre",
  quantity:1,
        price:5000,
    },
    {
        name:"Postre",
        quantity:1,
        price:5000,
    },
  {
      name:"Postre",
        quantity:1,
        price:5000,
    },
]
    useEffect(() => {
        const getProducts = async () => {
          setLoading(true);
          setOrders(await getDataOrders(params.id));
          setLoading(false);
        }
        getProducts();
      }, []);
    
    return(
        <div className="w-screen h-screen">
            <Header></Header>
            { loading == true ? <div className="h-screen w-screen text-4xl text-white font-cuprum">Cargando...</div> :
            <SubHeaderAdmin headerFrame= {"Detalles Pedido: " + params.id} child={
                <div className="w-full h-full ">
                    <div className="w-full h-5/6 pb-5">
                        <div className="float-left w-1/4 bg-white"><h1 className="font-cuprum text-3xl text-main-blue text-center pt-20">Total:</h1><br/><h1 className="font-cuprum text-3xl text-main-blue text-center pt-10">{"$" + getTotalPrice(params.id,orders)}</h1></div>
                        <div className="float-right w-3/4 h-full mt-10 ">
                            <FrameListSliderProducts headers={headers} subHeaders={getProductsFromOrder(params.id,orders)}></FrameListSliderProducts>
                        </div>
                    </div>
                    <div className="bg-white h-1/6 w-full justify-center flex "> <ButtonB text="Volver" id="btnBackOrders" link="../orders" event={()=>{}}></ButtonB></div>
                </div>
            } filterOptions = {filterOptions}></SubHeaderAdmin>
            }</div>
    ); 
}



export async function getDataOrders() {
    const response = await fetch("http://restapp-restaurant-manager.herokuapp.com/api/admin/orders/all");
    return await response.json();
}


function getProductsFromOrder(id,orders){
    const total = 0;
    const products = [];
    let results = [products,total];
    for (let i = 0; i < orders.length; i++) {
        if(orders[i].id == id){
            for (let j = 0; j < orders[i].details.length; j++) {
                orders[i].details[j].product['quantity'] = orders[i].details[j].quantity;
                products.push(orders[i].details[j].product)
            }
        }
    }
    return products;
  }

  function getTotalPrice(id,orders){
    for (let i = 0; i < orders.length; i++) {
        if(orders[i].id == id){
            return orders[i].totalPrice
        }
    }
  }
