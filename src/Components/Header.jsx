import React from "react";
import "./Styles/Services.css";
import { Link } from "react-router-dom";

import imgBag from "../images/bag.svg";
import imgPromocion3 from "../images/promocion_3.jpg";
import imgPromocion4 from "../images/promocion_4.jpg";
import imgPromocion6 from "../images/promocion_6.jpg";

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
                <Link className="menu__link menu__link--select" to="/">
                  Inicio
                </Link>
              </li>
              <li class="menu__item">
                <Link to="/nosotros" className="menu__link">
                  Nosotros
                </Link>
              </li>
              <li class="menu__item">
                <Link to="menu" className="menu__link">
                  Menu
                </Link>
              </li>
              <li class="menu__item">
                <Link to="/contact" className="menu__link">
                  Contacto
                </Link>
              </li>
              <li class="menu__item">
                <Link to="/servicios" className="menu__link">
                  Servicios
                </Link>
              </li>
              <li class="menu__item">
                <Link to="/mapadesitio" className="menu__link">
                  Ubicacion
                </Link>
              </li>
              <li class="menu__item">
                <Link to="/Carrito" className="menu__link">
                  <iframe
                    width="20"
                    height="20"
                    fill="white"
                    class="bi bi-bag"
                    viewBox="0 0 16 16"
                    src={imgBag}
                    scrolling="no"
                  />
                </Link>
              </li>
            </ul>
            <div class="social-icon">
              <a href="" class="social-icon__link">
                <span class="icon-whatsapp"></span>
              </a>
              <a href="" class="social-icon__link">
                <span class="icon-facebook-square"></span>
              </a>
              <a href="" class="social-icon__link">
                <span class="icon-instagram"></span>
              </a>
            </div>
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
                <img src={imgPromocion3} class="d-block w-100" alt="..." />
              </div>
              <div class="carousel-item">
                <img src={imgPromocion4} class="d-block w-100" alt="..." />
              </div>
              <div class="carousel-item">
                <img src={imgPromocion6} class="d-block w-100" alt="..." />
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
