import React from "react"
import add from "../resources/icons/add.png";
import minus from "../resources/icons/minus.png";
import close from "../resources/icons/close.png";
import upArrow from "../resources/icons/upArrow.png"
import downArrow from "../resources/icons/downArrow.png"
import "../styleSheets/button.css";

export function Button ( { isAddButton, isCloseButton, isUpArrow, isDownArrow, event} ) {
    return (
        <button className={ isAddButton ? "buttonAdd" : "buttonQuit"}
         onClick = { event }   
        >
            <img src={ isAddButton ? add : isCloseButton ? close : isUpArrow ? upArrow : isDownArrow ? downArrow : minus} alt="" />
        </button>
    )
}
