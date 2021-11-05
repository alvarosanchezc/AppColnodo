import React from "react";
import "./Styles/contacto.css";
import "./Styles/estilos.css";
import "./Styles/font.css";

class Contacto extends React.Component {
  render() {
    return (
      <React.Fragment>
        <div class="row">
          <form action="enviar.php" class="was-validated" method="post">
            <div class="col-md-12">
              <label for="validationDefault03" class="form-label">
                Asunto
              </label>
              <input
                type="text"
                name="asunto"
                class="form-control"
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
                placeholder="correo@example.com"
                required
              />
            </div>

            <div class="mb-3">
              <select
                class="form-select"
                name="servicio"
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
                id="validationFormCheck1"
                required
              />
              <label class="form-check-label" for="validationFormCheck1">
                Acepta el tratamiento de datos?
              </label>
              <div class="invalid-feedback">Acepte el tratamiento de datos</div>
            </div>
            <div class="mb-3">
              <button class="btn btn-primary" type="submit" enabled>
                Enviar
              </button>
            </div>
            <div></div>
          </form>
        </div>
      </React.Fragment>
    );
  }
}
export default Contacto;
