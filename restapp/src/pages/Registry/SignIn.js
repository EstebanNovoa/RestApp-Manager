import { ButtonW } from "../../Components/Common/ButtonW";
import { Header } from "../../Components/Common/Header";
import { ListInput } from "../../Components/Common/ListInput";
import { TextInput } from "../../Components/Common/TextInput";

export function SignIn(){
    let values = ["CC","CE","NIP"]
    return(
        <div className="w-screen h-screen bg-main-blue">
            <Header></Header>
            <div className="text-center font-cuprum text-4xl  text-white">Crear Cuenta</div>
            <div className="grid grid-cols-2 grid-rows-3 mt-16 gap-16 w-2/3 mx-auto pl-16">
                <TextInput type="Text" hintText="Correo" ></TextInput>
                <TextInput type="Password" hintText="Contraseña" ></TextInput>
                <TextInput type="Text" hintText="Nombre" ></TextInput>
                <TextInput type="Text" hintText="Apellido" ></TextInput>
                <ListInput id="typeDoc" values={values} headerText="Tipo de Documento"></ListInput>
                <TextInput type="Number" hintText="No Documento" className="outline-none appearance-none" ></TextInput>
            </div>
            <div className="w-50 mt-10 float-right mr-40"> <ButtonW text="Crear cuenta" id="btnSignIn" link=" " ></ButtonW></div>
        </div>
    );
}