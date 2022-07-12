import React from "react";
import '../styles/menuStyle.css';

class Menu extends React.Component{
    render(){

        return(
            <div className="menu">
                <div className="listU">
                    <ul className="lista">
                        <li>Home</li>
                        <li>Contact Book</li>
                        <li>Contact us</li>
                    </ul>
                </div>
                <div>
                    <p>UserName</p>
                </div>

            </div>
        );
    }
}
//hola
export default Menu;