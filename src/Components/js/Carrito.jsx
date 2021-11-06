import React from "react";

const Carrito = () => {

  const [productos, setProducto] = React.useState([])

React.useEffect(() => {
 // console.log('useEffect')
  obtenerDatos();

},[])

const obtenerDatos = async() =>{
  const data = await fetch('api.json');
  const informacion = await data.json();
 // console.log(elementos)
  setProducto(informacion)
}
return (


  <div className="row" id="cards">
      {


        productos.map(item =>(
          
           <div class="col-12 mb-2 col-md-4">
        <div class="card">
             <div class="card-body">
            <img src="{item.thumbnailUrl}" alt="" class="card-img-top"/>
            <h5>{item.title}</h5>
            <p>{item.precio}</p>
            <button class="btn btn-dark" data-bs-toggle="modal" data-bs-target="#exampleModal1" data-id="1">Comprar</button>
          </div>
        </div>
      </div>
          ))
      }
        </div>
  )};

export default Carrito;
