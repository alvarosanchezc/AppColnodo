import axios from "axios";

class SendMail extends Component {
  email = React.createRef();
  asunto = React.createRef();
  mensaje = React.createRef();
  correo = React.createRef();
  servicio = React.createRef();
  pedido = React.createRef();

  state = {
    email: "",
    asunto: "",
    mensaje: "",
    correo: "",
    servicio: "",
    pedido: "",
  };

  comprobarCambios = () => {
    var email = this.email.current.value;
    var asunto = this.asunto.current.value;
    var mensaje = this.mensaje.current.value;
    var correo = this.correo.current.value;
    var servicio = this.servicio.current.value;
    pedodo = this.pedido.current.value;
    this.setState({
      email: email,
      asunto: asunto,
      mensaje: mensaje,
      correo: correo,
      servicio: servicio,
      pedido: pedido,
    });
  };

  constructor() {
    super();
    this.enviarEmail = this.enviarEmail.bind(this);
  }

  async enviarEmail(e) {
    e.preventDefault();
    const { email, asunto, mensaje } = this.state;
    const form = await axios.post("/api/form", {
      email,
      asunto,
      mensaje,
      correo,
      tipoServicio,
      pedidoEspecial,
    });
  }

  render() {
    return (
      <div>
        <form className="formulario" onSubmit={this.enviarEmail}>
          <h1>Enviando Emails en React</h1>
          <div>
            <label htmlFor="email">Email:</label>
            <input
              type="email"
              name="email"
              onChange={this.comprobarCambios}
              className="form-control"
              ref={this.email}
            />
          </div>
          <div>
            <label htmlFor="asunto">Asunto:</label>
            <input
              type="text"
              name="asunto"
              onChange={this.comprobarCambios}
              className="form-control"
              ref={this.asunto}
            />
          </div>
          <div>
            <label htmlFor="mensaje">Mensaje:</label>
            <textarea
              rows="4"
              name="mensaje"
              onChange={this.comprobarCambios}
              className="form-control"
              ref={this.mensaje}
            ></textarea>
          </div>
          <div>
            <br />
            <button type="submit" className="btn btn-primary">
              Enviar email
            </button>
          </div>
        </form>
      </div>
    );
  }
}

export default SendMail;
