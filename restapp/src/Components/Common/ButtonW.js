
export function ButtonW(props){
    return(
        <button className="w-auto h-auto pt-1 pl-8 pr-8 pb-1 rounded-xl border-solid border-2 text-xl border-black h-6 font-cuprum bg-white"
        >{props.text}</button>
    );
}


class Props{
    text;
}