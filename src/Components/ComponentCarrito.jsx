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
      <Carrito/>
      <Modal/>
        <div className="container">
          <h1>
            <center>Carrito</center>
          </h1>
          <hr />
          <div className="row" id="cards"></div>
        </div>

        <table className="table">
          <thead>
            <tr>
              <th scope="col">#</th>
              <th scope="col">Item</th>
              <th scope="col">Cantidad</th>
              <th scope="col">Presentación</th>
              <th scope="col">Acción</th>
              <th scope="col">Total</th>
            </tr>
          </thead>
          <tbody id="items"></tbody>
          <tfoot>
            <tr id="footer">
              <th scope="row" colspan="5">
                Carrito vacío - comience a comprar!
              </th>
            </tr>
          </tfoot>
        </table>
        <template id="template-footer">
          <th scope="row" colspan="2">
            Total productos
          </th>
          <td></td>
          <td>
            <button className="btn btn-danger btn-sm" id="vaciar-carrito">
              vaciar todo
            </button>
          </td>
          <td>
            <button className="btn btn-danger btn-sm" id="confirmar-pedido">
              Finalizar Pedido
            </button>
          </td>
          <td className="font-weight-bold">
            $ <span>5000</span>
          </td>
        </template>
      </React.Fragment>
    );
  }
}
export default ComponentCarrito;