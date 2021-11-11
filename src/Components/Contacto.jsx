import React from "react";
import "./Styles/contacto.css";
import "./Styles/font.css";
import axios from "axios";

class Contacto extends React.Component {
  asunto = React.createRef();
  nombre = React.createRef();
  correo = React.createRef();
  servicio = React.createRef();
  pedido = React.createRef();

  state = {
    asunto: "",
    nombre: "",
    correo: "",
    servicio: "",
    pedido: "",
  };

  comprobarCambios = () => {
    var asunto = this.asunto.current.value;
    var mensaje = this.mensaje.current.value;
    var correo = this.correo.current.value;
    var tipoServicio = this.servicio.current.value;
    var pedidoEspecial = this.pedido.current.value;
    this.setState({
      asunto: asunto,
      mensaje: mensaje,
      correo: correo,
      servicio: tipoServicio,
      pedido: pedidoEspecial,
    });
  };

  constructor() {
    super();
    this.enviarEmail = this.enviarEmail.bind(this);
  }

  async enviarEmail(e) {
    e.preventDefault();
    const { asunto, nombre, correo, tipoServicio, pedidoEspecial } = this.state;
    const form = await axios.post("/api/form", {
      asunto,
      nombre,
      correo,
      tipoServicio,
      pedidoEspecial,
    });
  }

  render() {
    return (
      <React.Fragment>
        <div class="row">
          <center>
            <form
              action="send.js"
              class="was-validated col-md-4"
              onSubmit={this.enviarEmail}
            >
              <div class="col-md-12">
                <label for="validationDefault03" class="form-label">
                  Asunto
                </label>
                <input
                  type="text"
                  name="asunto"
                  class="form-control"
                  onChange={this.comprobarCambios}
                  ref={this.asunto}
                  id="validationDefault03"
                  required
                />
                <div class="invalid-feedback">ingrese el asunto</div>
              </div>

              <div class="col-md-12">
                <label for="validationServer01" class="form-label">
                  Nombre
                </label>
                <input
                  type="text"
                  name="nombre"
                  class="form-control is-valid"
                  onChange={this.comprobarCambios}
                  ref={this.nombre}
                  id="validationServer01"
                  required
                />
                <div class="invalid-feedback">ingrese su nombre</div>
              </div>

              <div class="mb-3">
                <label for="exampleFormControlInput1" class="form-label">
                  Correo electronico
                </label>
                <input
                  type="email"
                  name="correo"
                  class="form-control"
                  id="exampleFormControlInput1"
                  onChange={this.comprobarCambios}
                  ref={this.correo}
                  placeholder="correo@example.com"
                  required
                />
              </div>

              <div class="mb-3">
                <select
                  class="form-select"
                  name="servicio"
                  onChange={this.comprobarCambios}
                  ref={this.tipoServicio}
                  required
                  aria-label="select example"
                >
                  <option value="">Seleccione el tipo de servicio</option>
                  <option value="Celebracion de cumpleaños">
                    Celebracion de cumpleaños
                  </option>
                  <option value="Aniversarios">Aniversarios</option>
                  <option value="Fiestas infantiles">Fiestas infantiles</option>
                  <option value="Declaraciones o propuestas">
                    Declaraciones o propuestas
                  </option>
                  <option value="Despedidas">Despedidas</option>
                  <option value="Cena con amigos">Cena con amigos</option>
                </select>
                <div class="invalid-feedback">Seleccion invalida</div>
              </div>

              <div class="mb-3">
                <label for="validationDefault03" class="form-label">
                  Pedido especial
                </label>
                <input
                  type="text"
                  name="servicioe"
                  class="form-control"
                  id="validationDefault03"
                  required
                />
                <div class="invalid-feedback">
                  Requiere algun servicio espaecial?
                </div>
              </div>

              <div class="form-check mb-3">
                <input
                  type="checkbox"
                  class="form-check-input"
                  onChange={this.comprobarCambios}
                  ref={this.pedidoEspecial}
                  id="validationFormCheck1"
                  required
                />
                <label class="form-check-label" for="validationFormCheck1">
                  Acepta el tratamiento de datos?
                </label>
                <div class="invalid-feedback">
                  Acepte el tratamiento de datos
                </div>
              </div>
              <div class="mb-3">
                <button class="btn btn-primary" type="submit" enabled>
                  Enviar
                </button>
              </div>
              <div></div>
            </form>
          </center>
        </div>
      </React.Fragment>
    );
  }
}
export default Contacto;
