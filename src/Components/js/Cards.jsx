import React,{Fragment,useState } from "react";
import Carrito from "../Carrito";
let temporal;
const cards = document.getElementById('cards');


const Cards = (props) => {
  let array2 =[];
  const [productos, setProducto] = React.useState([]);
  const [veda, setVeda] = React.useState([]);
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
   // console.log(array2.length);
    setVeda({
    id: e.target.parentElement.querySelector('button').id,
    title: e.target.parentElement.querySelector('h5').textContent,
    precio: e.target.parentElement.querySelector('p').textContent,
    imagen:e.target.parentElement.querySelector('img').getAttribute("src"),
    cantidad: 1
    })
    //console.log(array2);
    console.log(array2);

    localStorage.setItem('elemento', JSON.stringify(veda))
    //console.log(localStorage.getItem('elemento'))
    //convierte el json en un array
    //console.log(JSON.parse(localStorage.getItem('elemento')))
    //console.log(array2);
    //console.log(veda[e.target.dataset.id])
   // console.log(Object.values(e));
   // console.log(footer.parentElement.querySelector('th').innerHTML="Hola");

  //console.log(e.target.parentElement.querySelector('button').id);
  //e.target.parentElement.querySelector('h5').textContent = producto.title;

}
//escucha el boton comprar
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
          <Carrito arr={veda}/>

      </React.Fragment>
  );
  }
export default Cards;