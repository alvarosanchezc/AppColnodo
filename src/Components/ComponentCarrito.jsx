import React from "react";
import "./Styles/contacto.css";
import "./Styles/estilos.css";
import "./Styles/font.css";
import Modal from "./modal";
import Carrito from "./js/Carrito";

class ComponentCarrito extends React.Component {
  render() {
    return (
      <React.Fragment>
      <Modal/>
        <div className="container">
          <Carrito/>
         </div>
          
      </React.Fragment>
    );
  }
}
export default ComponentCarrito;