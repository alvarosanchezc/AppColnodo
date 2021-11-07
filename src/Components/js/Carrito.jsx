import React,{Fragment,useState } from "react";
let temporal;

const Carrito = (props) => {
  const [productos, setProducto] = React.useState([]);
  const [veda, setVeda] = React.useState({});
  React.useEffect(() => {
    obtenerDatos();
  }, []);
  //llamar al json
    const obtenerDatos = async () => {
    const data = await fetch("api.json");
    const informacion = await data.json();
    setProducto(informacion);
  };

  const pintarCarrito= async (e) =>{
    setVeda({
    id: e.target.parentElement.querySelector('button').id,
    title: e.target.parentElement.querySelector('h5').textContent,
    precio: e.target.parentElement.querySelector('p').textContent,
    imagen:e.target.parentElement.querySelector('img').getAttribute("src"),
    cantidad: 1
    })
    console.log();

  //console.log(e.target.parentElement.querySelector('button').id);
  //e.target.parentElement.querySelector('h5').textContent = producto.title;
}

return (

<React.Fragment>
    <div className="row" id="cards">
      {productos.map((item) => (
        <div class="col-12 mb-2 col-md-4">
          <div class="card">
            <div class="card-body">
              <img
                src={item.thumbnailUrl}
                alt={"imagen de " + item.title}
                class="card-img-top"
              />
              <h5>{item.title}</h5>
              <p>{item.precio}</p>
              <button
                id={item.id}
                onClick={pintarCarrito}
                class="btn btn-dark"
                data-bs-toggle="modal"
                data-bs-target="#exampleModal1"
                key={item.id}
              >
                Comprar
              </button>
            </div>
          </div>
        </div>
      ))}
</div>
      
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
              <th scope="row">{veda.id}</th>
              <th scope="row">{veda.title}</th>
              <th scope="row">{veda.cantidad}</th>
              <th scope="row"><img
                src={veda.imagen}
                alt={"imagen de " + veda.title}
                class="card-img-top"
              /></th>
              <th scope="row">{}</th>
              <th scope="row">{}</th>
              <th scope="row">{}</th>
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