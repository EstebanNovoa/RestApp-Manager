export function FilterField(props){
    return(
        <select className=" border border-2 font-cuprum text-lg rounded-lg border-main-blue">{generateOptionList(props.filterOptions)}</select>
    );
}
class Props{
    filterOptions;
}

export function generateOptionList(values) {
    return values.map((value) => {
      console.log(value);
      return <option value={value}> {value}</option>;
    });
  }
  