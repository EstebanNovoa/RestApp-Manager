import { Header } from "../components/Header"
import { Food } from "../components/food"
import { Order } from "../components/order"
import { OrderHistory } from "../components/orderHistory"
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
import hour from "../resources/icons/clock.png"
import people from "../resources/icons/people.png"
import upArrow from "../resources/icons/upArrow.png"
import downArrow from "../resources/icons/downArrow.png"
import minus from "../resources/icons/minus.png"
import add from "../resources/icons/add.png"
import React from 'react';

export function InitClient() {
    return (

        <div className="App">
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
                                <div className="total"><a href="">Total</a></div>
                                <div className="value"><a href="">$154.000</a></div>
                                <div className="button"><button> <a href="">Confirmar pedido</a> </button></div>
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
                                            <button className="buttonDate">
                                                <a href="">17/06/2000</a>
                                                <img className="iconDate" src={downArrow} />
                                            </button>
                                        </div>
                                    </div>

                                    <div className="f">
                                        <a>Fecha</a>
                                    </div>

                                    <div className="hour">
                                        <div className="imgH"><img src={hour} /></div>
                                        <div className="divArrows">
                                            <div className="arrowsHour">
                                                <button><img src={upArrow} /></button>
                                                <button><img src={downArrow} /></button>
                                            </div>
                                            <div className="valueHour"> <a>19:20</a></div>
                                            <div className="arrowsMinutes">
                                                <button><img src={upArrow} /></button>
                                                <button><img src={downArrow} /></button>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="h">
                                        <a>Hora</a>
                                    </div>

                                    <div className="amount">
                                        <div className="imgP"><img src={people} /></div>
                                        <div className="divButtonsPeople">
                                            <button><img src={minus} /></button>
                                            <div className="valueAmount"><a>1</a></div>
                                            <button><img src={add} /></button>
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
                                            <a href="">Reservar</a>
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
                                <OrderHistory/>
                                <OrderHistory/>
                                <OrderHistory/>
                            </div>

                            <div className = "divTotalHistories">
                                <a href="">Total de pedidos: 3</a>
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

