import React from "react";
import add from "../resources/icons/add.png";
import minus from "../resources/icons/minus.png";
import close from "../resources/icons/close.png";
import "../styleSheets/order.css"

export function Order() {
    return (
        <div className="myOrder">

            <div className="textoDescripcion">
                <a>Filete de res en salsa</a>
                <button>
                    <img className="removeItem" src={close} />
                </button>
            </div>

            <div className="subTotalYBotones">
                <a href="priceU">$45.000</a>
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

        </div>
    );
}