import React, { useEffect } from 'react';
import Carrito from "./Carrito";

const Cards = (props) => {
  const [productos, setProducto] = React.useState([]);
  let veda=[];
  let nuevoObjeto={};
  let contador=1;
  useEffect(() => {
    console.log("ya cargue")
    obtenerDatos();
  }, []);
  //llamar al json
    const obtenerDatos = async () => {
    const data = await fetch("/api.json");
    const informacion = await data.json();
    setProducto(informacion);
  
  };

  const pintarCarrito= async (e) =>{
   // console.log(array2.length);
   // if (e.target.parentElement.querySelector('button').id===veda[e.target.parentElement.querySelector('button').id].nuevoObjeto.id) {
   console.log(Object.keys(nuevoObjeto).length=== 0); 
   nuevoObjeto = { 
    id : e.target.parentElement.querySelector('button').id,
    title : e.target.parentElement.querySelector('h5').textContent,
    precio : e.target.parentElement.querySelector('p').textContent,
    imagen :e.target.parentElement.querySelector('img').getAttribute("src"),
    cantidad:1
    }

    veda[e.target.parentElement.querySelector('button').id-1]= nuevoObjeto
    console.log(veda);
    //console.log(contador++);
    //console.log(nuevoObjeto2)
    //[e.target.parentElement.querySelector('button').id]
    
  
  
    //console.log(e.target.parentElement.querySelector('button').id===veda[e.target.parentElement.querySelector('button').id].nuevoObjeto.id);
    //comparar
    //console.log(veda[e.target.parentElement.querySelector('button').id].nuevoObjeto.id)
    localStorage.setItem('elemento', JSON.stringify(veda))
    //console.log(nuevoObjeto)
    //console.log(array2);
    //console.log(array2);
    //veda . id
   // console.log(veda[e.target.parentElement.querySelector('button').id].nuevoObjeto.id);
    //localStorage.setItem('elemento', JSON.stringify(veda))
    
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
      ))
      }
</div>

<div id="root"></div>
         <Carrito arr={veda}/>
      </React.Fragment>
  );
  }
export default Cards;