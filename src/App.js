import "./App.css";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Menu from "./Components/Menu";
import Index from "./Components/Index";
import Layout from "./Components/Layout";
import Services from "./Components/Services";
import About from "./Components/AboutUs";
import Carrito from "./Components/ComponentCarrito";
import Login from "./Components/ComponenteLogin";
import Contacto from "./Components/Contacto";
import "bootstrap/dist/css/bootstrap.css";

function App() {
  return (
    <BrowserRouter>
      <Layout>
        <Switch>
          <Route path="/Login" component={Login} />
          <Route path="/Carrito" component={Carrito} />
          <Route path="/contact" component={Contacto} />
          <Route path="/menu" component={Menu} />
          <Route path="/nosotros" component={About} />
          <Route path="/servicios" component={Services} />
          <Route path="/" component={Index} />
        </Switch>
      </Layout>
    </BrowserRouter>
  );
}

export default App;
