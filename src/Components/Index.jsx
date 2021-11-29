import React, {useEffect} from "react";
import "./Styles/AboutUs.css";


const Index =(props)=> {
const [servicios, setServicio] = React.useState([]);
useEffect(() => {
    obtenerDatos();
  }, []);
  
  //llamar al json
    const obtenerDatos = async () => {
    const dato = await fetch('https://dotnetrestaurante.herokuapp.com/api/servicio');
    const informacion = await dato.json();
    setServicio(informacion);
    obtenerDatos();
  };
const [clientes, setCliente] = React.useState([]);
const [productos, setProducto] = React.useState([]);
  useEffect(() => {
    obtenerDatosPlatoEspecial();
  }, []);
  //llamar al json
    const obtenerDatosPlatoEspecial = async () => {
    const dato = await fetch('https://dotnetrestaurante.herokuapp.com/api/platosEspeciales');
    const informacion = await dato.json();
    setProducto(informacion);
  };
  useEffect(() => {
    obtenerDatosComentario();
  }, []);
   //llamar al json
    const obtenerDatosComentario = async () => {
    const dato = await fetch('https://dotnetrestaurante.herokuapp.com/api/comentario');
    const informacion = await dato.json();
    setCliente(informacion);
  };
    return (
      <React.Fragment>
       		<main className="main">
       			<section className="group group--color">
           			<div className="container">
               			<h2 className="main__title">Bienvenido Italian Food</h2>
               				<p className="main__txt">Italian Food considerado por muchos el mejor restaurante de comida italiana de la ciudad, te invitamos a vivir la experiencia en nuestras instalaciones tematizadas en la bella itaila donde podras degustar tu paladar con los mejores y mas exclusivos platos italianos que puedas encontrar</p>
           			</div>
       			</section>
       			<section>
        			<h2 className="group--title">Nuestros eventos</h2>
        		<div className="card-group">
             {servicios.map((item) => (
              <div class="col-12 mb-2 col-md-4">
            <div className="card">
              <img src={item.imagen} className="card-img-top" alt={item.nombre} height="288" />
              <div className="card-body">
                <h5 className="card-title">{item.nombre}</h5>
                <p className="card-text">{item.descripcion}</p>
            
              </div>
            </div>
            </div>
              ))}
          </div>
       </section>
      
       <section className="group today-special">
           <h2 className="group--title">Especiales del dia </h2>
           <div className="container container--flex">
               {productos.map((item=>

               <div className="column column--50-25">
                   <img src={item.imagen} alt={"imagen de "+item.nombre} className="today-special__img" />
                   <div className="today-special__title">{item.nombre}</div>
                   <div className="today-special__price">{item.precio}</div>
               </div>
      ))}
               <a href="menu" class="btn btn-danger">Ver menu </a>
           </div>
       </section>
        <section>
        <h2 className="group--title">Testimonios</h2>
        <div className="group our-team">
            <div className="row">
            {clientes.map((item) => (
              <div className="col-lg-4">
                <img src={item.imagen} alt="imagen de maria" className="our-team__img" />
                <h2>{item.nombre}</h2>
                <p>{item.Comentario}</p>
              </div>
               ))}
            </div>
          </div>
      </section> 
   </main>
      </React.Fragment>
    );
  }

export default Index;
