import React,{Fragment,useState } from "react";
const cards = document.getElementById('cards');
const footer = document.getElementById('footer');
const Carrito = (props) => {

return (
<React.Fragment>
<div className="container"> </div>
          <div className="row" id="cards"></div>
           <h1>
            <center>Carrito</center>
          </h1>
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
      {
              <tr>
              <th scope="row">{props.arr.id}</th>
              <th scope="row">{props.arr.title}</th>
              <th scope="row">{props.arr.cantidad}</th>
              <th scope="row"><img
                src={props.arr.imagen}
                alt={"imagen de "+props.arr.title}
                class="card-img-top"
              /></th>
              <th scope="row">{}</th>
              <th scope="row">{}</th>
              <th scope="row">{props.arr.precio*props.arr.cantidad}</th>
              </tr>
            }
          
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
export default Carrito;