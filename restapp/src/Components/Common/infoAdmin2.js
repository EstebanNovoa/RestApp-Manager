

export function InfoAdmin2(props){
    return(
        <div className="border border-main-blue font-cuprum text-center pt-5">
            <a className="text-xl font-bold text-3xl">{props.header}</a><br/>
            <div className="text-2xl mt-5 grid grid-rows-3">
            <a >{props.info1}</a><br/>
            <a >{props.info2}</a><br/>
            <a >{props.info3}</a><br/>
            </div>
        </div>
    );
}

class Props{
    header;
    info1;
    info2;
    info3;
    
}