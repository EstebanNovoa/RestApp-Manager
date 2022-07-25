import { ButtonB } from "../../Components/Common/ButtonB";
import { Header } from "../../Components/Common/Header";
import { ListInputNormalForm } from "../../Components/Common/ListInput";
import { NavBarAdmin } from "../../Components/Common/NavBarAdmin";
import { SubHeaderAdmin } from "../../Components/Common/SubHeaderAdmin";
import {TextWHeaderInputPrice, TextWithHeaderInput } from "../../Components/Common/TextWHeader2";


export function CreateItemMenu(){
    const options = ['Bebidas','Preparaciones','Postres']
    return(
        <div className="w-screen h-screen">
            <Header></Header>
            <NavBarAdmin></NavBarAdmin>
            <SubHeaderAdmin headerFrame='Administrar menú - Añadir item' child={
            <div className="w-full h-full">
                <div className="w-5/6 h-3/6 grid grid-cols-3 gap-10 mx-auto pt-10 mt-10">
                    <TextWithHeaderInput header='Nombre' type='text' text='' id='inpItemName' ></TextWithHeaderInput>
                    <ListInputNormalForm headerText='Categoria' values={options} id='listCategoryItem'></ListInputNormalForm>
                    <TextWHeaderInputPrice header='Precio' type='number' text='$' id='inpPriceItem' ></TextWHeaderInputPrice>
                </div>
                <div className="text-center h-full  w-full">
                    <ButtonB text='Añadir' id='btnAddItemMenu' link="../manageMenu" event={onClickAddProduct}></ButtonB>
                </div>
                </div>
            }></SubHeaderAdmin>
        </div>
        
    )
}

function onClickAddProduct(){
    let categoryList = document.getElementById('listCategoryItem');
    let data = {
            name:document.getElementById('inpItemName').value,
            type:categoryList.options[categoryList.selectedIndex].text,
            price:document.getElementById('inpPriceItem').value,
    };
     fetch(' http://localhost:8080/api/admin/products/add', {
     method: 'POST', // or 'PUT'
     body: JSON.stringify(data), // data can be `string` or {object}!
     headers:{
         'Content-Type': 'application/json'
     }
     }).then(res => res.json())
     .catch(error => alert("No pudimos registrar tu ítem"))
    .then(response => alert('Ítem registrado!'));
 }


// http://localhost:8080/api/admin/products/add