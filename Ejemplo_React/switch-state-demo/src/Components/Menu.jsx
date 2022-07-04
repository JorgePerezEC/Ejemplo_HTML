import React from "react";

class Menu extends React.Component{
    render(){

        return(
            <div className="menu">
                <ul className="lista">
                    <li>Home</li>
                    <li>Products</li>
                    <li>Contact us</li>
                </ul>
            </div>
        );
    }
}

export default Menu;