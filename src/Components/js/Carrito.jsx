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


  <div id="template-carrito">
      {


        productos.map(item =>(
          <tr>
            <th scope="row">{item.id}</th>
            <td>{item.title}</td>
            <td>{item.id}</td>
           <td>
              <img src="{item.thumbnailUrl}" alt="" className="img-miniatura" />
            </td>
            <td>
              <button className="btn btn-info btn-sm">+</button>
              <button className="btn btn-danger btn-sm">-</button>
            </td>
            <td>
              $ <span>{item.precio}</span>
            </td>
          </tr>
          ))
      }
        </div>
  )};

export default Carrito;
