import React, { useEffect } from 'react';
import axios from "axios";
const Carrito = (props) => {
  const [listaPedido, setListaPedido] = React.useState([]);
  const [totalPedido, setTotalPedido] = React.useState([]);

useEffect(() => {
    obtenerDatos();
  }, []);
  //llamar al json
    const [data, setData] = React.useState([]);
    const obtenerDatos = async () => {
    const dato = await fetch('https://dotnetrestaurante.herokuapp.com/api/pedido');
    const informacion = await dato.json();
    setListaPedido(informacion);
    obtenerDatos();
  };
  useEffect(() => {
    obtenerTotal();
  }, []);
  const obtenerTotal = async () => {
    const dato = await fetch('https://dotnetrestaurante.herokuapp.com/api/totalPedido');
    const informacion = await dato.json();
    setTotalPedido(informacion);
    obtenerTotal();
  };

function showContent() {
  var temp = document.getElementsByTagName("template")[0];

  document.body.appendChild(temp);
}
const borrarPedido = (id) => {
console.log(id)
    fetch("https://dotnetrestaurante.herokuapp.com/api/pedido/" + id, {
      method: "DELETE",
    })
      .then((response) => response.json())
      .then((data) => {
        console.log(data)
        alert("dato eliminado");
        obtenerDatos();

      });
  }
const agregarProductos = async (e) =>{
    let nuevoProducto = {
      Cliente_id : 1,
      Plato_id :  e.target.id
    };
    console.log(e.target.id);
    await axios.post("https://dotnetrestaurante.herokuapp.com/api/pedido", nuevoProducto)
    .then(response=>{
      setData(data.concat(response.data));
      obtenerDatos()
    })
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
              <th scope="row"><button id={item.id} class="btn btn-info" onClick={agregarProductos}>
                +
            </button>
           
              <th scope="row">  <button class="btn btn-danger" onClick={() => borrarPedido(item.pedidoId)}>
                -
            </button></th></th>
              <th scope="row">{item.subtotal}</th>
              </tr> 
              </tbody>
               ))}
           <tfoot>
            <th scope="row" colspan="2">
            Total productos
          </th>
          {totalPedido.map((item=>
          <td><b>{item.cantidad}</b></td>
          ))}
          <td>
            <button className="btn btn-danger" id="vaciar-carrito">
              vaciar todo
            </button>
          </td>
          <th>
            <button className="btn btn-danger" id="confirmar-pedido">
              Finalizar Pedido
            </button>
          </th>
          {totalPedido.map((item=>
          <td className="font-weight-bold">
            <b>$ <span>{item.total}</span></b>
          </td>
))}
             <tr id="footer">
            <th scope="row" colspan="5">
                
              </th>
            </tr>

          </tfoot>

        </table>

        <template id="template-footer">
        </template>  

      </React.Fragment>
  );
  }
export default Carrito;