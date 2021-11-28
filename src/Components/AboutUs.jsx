import React, {useEffect}  from "react";
import "./Styles/AboutUs.css";
import "./Styles/AboutUs.css";


const AboutUs= (props) => {
const [empleados, setEmpleado] = React.useState([]);
const [clientes, setCliente] = React.useState([]);
useEffect(() => {
    obtenerDatos();
  }, []);
  //llamar al json
    const obtenerDatos = async () => {
    const dato = await fetch('https://dotnetrestaurante.herokuapp.com/api/empleado');
    const informacion = await dato.json();
    setEmpleado(informacion);
    obtenerDatos();
  };

  useEffect(() => {
    obtenerDatosComentario();
  }, []);
   //llamar al json
    const obtenerDatosComentario = async () => {
    const dato = await fetch('https://dotnetrestaurante.herokuapp.com/api/comentario');
    const informacion = await dato.json();
    setCliente(informacion);
    obtenerDatosComentario();
  };

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
            {empleados.map((item) => (
              <div className="column column--33">
                <h3 className="our-team__title">{item.nombre}</h3>
                <img
                  src={item.Imagen}
                  alt="imagen del chef"
                  className="our-team__img"
                />
                <p className="our-team__txt">
                  {item.Descripcion}
                </p>
              </div>
              ))}
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
export default AboutUs;
