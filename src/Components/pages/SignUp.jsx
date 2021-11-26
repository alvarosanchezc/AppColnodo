import React, { Component } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

class SignUp extends Component {

  constructor() {
    super();

    this.state = {
      Nombre: "",
      Correo: "",
      NombreUsuario:"",
      Contrasena: ""
      };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    let target = event.target;
    let value = target.type === "checkbox" ? target.checked : target.value;
    let name = target.name;

    this.setState({
      [name]: value
    });
    
  }
  
  handleSubmit(e) {
    e.preventDefault();

    console.log("The form was submitted with the following data:");
    console.log(this.state);
  }
agregarCliente(state) {
  console.log("Este es el state: ");
    console.log(JSON.stringify(state));
    fetch('http://localhost:5000/api/cliente/', {
        method: 'POST',
        body: JSON.stringify(state),
        headers: {
            'Content-type': 'application/json; charset=UTF-8'
        }
    })
    .then(response => response.json())
    .then(json => {
        alert("Te has registrado exitosamente");
    });
/*
    fetch("http://localhost:5000/api/cliente/", state, {
      method: "POST",
    })
      .await((response) => response.json())
      .then((data) => {
        console.log(data)
        alert("dato eliminado");
      });*/
  }

  render() {
    return (
      <div className="formCenter">
        <form onSubmit={this.handleSubmit} className="formFields">
          <div className="formField">
            <label className="formFieldLabel" htmlFor="name">
              Nombre
            </label>
            <input
              type="text"
              id="name"
              className="formFieldInput"
              placeholder="Introduce tu nombre"
              name="Nombre"
              value={this.state.name}
              onChange={this.handleChange}
            />
          </div>
          <div className="formField">
            <label className="formFieldLabel" htmlFor="password">
              Contraseña
            </label>
            <input
              type="password"
              id="password"
              className="formFieldInput"
              placeholder="Introduce tu contraseña"
              name="Contrasena"
              value={this.state.password}
              onChange={this.handleChange}
            />
          </div>
          <div className="formField">
            <label className="formFieldLabel" htmlFor="email">
              Correo electronico
            </label>
            <input
              type="email"
              id="email"
              className="formFieldInput"
              placeholder="Introduce tu correo electronico"
              name="Correo"
              value={this.state.email}
              onChange={this.handleChange}
            />
          </div>
<div className="formField">
            <label className="formFieldLabel" htmlFor="name">
              Nombre De Usuario
            </label>
            <input
              type="text"
              id="name"
              className="formFieldInput"
              placeholder="Introduce un nombre de usuario"
              name="NombreUsuario"
              value={this.state.name}
              onChange={this.handleChange}
            />
          </div>
          <div className="formField">
            <label className="formFieldCheckboxLabel">
              <input
                required
                className="formFieldCheckbox"
                type="checkbox"
              />{" "}
              Acepto los terminos decarados en{" "}
              <a className="formFieldTermsLink">
                terminos del servicio
              </a>
            </label>
          </div>

          <div className="formField">
            <button onClick={() => this.agregarCliente(this.state)} className="formFieldButton">Registrarme</button>{" "}
            <Link to="/" className="formFieldLink">
              Ya tengo una cuenta
            </Link>
          </div>
        </form>
      </div>
    );
  }
}
export default SignUp;
