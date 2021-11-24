import React, { useEffect } from 'react';

const Carrito = (props) => {
  const [listaPedido, setListaPedido] = React.useState([]);

useEffect(() => {
    obtenerDatos();
  }, []);
  //llamar al json
    const obtenerDatos = async () => {
    const dato = await fetch('http://localhost:5000/api/pedido/');
    const informacion = await dato.json();
    setListaPedido(informacion);
    showContent();
  };

function showContent() {
  var temp = document.getElementsByTagName("template")[0];
 
  document.body.appendChild(temp);
}

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
          {listaPedido.map((item) => (
          <tbody id="items">
          
              <tr>
              <th scope="row">{item.id}</th>
              <th scope="row">{item.nombre}</th>
              <th scope="row">{item.cantidad}</th>
              <th scope="row"><img
                className="img-miniatura"
                src={item.imagen}
                alt="kk"
              /></th>
              <th scope="row"></th>
              <th scope="row"></th>
              <th scope="row">{item.subtotal}</th>
              </tr> 
              </tbody>
              ))}
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
          <td>kfkkf</td>
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