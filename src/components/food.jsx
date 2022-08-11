import React from "react";
import comida from "../images/comida.jpg";
import { Button } from "./buttonC";
import "../styleSheets/food.css"
import { useState } from "react";

export function Food() {

    const [numItems, setNumItems] = useState(1);

    const addItems = () => {
        setNumItems(numItems + 1);
    }

    const quitItems = () => {
        if (numItems > 1) {
            setNumItems(numItems - 1);
        }
    }

    return (
        <div className="contenedorComida">

            <script src="../styleSheets/popUp.js"></script>
            
            <div className="imagenYContador">

                <div className="divImagen">
                    <img className="imagenComida"
                        src={comida}
                    />
                </div>
                <div className="divBotones">
                    <Button isAddButton={true} event={addItems} />
                    <div className="cantidadComida">
                        <p> {numItems} </p>
                    </div>

                    <Button event={quitItems} />
                </div>


            </div>

            <div className="textoDescripcion">
                <a>Filete de res en salsa</a>
                <p>Nada mejor para almorzar que este filete de res con hongos, porque es un platillo repleto de sabor. Es perfecto para sorprender a tu familia con un almuerzo más elaborado sin perder mucho tiempo en su preparación
                </p>
            </div>

            <div className="divPrecio">
                <a>Precio</a>
                <p>$47.500</p>
                <div className="buttonDiv">
                    <button className="botonAñadir" id='openPopUp'> <a>Añadir</a></button>
                </div>
            </div>

        </div>
    );
}
