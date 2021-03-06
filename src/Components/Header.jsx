import React from "react";
import "./Styles/Services.css";
import { NavLink } from "react-router-dom";

import imgBag from "../images/bag.svg";

class Header extends React.Component {
  render() {
    return (
      <React.Fragment>
        <header class="main-header">
          <div class="container--flex">
            <div class="main-header__contactInfo column column--50"></div>
          </div>
        </header>
        <nav class="main-nav">
          <div class="container container--flex">
            <span class="icon-menu" id="btnmenu"></span>
            <ul class="menu" id="menu">
              <li class="menu__item">
                <NavLink className="menu__link " to="/">
                  Inicio
                </NavLink>
              </li>
              <li class="menu__item">
                <NavLink to="/nosotros" className="menu__link">
                  Nosotros
                </NavLink>
              </li>
              <li class="menu__item">
                <NavLink to="/menu" className="menu__link">
                  Menu
                </NavLink>
              </li>
              <li class="menu__item">
                <NavLink to="/contact" className="menu__link">
                  Contacto
                </NavLink>
              </li>
              <li class="menu__item">
                <NavLink to="/servicios" className="menu__link">
                  Servicios
                </NavLink>
              </li>
              <li class="menu__item">
                <NavLink to="/mapadesitio" className="menu__link">
                  Ubicacion
                </NavLink>
              </li>
              <li class="menu__ingreso">
                <NavLink to="/login" className="menu__link">
                  Ingresar
                </NavLink>
              </li> 
              <li class="menu__item">
                <NavLink to="/Carrito" className="menu__link">
                  <iframe
                    width="20"
                    height="20"
                    fill="white"
                    class="bi bi-bag"
                    viewBox="0 0 16 16"
                    src={imgBag}
                    scrolling="no"
                  />
                </NavLink>
              </li>
              
            </ul>


          </div>
        </nav>

        <section class="banner">
          <div
            id="carouselExampleCaptions"
            class="carousel slide"
            data-bs-ride="carousel"
          >
            <div class="carousel-indicators">
              <button
                type="button"
                data-bs-target="#carouselExampleCaptions"
                data-bs-slide-to="0"
                class="active"
                aria-current="true"
                aria-label="Slide 1"
              ></button>
              <button
                type="button"
                data-bs-target="#carouselExampleCaptions"
                data-bs-slide-to="1"
                aria-label="Slide 2"
              ></button>
              <button
                type="button"
                data-bs-target="#carouselExampleCaptions"
                data-bs-slide-to="2"
                aria-label="Slide 3"
              ></button>
            </div>
            <div class="carousel-inner">
              <div class="carousel-item active">
                <img src="https://firebasestorage.googleapis.com/v0/b/promocionate-d0ecc.appspot.com/o/imagenesServiciosYEmpleadosRestaurante%2FSitios%2Fpromocion_3.jpg?alt=media&token=ca61113d-ffc8-481d-90e6-89985c30bbe5" class="d-block w-100" alt="promocion_3" />
              </div>
              <div class="carousel-item">
                <img src="" class="d-block w-100" alt="imgPromocion4" />
              </div>
              <div class="carousel-item">
                <img src="" class="d-block w-100" alt="imgPromocion6" />
              </div>
            </div>
            <button
              class="carousel-control-prev"
              type="button"
              data-bs-target="#carouselExampleCaptions"
              data-bs-slide="prev"
            >
              <span
                class="carousel-control-prev-icon"
                aria-hidden="true"
              ></span>
              <span class="visually-hidden">Previous</span>
            </button>
            <button
              class="carousel-control-next"
              type="button"
              data-bs-target="#carouselExampleCaptions"
              data-bs-slide="next"
            >
              <span
                class="carousel-control-next-icon"
                aria-hidden="true"
              ></span>
              <span class="visually-hidden">Next</span>
            </button>
          </div>
        </section>
      </React.Fragment>
    );
  }
}
export default Header;
