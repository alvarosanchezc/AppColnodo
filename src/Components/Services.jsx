import React, {useEffect} from "react";
import "./Styles/Services.css";
const Services =(props)=> {

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
        <div className="group gallery">
          <h2 className="group__title">Nuestros Servicios</h2>
          <div className="container container--flex">
            <div className="row row-cols-1 row-cols-md-2 g-4">
            {servicios.map((item) => (
              <div className="col">
                <div className="card h-100">
                  <img src={item.imagen} alt="cumpleaños" className="card-img-top"/>
                  <div className="card-body">
                    <h5 className="card-title">{item.nombre}</h5>
                    <p className="card-text">
                      {item.descripcion}
                      <a href="contact">
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
              ))}
            </div>
          </div>
        </div>
      </React.Fragment>
    );
  }

export default Services;
