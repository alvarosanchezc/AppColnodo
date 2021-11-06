import React from "react";

const Carrito = () => {
  const [productos, setProducto] = React.useState([]);
  React.useEffect(() => {
    obtenerDatos();
  }, []);
  //llamar al json
  const obtenerDatos = async () => {
    const data = await fetch("api.json");
    const informacion = await data.json();
    setProducto(informacion);
  };

  return (
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
                class="btn btn-dark"
                data-bs-toggle="modal"
                data-bs-target="#exampleModal1"
                data-id={item.id}
              >
                Comprar
              </button>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};


export default Carrito;