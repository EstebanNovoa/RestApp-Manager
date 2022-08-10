import { Header } from "../components/Header"
import { Food } from "../components/food"
import { Order } from "../components/order"
import { OrderHistory } from "../components/orderHistory"
import { Button } from "../components/buttonC";
import search from "../resources/icons/search.png"
import filter from "../resources/icons/filter.png"
import "../styleSheets/foodContent.css"
import "../styleSheets/confirmation.css"
import "../styleSheets/slider.css"
import "../styleSheets/booking.css"
import "../styleSheets/myOrders.css"
import "../styleSheets/subHeader.css"
import user from "../resources/icons/user2.png"
import date from "../resources/icons/calendar.png"
import hourIcon from "../resources/icons/clock.png"
import people from "../resources/icons/people.png"
import downArrow from "../resources/icons/downArrow.png"
import React from 'react';
import { useState } from "react";
import { DatePicker } from "@material-ui/pickers";

export function InitClient() {

    const [dateValue, changeDate] = useState(new Date());

    const [numItems, setNumItems] = useState(1);
    const [hour, setHour] = useState(17);
    const [minutes, setMinutes] = useState(32);

    const addMinutes = () => {
        if (minutes < 60) {
            setMinutes(minutes + 1)
        } else {
            setMinutes(minutes - 60)
        }
    }

    const quitMinutes = () => {
        if (minutes > 0) {
            setMinutes(minutes - 1)
        } else {
            setMinutes(minutes + 60)
        }
    }

    const addHour = () => {
        if (hour < 24) {
            setHour(hour + 1)
        } else {
            setHour(hour - 24)
        }
    }

    const quitHour = () => {
        if (hour > 0) {
            setHour(hour - 1)
        } else {
            setHour(hour + 24)
        }
    }

    const addItems = () => {
        setNumItems(numItems + 1);
    }

    const quitItems = () => {
        if (numItems > 1) {
            setNumItems(numItems - 1);
        }
    }

    return (

        <div className="App">

            <script src="../styleSheets/popUp.js"></script>

            <Header />

            {/* Contenedor con icono de usuario y 4 textos */}

            <div className="contenedor-subHeader">
                <button className="button-image">
                    <img src={user} className="img-user" />
                </button>
                <a href="#food" className="item1">Inicio</a>
                <a href="#confirmationOrders" className="item3">Pedir</a>
                <a href="#booking" className="item2">Reservar</a>
                <a href="#orders" className="item4">Mis pedidos</a>
            </div>

            {/* Contenedor del carrusel */}
            <div className="generalContainer" >
                <ul className="carrusel" >
                    <li id="food">

                        {/* Contenedor correspondiente de la lista de comidas */}
                        <div className="foodContent" id="divFood">
                            <div className="items">
                                <a className="textSearch">Buscar platos</a>
                                <div className="searchDiv">
                                    <input type="text" className="inputText" />
                                    <img src={search} className="searchIcon" />
                                </div>

                                <button className="filter">
                                    <a className="filterText">Filtrar</a>
                                    <img src={filter} className="filterIcon" />
                                </button>
                            </div>
                            <div className="container">
                                <Food />
                                <Food />
                                <Food />
                            </div>

                            <div className="popUp" id="popUp">

                                <div className="text">
                                    <a>¡ El item  se ha añadido al carrito !</a>
                                </div>

                                <div className="containerButton">
                                    <button>
                                        <a> Aceptar </a>
                                    </button>
                                </div>

                            </div>

                        </div>
                    </li>

                    <li id="confirmationOrders">

                        {/* Contenedor correspondiente a la confirmación de pedidos */}
                        <div className="divConfirm">
                            <div className="items">
                                <a className="textSearch">Confirma tu pedido</a>
                            </div>
                            <div className="divList">
                                <Order />
                                <Order />
                                <Order />
                            </div>

                            <div className="totalDiv">
                                <div className="total"><a>Total</a></div>
                                <div className="value"><a>$154.000</a></div>
                                <div className="button"><button> <a>Confirmar pedido</a> </button></div>
                            </div>
                        </div>
                    </li>

                    <li id="booking">

                        {/* Contenedor correspondiente a la separación de reservas */}
                        <div className="divBooking">
                            <div className="items">
                                <a className="textSearch">Separa tu reserva</a>
                            </div>

                            <div className="containerBooking">
                                <div className="divDate">
                                    <div className="date">
                                        <div className="imgD"><img src={date} /></div>
                                        <div className="divButtonArrow">
                                            <div className="divPicker">
                                                <DatePicker className='datePicker' value={dateValue} onChange={changeDate}
                                                    minDate={new Date()}
                                                />
                                                <img className="iconDate" src={downArrow} />
                                            </div>

                                        </div>
                                    </div>

                                    <div className="f">
                                        <a>Fecha</a>
                                    </div>

                                    <div className="hour">
                                        <div className="imgH"><img src={hourIcon} /></div>
                                        <div className="divArrows">
                                            <div className="arrowsHour">
                                                <Button isUpArrow={true} event={addHour} />
                                                <Button isDownArrow={true} event={quitHour} />
                                            </div>
                                            <div className="valueHour"> <a> {hour}:{minutes}</a></div>
                                            <div className="arrowsMinutes">
                                                <Button isUpArrow={true} event={addMinutes} />
                                                <Button isDownArrow={true} event={quitMinutes} />
                                            </div>
                                        </div>
                                    </div>
                                    <div className="h">
                                        <a>Hora</a>
                                    </div>

                                    <div className="amount">
                                        <div className="imgP"><img src={people} /></div>
                                        <div className="divButtonsPeople">
                                            <Button isAddButton={true} event={addItems} />
                                            <div className="valueAmount"><a> {numItems}</a></div>
                                            <Button event={quitItems} />
                                        </div>
                                    </div>

                                    <div className="p">
                                        <a>Personas</a>
                                    </div>


                                </div>

                                <div className="divAcept">
                                    <div className="question"><a href="">¿Cuándo te veremos?</a></div>
                                    <div className="buttonB">
                                        <button>
                                            <a>Reservar</a>
                                        </button>
                                    </div>
                                </div>

                            </div>
                        </div>
                    </li>

                    <li id="orders">

                        {/* Contenedor correspondiente a la lista de ordenes */}
                        <div className="divMyOrders">
                            <div className="items">
                                <a className="textSearch">Todos tus pedidos</a>
                                <button className="filter">
                                    <a className="filterText">Filtrar</a>
                                    <img src={filter} className="filterIcon" />
                                </button>
                            </div>

                            <div className="contentHistories">
                                <OrderHistory />
                                <OrderHistory />
                                <OrderHistory />
                            </div>

                            <div className="divTotalHistories">
                                <a>Total de pedidos: 3</a>
                            </div>
                        </div>
                    </li>

                </ul>
            </div>

            {/* Puntos inferiores para demarcar la poisción del carrusel */}
            <ul className="points">
                <li className="punto activo"></li>
                <li className="punto" id="dos"></li>
                <li className="punto"></li>
                <li className="punto"></li>
            </ul>
        </div>
    );
}

