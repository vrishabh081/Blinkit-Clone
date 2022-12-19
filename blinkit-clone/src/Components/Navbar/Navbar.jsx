import logo from "../Images/blinkit.png";
import { Location } from "./Location";
import "./Navbar.css";

export function Navbar()
{
    return (
        <div id="navbar-div">
            <div id="div-1">
                <img src={logo} id="logo"/>
            </div>
            <div id="div-2">
                <p>Delivery in 12 minutes</p>
                <Location/>
            </div>
            <div id="div-3">
                <div>
                    <ion-icon name="search"></ion-icon>
                </div>
                <div>
                    <input 
                        type="text" 
                        placeholder="Search for products"
                    />
                </div>
            </div>
            <div id="div-4">
                <p>Login</p>
            </div>
            <div id="div-5">
                <div><ion-icon name="cart-outline"></ion-icon> </div>
                <div><p>My Cart</p></div>
            </div>
        </div>
    );
}