import React from "react";
import "./Styles/Services.css";
import imgCumpleaños from "../images/cumpleaños.jpeg";
import imgAniversario from "../images/aniversario.jpg";
import imgInfantiles from "../images/infantiles.jpg";
import imgDeclaracion from "../images/declaracion.jpg";
import imgDespedida from "../images/despedidas.jpg";
import imgAmigo from "../images/amigos.jpg";
class Services extends React.Component {
  render() {
    return (
      <React.Fragment>
        <div className="group gallery">
          <h2 className="group__title">Nuestros Servicios</h2>
          <div className="container container--flex">
            <div className="row row-cols-1 row-cols-md-2 g-4">
              <div className="col">
                <div className="card h-100">
                  <img alt="..." className="card-img-top" src={imgCumpleaños} />
                  <div className="card-body">
                    <h5 className="card-title">Celebración de cumpleaños</h5>
                    <p className="card-text">
                      Ven a celebrar en familia, amigos, y tus seres queridos en
                      nuestras instalaciones donde cantaremos tu cumpleaños con
                      un pastel y serenata.
                      <a href="contacto.html">
                        <input
                          id="boton"
                          className="btn formulario__btn"
                          type="submit"
                          value="¿preguntas?"
                        />
                      </a>
                    </p>
                  </div>
                </div>
              </div>

              <div className="col">
                <div className="card h-100">
                  <img alt="..." className="card-img-top" src={imgAniversario} />
                  <div className="card-body">
                    <h5 className="card-title">Aniversarios</h5>
                    <p className="card-text">
                      Queremos recibirte en esa fecha especial con tu pareja por
                      eso brindamos nuestras instalaciones para conmemorar y
                      celebrar ese dia tan especial con tu pareja
                    </p>
                    <a href="contacto.html">
                      <input
                        id="boton"
                        className="btn formulario__btn"
                        type="submit"
                        value="¿preguntas?"
                      />
                    </a>
                  </div>
                </div>
              </div>

              <div className="col">
                <div className="card h-100">
                  <img alt="..." className="card-img-top" src={imgInfantiles} />
                  <div className="card-body">
                    <h5 className="card-title">Fiestas infantiles</h5>
                    <p className="card-text">
                      Ven con los mas pequeños para compartir y disfrutar,
                      ofrecemos fiestas tematizadas recreadores, show de titeres
                      y mucho mas
                    </p>
                    <a href="contacto.html">
                      <input
                        id="boton"
                        className="btn formulario__btn"
                        type="submit"
                        value="¿preguntas?"
                      />
                    </a>
                  </div>
                </div>
              </div>

              <div className="col">
                <div className="card h-100">
                  <img alt="..." className="card-img-top" src={imgDeclaracion} />
                  <div className="card-body">
                    <h5 className="card-title">Declaraiones o propuestas</h5>
                    <p className="card-text">
                      Ven y dale esa sorpresa a tu pareja con las ideas mas
                      ingeniosas acompañado de una velada romantica
                    </p>
                    <a href="contacto.html">
                      <input
                        id="boton"
                        className="btn formulario__btn"
                        type="submit"
                        value="¿preguntas?"
                      />
                    </a>
                  </div>
                </div>
              </div>

              <div className="col">
                <div className="card h-100">
                  <img alt="..." className="card-img-top" src={imgDespedida} />
                  <div className="card-body">
                    <h5 className="card-title">Despedidas</h5>
                    <p className="card-text">
                      Vive con nosostros las fiestas de despedida mas
                      emocionantes acompañado de tus seres mas allegados y
                      excelente comida
                    </p>
                    <a href="contacto.html">
                      <input
                        id="boton"
                        className="btn formulario__btn"
                        type="submit"
                        value="¿preguntas?"
                      />
                    </a>
                  </div>
                </div>
              </div>

              <div className="col">
                <div className="card h-100">
                  <img alt="." className="card-img-top" src={imgAmigo} />
                  <div className="card-body">
                    <h5 className="card-title">Cena con amigos</h5>
                    <p className="card-text">
                      Disfruta de nuestras instalaciones para reunirte con tus
                      mejores amigos y deleitar de nuestros mejores platos
                    </p>
                    <a href="contacto.html">
                      <input
                        id="boton"
                        className="btn formulario__btn"
                        type="submit"
                        value="¿preguntas?"
                      />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </React.Fragment>
    );
  }
}
export default Services;
