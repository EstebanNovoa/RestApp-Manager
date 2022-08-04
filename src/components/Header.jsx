import React from "react";
import headerLine from "../resources/icons/headerLine.png";
import "../styleSheets/header.css"

export function Header() {
    return (
        <div className="contenedor-header">
            <img src={headerLine} className="linea-izquierda"></img>
            <a className="Title">RestApp</a>
            <img src={headerLine} className="linea-derecha"></img>
        </div>
    );
}
