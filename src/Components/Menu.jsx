import React, {useEffect}  from "react";
import axios from "axios";

const Menu = (props) => {
const [data, setData] = React.useState([]);
const [productos, setProducto] = React.useState([]);
useEffect(() => {
    obtenerDatos();
  }, []);
  
  //llamar al json
    const obtenerDatos = async () => {
    const dato = await fetch('https://dotnetrestaurante.herokuapp.com/api/plato');
    const informacion = await dato.json();
    setProducto(informacion);
  };

  const agregarProductos = async (e) =>{
    console.log(e.target.id);
    let nuevoProducto = {
      Cliente_id : 1,
      Plato_id :  e.target.id
    };
    console.log(e.target.id);
    await axios.post("https://dotnetrestaurante.herokuapp.com/api/pedido", nuevoProducto)
    .then(response=>{
      setData(data.concat(response.data));
      alert("producto agregado al carrito");
      obtenerDatos()
    })
}
    return (
      <React.Fragment>
      
        <div class="group gallery">
          <h2 class="group__title">Nuestro Menú</h2>
          
          <div class="container container--flex">
            <div class="row row-cols-1 row-cols-md-3 g-4">
              {productos.map((item) => (
              <div class="col">
                <div class="item card h-100">

                  <img
                    src={item.imagen}
                    className="item-img card-img-top"
                    alt="..."
                  />  
                  <div class="card-body">
                    <h5 class="item-name card-title">{item.nombre}</h5>
                    <p class="card-text">
                      {item.descripcion}
                    </p>
                    <h2 class="item-price ">$ {item.precio} </h2>
                  </div>

                  <button onClick={agregarProductos}
                    id={item.id}
                    type="button"
                    class="btn btn-danger"
                    data-bs-toggle="modal"
                    data-bs-target="#exampleModal0"
                  >
                    Agregar al carrito
                  </button>

                  <div
                    class="modal fade"
                    id="exampleModal0"
                    tabindex="-1"
                    aria-labelledby="exampleModalLabel"
                    aria-hidden="true"
                  >
                    <div class="modal-dialog">
                      <div class="modal-content">
                        <div class="modal-header">
                          <h5 class="modal-title" id="exampleModalLabel">
                            Modal title
                          </h5>
                          <button
                            type="button"
                            class="btn-close"
                            data-bs-dismiss="modal"
                            aria-label="Close"
                          ></button>
                        </div>
                        <div class="modal-body">
                          <p>
                            esta seguro que desea agregar este producto al carro
                            de compras?
                          </p>
                        </div>
                        <div class="modal-footer">
                          <button
                            type="button"
                            class="btn btn-secondary"
                            data-bs-dismiss="modal"
                          >
                            Cerrar
                          </button>
                          <button
                            type="button"
                            class="btn btn-primary addtocar"
                          >
                            Si
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
    ))
      }
            </div>
          </div>
       
        </div>
     
      </React.Fragment>
    );
  
}
export default Menu;
