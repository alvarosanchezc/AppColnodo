import React from "react";
import "./Styles/AboutUs.css";
import imgCliente1 from "../images/lucas.jpg";
import imgCliente2 from "../images/magdalena.jpg";
import imgCliente3 from "../images/maria.jpg";

import imgPasta from "../images/pasta.jpg";
import imgRaviolis from "../images/raviolis.jpg";
import imgLasagna from "../images/lasagna.jpg";
import imgPizza from "../images/pizza.jpg";

import imgCumpleaños from "../images/cumpleaños.jpeg";
import imgCenaRomantica from "../images/cena_romantica.jpeg";
import imgOrquesta from "../images/orquesta.png";


class Index extends React.Component {
  render() {
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
            <div className="card">
              <img src={imgCenaRomantica} className="card-img-top" alt="cena romantica" height="288" />
              <div className="card-body">
                <h5 className="card-title">Cena romantica</h5>
                <p className="card-text">Ven con tu pareja a pasar una velada romantica acompañada de una mesa con champaña,velas y decoracion incluida</p>
            
              </div>
            </div>
            <div className="card">
              <img src={imgOrquesta} className="card-img-top" alt="orquesta" height="288"/>
              <div className="card-body">
                <h5 className="card-title">Show musical</h5>
                <p className="card-text">Vive con nosotros nuestro Jueves musical, una de las mejores experiencias, donde tenemos el honor de presentar una de las mejores orquestas musicales de la capital.</p>
               
              </div>
            </div>
            <div className="card">
              <img src={imgCumpleaños} className="card-img-top" alt="..." height="288" />
              <div className="card-body">
                <h5 className="card-title">Cumpleaños</h5>
                <p className="card-text">Celebra con nosotros tus cumpleaños! donde te traeremos un pastel decorado y cantaremos tu cumpleaños acompañado de tus seres queridos.</p>
              </div>
            </div>
          </div>
       </section>
      
       <section className="group today-special">
           <h2 className="group--title">Especiales del dia </h2>
           <div className="container container--flex">
               <div className="column column--50-25">
                   <img src={imgPasta}alt="imagen de pasta" className="today-special__img" />
                   <div className="today-special__title">Pasta a la Boloñesa</div>
                   <div className="today-special__price">$15900</div>
               </div>
               <div className="column column--50-25">
                   <img src={imgRaviolis} alt="" className="today-special__img" />
                   <div className="today-special__title">Ravioles de Ricota</div>
                   <div className="today-special__price">$12900</div>
               </div>
               <div className="column column--50-25">
                   <img src={imgLasagna} alt="" className="today-special__img" />
                   <div className="today-special__title">Lasagna </div>
                   <div className="today-special__price">$19900</div>
               </div>
               <div className="column column--50-25">
                   <img src={imgPizza} alt="" className="today-special__img" />
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
                <img src={imgCliente3} alt="Maria" className="our-team__img" />
                <h2>Maria</h2>
                <p>Es un lugar perfecto para compartir en familia ocasiones especiales. </p>
              </div>
      
              <div className="col-lg-4">
                <img src={imgCliente1} alt="Lucas" className="our-team__img" />
                <h2>Lucas</h2>
                <p>Los platos que brindan son realmentes deliciosos y la atencion es de las mejores de la ciudad.</p>
              </div>
      
              <div className="col-lg-4">
                <img src={imgCliente2} alt="Magdalena" className="our-team__img" />
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
}
export default Index;
