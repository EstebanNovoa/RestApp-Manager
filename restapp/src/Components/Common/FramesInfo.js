import lineHeader from "../../resources/icons/headerLine.png";
import { FilterField } from "./FilterField";
export function FrameInfo(props) {
  return (
    <div className="w-2/3 h-2/3 mx-auto bg-white mt-10 pt-5">
      <div>
        <div>
          <a className="text-left font-cuprum font-bold text-3xl text-main-blue ml-10 ">
            {props.header}
          </a>
          <div className="float-right mr-5 mt-2">
            <FilterField filterOptions={props.filterOptions}></FilterField>
          </div>
        </div>
        <img
          src={lineHeader}
          className="h-0.5 w-full mx-auto pl-2 pr-2 mt-2"
        ></img>
      </div>
      <div className="w-5/6 h-2/3 mx-auto mt-7 grid grid-cols-3">{props.child}</div>

    </div>
  );
}

class Props {
  header;
  child;
  filterOptions;
}

export function generateOptionList(values) {
  return values.map((value) => {
    console.log(value);
    return <option value={value}> {value}</option>;
  });
}
