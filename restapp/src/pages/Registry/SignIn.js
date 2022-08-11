import { ButtonW } from "../../Components/Common/ButtonW.js";
import { Header } from "../../Components/Common/Header.js";
import { ListInput } from "../../Components/Common/ListInput.js";
import { TextInput } from "../../Components/Common/TextInput.js";

export function SignIn(){
    let values = ["CC","CE","NIP"]
    return(
        <div className="w-screen h-screen bg-main-blue">
            <Header></Header>
            <div className="text-center font-cuprum text-4xl  text-white">Crear Cuenta</div>
            <div className="grid grid-cols-2 grid-rows-3 mt-16 gap-16 w-2/3 mx-auto pl-16">
                <TextInput id="inpEmailSignin" type="Text" hintText="Correo" ></TextInput>
                <TextInput id="inpPasswordSignin" type="Password" hintText="Contraseña" ></TextInput>
                <TextInput id="inpNameSignin" type="Text" hintText="Nombre" ></TextInput>
                <TextInput id="inpLastNameSignin"type="Text" hintText="Apellido" ></TextInput>
                <ListInput id="selTypeDocSignin" values={values} headerText="Tipo de Documento"></ListInput>
                <TextInput id="inpDocumentSignin" type="Number" hintText="No Documento" className="outline-none appearance-none" ></TextInput>
            </div>
            <div className="w-50 mt-10 float-right mr-40"> <ButtonW text="Crear cuenta" id="btnSignIn" link=" " event={onClickSignIn}></ButtonW></div>
        </div>
    );
}

function onClickSignIn(){
    let newUser = {
        name: document.getElementById("inpNameSignin").value,
        lastName: document.getElementById("inpLastNameSignin").value,
        email: document.getElementById("inpEmailSignin").value,
        password: document.getElementById("inpPasswordSignin").value
    };
    console.log(newUser);
}


function onClickAddProduct(){
    let categoryList = document.getElementById('listCategoryItem');
    let data = {
            name:document.getElementById('inpItemName').value,
            type:categoryList.options[categoryList.selectedIndex].text,
            price:document.getElementById('inpPriceItem').value,
    };
    console.log(data)
     fetch('http://restapp-restaurant-manager.herokuapp.com/api/register', {
     method: 'POST', // or 'PUT'
     body: JSON.stringify(data), // data can be `string` or {object}!
     headers:{
         'Content-Type': 'application/json'
     }
     }).then(res => res.json())
     .catch(error => alert("No pudimos registrar tu ítem"))
    .then(response => alert('Ítem registrado!'));
    
 }