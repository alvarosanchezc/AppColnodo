import React from "react";
import "./Styles/contacto.css";
import "./Styles/estilos.css";
import "./Styles/font.css";

class Carrito extends React.Component {
  render() {
    return (
      <React.Fragment>
        <div
          class="modal fade"
          id="exampleModal1"
          tabindex="-1"
          aria-labelledby="exampleModalLabel"
          aria-hidden="true"
        >
          <div class="modal-dialog">
            <div class="modal-content">
              <div class="modal-header">
                <h5 class="modal-title">Confirmación</h5>
                <button
                  type="button"
                  class="btn-close"
                  data-bs-dismiss="modal"
                  aria-label="Close"
                ></button>
              </div>
              <div class="modal-body">
                <p>¿está seguro que desea agregar este producto al carrito?</p>
              </div>
              <div class="modal-footer">
                <button
                  type="button"
                  class="btn btn-secondary"
                  data-bs-dismiss="modal"
                >
                  Cancelar
                </button>
                <button
                  type="button"
                  class="btn btn-darkk"
                  data-bs-dismiss="modal"
                >
                  Si, Confirmo
                </button>
              </div>
            </div>
          </div>
        </div>

        <template id="template-card">
          <div class="col-12 mb-2 col-md-4">
            <div class="card">
              <div class="card-body">
                <img
                  src=""
                  alt="descripcion de la imagen"
                  class="card-img-top"
                />
                <h5>Titulo</h5>
                <p>precio</p>
                <button
                  class="btn btn-dark"
                  data-bs-toggle="modal"
                  data-bs-target="#exampleModal1"
                >
                  Comprar
                </button>
              </div>
            </div>
          </div>
        </template>

        <div class="container">
          <h1>
            <center>Carrito</center>
          </h1>
          <hr />

          <div class="row" id="cards"></div>
        </div>

        <template id="template-carrito">
          <tr>
            <th scope="row">id</th>
            <td>Café</td>
            <td>1</td>
            <td>
              <img src="" alt="" class="img-miniatura" />
            </td>
            <td>
              <button class="btn btn-info btn-sm">+</button>
              <button class="btn btn-danger btn-sm">-</button>
            </td>
            <td>
              $ <span>500</span>
            </td>
          </tr>
        </template>

        <table class="table">
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
            <button class="btn btn-danger btn-sm" id="vaciar-carrito">
              vaciar todo
            </button>
          </td>
          <td>
            <button class="btn btn-danger btn-sm" id="confirmar-pedido">
              Finalizar Pedido
            </button>
          </td>
          <td class="font-weight-bold">
            $ <span>5000</span>
          </td>
        </template>
      </React.Fragment>
    );
  }
}
export default Carrito;
