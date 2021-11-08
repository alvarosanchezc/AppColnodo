import React from "react";
import "./Styles/contacto.css";
import "./Styles/estilos.css";
import "./Styles/font.css";
import Modal from "./modal";
import Cards from "./js/Cards";

class ComponentCarrito extends React.Component {
  render() {
    return (
      <React.Fragment>
      <Modal/>
        <div className="container" id="template-cards">
          <Cards/>
         </div>
      </React.Fragment>
    );
  }
}
export default ComponentCarrito;