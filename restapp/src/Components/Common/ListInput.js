import React from "react";

export function ListInput(prop) {
  return (
    <div>
      <div className="mb-2 w-2/3 border-solid border-b-2 border-black bg-transparent outline-none text-gray-400 placeholderbg-gray-400 appearance-none"><a className="mb-2 font-cuprum text-2xl " > {prop.headerText}</a></div>   
      <select className="w-2/3 font-cuprum text-2xl border-solid border-b-2 border-black bg-transparent outline-none text-white placeholderbg-gray-400 appearance-none text-center" id={prop.id}>{generateOptionValues(prop.values)}</select>
    </div>
  );
}
export function ListInputNormalForm(prop) {
  return (
    <div>
      <div className="border-solid  border-black bg-transparent outline-none text-main-blue  appearance-none"><a className="font-cuprum text-3xl " > {prop.headerText}</a></div>   
      <select className="mt-6 mx-auto w-5/6 font-cuprum text-2xl border-solid border-b-2 border-black  outline-none text-main-blue placeholder  appearance-none text-center" id={prop.id}>{generateOptionValues(prop.values)}</select>
    </div>
  );
}

class Prop {
  headerText;
  values;
  id;
}

export function generateOptionValues(values) {
  return values.map((value) => {
    return <option value={value}> {value}</option>;
  });
}


