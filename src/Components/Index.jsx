import React, {useEffect} from "react";
import "./Styles/AboutUs.css";
import {
    CarouselControl,
    Carousel,
    CarouselItem,
    CarouselIndicators,
} from 'reactstrap';

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
            <div className="card">
              <img src={item.imagen} className="card-img-top" alt={item.nombre} height="288" />
              <div className="card-body">
                <h5 className="card-title">{item.nombre}</h5>
                <p className="card-text">{item.descripcion}</p>
            
              </div>
            </div>
              ))}
          </div>
       </section>
      
       <section className="group today-special">
           <h2 className="group--title">Especiales del dia </h2>
           <div className="container container--flex">
               <div className="column column--50-25">
                   <img src=""alt="imagen de pasta" className="today-special__img" />
                   <div className="today-special__title">Pasta a la Boloñesa</div>
                   <div className="today-special__price">$15900</div>
               </div>
               <div className="column column--50-25">
                   <img src="" alt="RAVIOLIS" className="today-special__img" />
                   <div className="today-special__title">Ravioles de Ricota</div>
                   <div className="today-special__price">$12900</div>
               </div>
               <div className="column column--50-25">
                   <img src="" alt="Lasagna" className="today-special__img" />
                   <div className="today-special__title">Lasagna </div>
                   <div className="today-special__price">$19900</div>
               </div>
               <div className="column column--50-25">
                   <img src="" alt="Pizza" className="today-special__img" />
                   <div className="today-special__title">Pizza napolitana</div>
                   <div className="today-special__price">$9900</div>
               </div>
               <a href="menu.html" className="btn btn--contact">Ver menu </a>
           </div>
       </section>
       <section>
        <h2 className="group--title">Testimonios</h2>
        <div className="group our-team">
     
            <div className="row">
      
              <div className="col-lg-4">
                <img src="" alt="imagen de maria" className="our-team__img" />
                <h2>Maria</h2>
                <p>Es un lugar perfecto para compartir en familia ocasiones especiales. </p>
              </div>
      
              <div className="col-lg-4">
                <img src="" alt="Imagen de Lucas" className="our-team__img" />
                <h2>Lucas</h2>
                <p>Los platos que brindan son realmentes deliciosos y la atencion es de las mejores de la ciudad.</p>
              </div>
      
              <div className="col-lg-4">
                <img src="" alt="Imagen de Magdalena" className="our-team__img" />
                <h2>Magdalena</h2>
                <p>Es un restaurante con un concepto muy original y con una comida realmente fantastica.</p>
              </div>
            </div>
          </div>
      </section>  
   </main>
      </React.Fragment>
    );
  }

export default Index;
