import React, { useEffect } from 'react';
import Carrito from "./Carrito";
import axios from "axios";

const Cards = (props) => {
  const [productos, setProducto] = React.useState([]);
  const [data, setData] = React.useState([]);
  useEffect(() => {
    obtenerDatos();
  }, []);
  //llamar al json
    const obtenerDatos = async () => {
    const dato = await fetch('https://dotnetrestaurante.herokuapp.com/api/plato');
    const informacion = await dato.json();
    setProducto(informacion);
  };
//agrega productos a la tabla de pedidos
  const agregarProductos = async (e) =>{
    let nuevoProducto = {
      Cliente_id : 1,
      Plato_id :  e.target.parentElement.querySelector('button').id
    };
    await axios.post("https://dotnetrestaurante.herokuapp.com/api/pedido", nuevoProducto)
    .then(response=>{
      setData(data.concat(response.data));
      alert("producto agregado");
      obtenerDatos();
    })
}

return (

<React.Fragment>
    <div className="row" id="cards">
      {productos.map((item) => (
        <div class="col-12 mb-2 col-md-4">
          <div class="card">
            <div class="card-body">
              <img
                src={item.imagen}
                alt={"imagen de " + item.nombre}
                class="card-img-top"
                id="img-cards"
              />
              <h5>{item.nombre}</h5>
              <p>{item.precio}</p>
              <button
                id={item.id}
                onClick={agregarProductos}
                class="btn btn-danger"
                data-bs-toggle="modal"
                data-bs-target="#exampleModal1"
                name="Plato_id"
              >
                Comprar
              </button>
            </div>
          </div>
        </div>
      ))
      }
</div>

<div id="root"></div>
         <Carrito/>
      </React.Fragment>
  );
  }
export default Cards;