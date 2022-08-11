import React from "react";

export function FilterFieldWorker(props){
    return(
        <select className=" border border-2 font-cuprum text-xl w-3/4 rounded-lg border-main-orange bg-main-blue text-white text-center " defaultValue={props.defaultValue}>{generateOptionList(props.filterOptions)}</select>
    );
}
class Props{
    filterOptions;
    defaultValue;
}

export function generateOptionList(values) {
    return values.map((value) => {
      return <option value={value}> {value}</option>;
    });
  }
  