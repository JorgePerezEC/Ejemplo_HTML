import React from "react";
import '../styles/menuStyle.css';

class Menu extends React.Component{
    render(){

        return(
            <div className="menu">
                <ul className="lista">
                    <li>Home</li>
                    <li>Contact Book</li>
                    <li>Contact us</li>
                </ul>

            </div>
        );
    }
}
//hola
export default Menu;