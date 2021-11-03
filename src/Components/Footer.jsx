import React from "react";
import "./Styles/Services.css";

class Footer extends React.Component {
  render() {
    return (
      <React.Fragment>

        <footer class="bg-dark text-center text-white">
        <div class="container p-4">
          <div class="row">
            <div class="col-lg-3 col-md-6 mb-4 mb-md-0">
          <h5 class="text-uppercase">Mapa del sitio</h5>
          <ul class="list-unstyled mb-0">
          <li>
              <a href="#!" class="text-white">Restaurante Italianfood ltda</a>
            </li>
            <li>
              <a href="#!" class="text-white">Carrera 156 #135-24 Bogota,Colombia</a>
            </li>
            <li>
              <a href="#!" class="text-white">Italianfood@contact.com</a>
            </li>
            <li>
              <a href="#!" class="text-white" >Teléfono: 6893457</a>
            </li>
          </ul>
        </div>
        <div class="col-lg-3 col-md-6 mb-4 mb-md-0">
          <h5 class="text-uppercase">Contactenos</h5>
        </div>
        <div class="col-lg-3 col-md-6 mb-4 mb-md-0">
         <h5 class="text-uppercase">Reservas</h5>
        </div>
        <div class="col-lg-3 col-md-6 mb-4 mb-md-0">
          <iframe  class="mapadesitio" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3976.1568351584347!2d-74.12855058569626!3d4.742791442612869!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8e3f837e78dfb3e7%3A0xd98deb4a738cad5c!2sCra.%20156%20%23135-24%2C%20Bogot%C3%A1!5e0!3m2!1ses!2sco!4v1632106181358!5m2!1ses!2sco" width="600" height="450" allowfullscreen="" loading="lazy"></iframe>
        </div>
      </div>
  </div>

  <div class="text-center p-3">
    © 2021 Copyright
  </div>
</footer>


      </React.Fragment>
    );
  }
}
export default Footer;
