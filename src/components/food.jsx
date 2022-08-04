import React from "react";
import comida from "../images/comida.jpg";
import add from "../resources/icons/add.png";
import minus from "../resources/icons/minus.png";
import "../styleSheets/food.css"

export function Food() {
    return (
        <div className="contenedorComida">
            <div className="imagenYContador">

                <div className="divImagen">
                    <img className="imagenComida"
                        src={comida}
                    />
                </div>
                <div className="divBotones">
                    <button className="buttonAdd">
                        <img className="addIcon" src={add} />
                    </button>

                    <div className="cantidadComida">
                        <p>1</p>
                    </div>

                    <button className="buttonMinus">
                        <img className="removeIcon" src={minus} />
                    </button>
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
                <button className="botonAñadir"> <a>Añadir</a></button>
            </div>
        </div>
    );
}
