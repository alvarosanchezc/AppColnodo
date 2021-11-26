import "./App.css";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Menu from "./Components/Menu";
import Index from "./Components/Index";
import Layout from "./Components/Layout";
import Services from "./Components/Services";
import About from "./Components/AboutUs";
import Carrito from "./Components/ComponentCarrito";
import Login from "./Components/ComponenteLogin";
import SignUp from "./Components/pages/SignUp";
import Contacto from "./Components/Contacto";
import "bootstrap/dist/css/bootstrap.css";

function App() {
  return (
    <BrowserRouter>
      <Layout>
        <Switch>
          <Route exact path="/" component={Index} />
          <Route exact path="/Login" component={Login} />
          <Route exact path="/Carrito" component={Carrito} />
          <Route exact path="/contact" component={Contacto} />
          <Route exact path="/menu" component={Menu} />
          <Route exact path="/nosotros" component={About} />
          <Route exact path="/servicios" component={Services} />
          <Route exact path="/SignUp" component={SignUp} />
        </Switch>
      </Layout>
    </BrowserRouter>
  );
}

export default App;
