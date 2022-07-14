import { useState } from "react";


export function TextInput(prop){
    const[state,setState] = useState();
    return(
        <div><input className="w-2/3 font-cuprum text-2xl border-solid border-b-2 border-black bg-transparent outline-none text-white placeholderbg-gray-400 appearance-none" placeholder={prop.hintText} type={prop.type} id={prop.id} name={prop.name} onChange={(e)=>{setState(e.target.value)
        }}></input></div>
    );
}

class Prop{
    type;
    hintText;
    id;
    name;
}