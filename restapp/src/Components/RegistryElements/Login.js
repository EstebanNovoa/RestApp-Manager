import { ButtonW } from "../Common/ButtonW";

export function LogIn(){
    return(
        <div className="w-1/2 h-full float-left text-center">
            <div className="h-1/6 text-2xl text-white font-bold font-cuprum">Iniciar Sesion</div>
            <div className=" mt-10">
                <div><input className="w-2/3 font-cuprum text-2xl border-solid border-b-2 border-black bg-transparent outline-none text-white placeholderbg-gray-400" placeholder="Email" type="text" ></input></div>
                <div><input className="mt-20 w-2/3 font-cuprum text-2xl border-solid border-b-2 border-black bg-transparent outline-none text-white placeholderbg-gray-400" placeholder="Password" type="password"></input></div>
            </div>
        </div>
    );
}

export function SigninMessage(){
    return(
        <div className="w-1/3 h-full float-left   ">
            <div className="h-1/6 text-2xl text-white text-center font-bold font-cuprum   ">Registrate</div>
            <div className="text-m text-white text-center font-cuprum text-justify ">SI TODAVÍA NO TIENES UNA CUENTA DE USUARIO DE RESTAPP UTILIZA ESTA OPCIÓN PARA ACCEDER AL FORMULARIO DE REGISTRO.<br/> <br/>
                TE SOLICITAREMOS LA INFORMACIÓN IMPRESCINDIBLE PARA AGILIZAR EL PROCESO DE COMPRA.</div>            
        </div>
    );
}