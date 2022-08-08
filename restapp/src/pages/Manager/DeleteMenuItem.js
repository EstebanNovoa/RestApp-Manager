import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { ButtonB } from "../../Components/Common/ButtonB";
import { Header } from "../../Components/Common/Header";
import { NavBarAdmin } from "../../Components/Common/NavBarAdmin";
import { SubHeaderAdmin } from "../../Components/Common/SubHeaderAdmin";
import { TextWHeader, TextWithHeaderInput } from "../../Components/Common/TextWHeader2";


export function DeleteItemMenu(props){
    const {id} = useParams();
    const [loading,setLoading] = useState(true);
    const [items,setItems] = useState({});

    useEffect(() => {
        const getProducts = async () => {   
          setLoading(true);
          setItems(await getData());
          setLoading(false);
        }
        getProducts();
      }, []);

    return(
        <div className="w-screen h-screen">
            <Header></Header>
            <NavBarAdmin></NavBarAdmin>
            { loading == true ? <div className="h-screen w-screen text-4xl text-white font-cuprum">Cargando...</div> :
            <SubHeaderAdmin headerFrame='Administrar menú - Eliminar item' child={
            <div className="w-full h-full">
                <div className="w-3/6 h-3/6   mx-auto pt-10 mt-10">
                    <TextWHeader header='Nombre' type='text' id='inpItemNameDelete' text={searchItem(items,id).name}></TextWHeader>
                </div>
                <div className="text-center h-full  w-full">
                    <ButtonB text='Eliminar' id='btnDeleteItemMenu' link="../manageMenu" event={()=>onClickDeleteProduct(id)}></ButtonB>
                </div>
                </div>
            }></SubHeaderAdmin>
            }</div>
        
    )
}

class Props{
    id;
    name;
}

function onClickDeleteProduct(id){
    const route = "https://restapp-restaurant-manager.herokuapp.com/api/admin/products/delete/"+ id; 
     fetch({route},{method: 'DELETE'}).then(res => res.json())
     .catch(error => alert("No pudimos eliminar tu ítem"))
    .then(response => alert('Ítem eliminado!'));
 }

 
export async function getData() {
    const response = await fetch('https://restapp-restaurant-manager.herokuapp.com/api/admin/products');
    return await response.json();
}

function searchItem(values,id) {
    for (let i = 0; i < values.length; i++) {
        if(values[i].id == id){
            return values[i];
        }
    }
}
