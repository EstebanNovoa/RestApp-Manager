import { Link } from "react-router-dom";
import accountIcon from "../../resources/icons/account.png"
import headerLine from "../../resources/icons/lineBlock.png"

export function NavBarAdmin(){
    return(
        <div>
        <ul className="font-cuprum text-xl text-white underline w-screen mt-5 grid grid-cols-6 text-center ml-12">
            <Link to= "/homeAdmin"><li ><a>Inicio</a></li></Link>
            <Link to= ""><li ><a>Reservaciones</a></li></Link>
            <Link to= ""><li ><a>Administrar Mesas</a></li></Link>
            <Link to= ""><li ><a>Administrar Menú</a></li></Link>
            <Link to= ""><li><a>Pedidos</a></li></Link>
            <Link to= ""><img className="w-11 h-11 -mt-2 inline mr-24" src={accountIcon}></img></Link>
        </ul>
        <div className="mt-16 w-5/6 mx-auto"><img src={headerLine}></img></div>
        </div>
    );
}

class Props{
    linkHome;
    linkBooking;
    linkManageMenu;
    linkManageTables;
    linkManageOrders;
    linkManageAccount;
}