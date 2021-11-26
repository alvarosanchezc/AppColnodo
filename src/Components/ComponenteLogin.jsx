import React, { Component } from "react";
import { HashRouter as Router, Route, NavLink } from "react-router-dom";
import SignUpForm from "./pages/SignUp";
import SignInForm from "./pages/Login";
import "./Styles/login.css";

class ComponenteLogin extends React.Component {
  render() {
    return (
      <Router basename="/react-auth-ui/">
        <div className="App">
          <div className="appAside" />
          <div className="appForm">
            <div className="pageSwitcher">
              
              <NavLink
              exact
                to="/"
                activeClassName="pageSwitcherItem-active"
                className="pageSwitcherItem"
              >
                Sign In
              </NavLink>
              <NavLink
                exact
                to="/sign-up"
                activeClassName="pageSwitcherItem-active"
                className="pageSwitcherItem"
              >
                Sign Up
              </NavLink>
            </div>

            <div className="formTitle">
              {" "}
              
              <NavLink
                exact
                to="/"
                activeClassName="formTitleLink-active"
                className="formTitleLink"
              >
               Ingresar
              </NavLink>o{" "}
              <NavLink
                to="/sign-up"
                activeClassName="formTitleLink-active"
                className="formTitleLink"
              >
                 Registrarme
              </NavLink>
            </div>

            <Route exact path="/sign-up"  component={SignUpForm} />
            <Route exact path="/"  component={SignInForm} />

          </div>
        </div>
      </Router>
    );
  }
}

export default ComponenteLogin;
