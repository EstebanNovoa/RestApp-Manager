import React from "react";
import close from "../resources/icons/close.png";
import "../styleSheets/orderHistory.css"

export function OrderHistory() {
    return (
        <div className="containerHistory">
            <div className="textClose">
                <div className="textOrder"><a>Pedido realizado el 29/03/2022</a></div>
                <div className="divButtonClose"><img src={close}/></div>
            </div>

            <div className="otherText">
                <div className="valueOrder"><a>Total del pedido: $450.000</a></div>
                <div><a>Cantidad de items: 3</a></div>
                <div><a>Con reserva: No</a></div>
            </div>
        </div>
    );
}
