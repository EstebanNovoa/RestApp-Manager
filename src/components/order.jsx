import React from "react";
import { Button } from "./buttonC";
import "../styleSheets/order.css"
import { useState } from "react";

export function Order() {

    const [numItems, setNumItems] = useState(1);

    const addItems = () => {
        setNumItems(numItems + 1);
    }

    const quitItems = () => {
        if ( numItems > 1) {
            setNumItems(numItems - 1);
        }  
    }

    const deleOrder = () =>{
        console.log("tratando de cerrar ventana");
    }

    return (
        <div className="myOrder">

            <div className="textoDescripcion">
                <a>Filete de res en salsa</a>
                <div className="closeButton">
                    <Button isCloseButton={true} event = { deleOrder }/>
                </div>
                
            </div>

            <div className="subTotalYBotones">
                <a >$45.000</a>
                <div className="divBotones">

                    <Button isAddButton={true} event = { addItems }/>

                    <div className="cantidadComida">
                        <p> { numItems }</p>
                    </div>

                    <Button event = { quitItems } />

                </div>
            </div>

        </div>
    );
}