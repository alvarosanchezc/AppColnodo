import React from "react";
import "./Styles/AboutUs.css";


class AboutUs extends React.Component {
  render() {
    return (
      <React.Fragment>
        <main className="main">
          <section className="group group--color">
            <div className="container">
              <h2 className="main__title">Sobre Nosotros</h2>
              <p className="main__txt">
                Somos un restaurante de comida italiana con mas de 20 años de
                experiencia y trayectoria en el mercado, brindando nuestros
                clintes un optimo servicio y atencion{" "}
              </p>
            </div>
          </section>
          <section className="group our-team">
            <h2 className="group__title  ">Nuestro equipo</h2>
            <div className="container container--flex">
              <div className="column column--33">
                <h3 className="our-team__title">Raul</h3>
                <img
                  src=""
                  alt="imagen del chef"
                  className="our-team__img"
                />
                <p className="our-team__txt">
                  Raul es de nuestros mejores cocineros con experiencia en
                  comida italiana,que estara a su dispocicion para preparar los
                  mejores platos
                </p>
              </div>
              <div className="column column--33">
                <h3 className="our-team__title">Andrea</h3>
                <img
                  src=""
                  alt="imagen del administrador"
                  className="our-team__img"
                />
                <p className="our-team__txt">
                  Andrea es nuestra administradora que esta al pendiente de que
                  el trabajo en equipo sea continuo y optimo para seguir
                  mejorando cada dia mas nuestro servicio a nuestros clientes.
                </p>
              </div>
              <div className="column column--33">
                <h3 className="our-team__title">Ana</h3>
                <img
                  src=""
                  alt="imagen de la mesera"
                  className="our-team__img"
                />
                <p className="our-team__txt">
                  Ana es una de nuestras mejores y mas destacadas meseras por su
                  actitud de servicio y eficiencia.
                </p>
              </div>
            </div>
          </section>
          <section>
            <h2 className="group--title">Testimonios</h2>

            <div className="wrapper">
              <div className="slider-testimonial">
                <div className="testimonial-item">
                  <div className="testimonial-client" align="center">
                    <img
                      src=""
                      alt="imagen de un cliente"
                      className="our-team__img"
                    />
                    <p className="client-name">Carlos Gomez</p>
                  </div>
                  <div className="testimonial-text" align="center">
                    <p>
                      Los platos que brindan son realmentes deliciosos y la
                      atencion es de las mejores de la ciudad.
                    </p>
                  </div>
                </div>
                <div className="testimonial-item">
                  <div className="testimonial-client" align="center">
                    <img
                      src=""
                      alt="imagen de cliente 2"
                      className="our-team__img"
                    />
                    <p className="client-name">Fernanda Castro</p>
                  </div>
                  <div className="testimonial-text" align="center">
                    <p>
                      Es un restaurante con un concepto muy original y con una
                      comida realmente fantastica.
                    </p>
                  </div>
                </div>
                <div className="testimonial-item">
                  <div className="testimonial-client" align="center">
                    <img
                      src=""
                      alt="imagen de cliente 3"
                      className="our-team__img"
                    />
                    <p className="client-name">Adriana Fernandez</p>
                  </div>
                  <div className="testimonial-text" align="center">
                    <p>
                      Es un lugar perfecto para compartir en familia ocasiones
                      especiales. .
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </main>
      </React.Fragment>
    );
  }
}
export default AboutUs;
