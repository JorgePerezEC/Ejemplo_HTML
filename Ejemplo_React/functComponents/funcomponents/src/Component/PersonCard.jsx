import React from "react";
import '../styles/personC.css';

class PersonCard extends React.Component{
    aceptarHandler(e){
        //console.log(e)
        e.stopPropagation();
        console.log('Ejecutando componente hijo');
    }
    
    containerHandler(){
        console.log('Ejecutando componente padre');
    }

    constructor(props){
        super(props);
        this.state = {
            edad : props.edad
        }
        this.ageHandler = this.ageHandler.bind(this);
    }
    
    ageHandler(){
        this.setState({edad: this.state.edad+1});
    }
    
    render(){
        console.log("Props de PersonCard", this.props);
        const {name,city,country,address,img} = this.props; //Desestructuración
        
        return(
            <div  onClick={this.containerHandler} className="container">
                {/*<h1>{this.props.name}</h1>
                <h3>{this.props.city}</h3>
                <h3>{this.props.country}</h3>
                <h5>{this.props.address}</h5>
                <hr/>*/}
                <img src={img} alt={name}/>
                <h1>{name}</h1>
                <h3>{city}</h3>
                <h3>{country}</h3>
                <h5>{address}</h5>
                {/*<h4>{edad}</h4>*/}
                <h4>{this.state.edad}</h4>
                <button onClick={this.aceptarHandler}>Aceptar</button>
                <button className="btnInc" onClick={this.ageHandler}>Incrementar edad</button>
                {this.props.children}
            </div>
        );
    }
}

export default PersonCard;