import "./App.css";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Index from "./Components/Index";
import Layout from "./Components/Layout";
import Services from "./Components/Services";
import About from "./Components/AboutUs";
import Contact from "./Components/Contacto";
import Carrito from "./Components/Carrito";
import "bootstrap/dist/css/bootstrap.css";
function App() {
  return (
    <BrowserRouter>
      <Layout>
        <Switch>
          <Route path="/Carrito" component={Carrito} />
          <Route path="/contact" component={Contact} />
          <Route path="/nosotros" component={About} />
          <Route path="/servicios" component={Services} />
          <Route path="/" component={Index} />
        </Switch>
      </Layout>
    </BrowserRouter>
  );
}
export default App;
