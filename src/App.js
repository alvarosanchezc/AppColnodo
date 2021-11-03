import "./App.css";
import {BrowserRouter, Route, Switch} from "react-router-dom";
import Index from "./Components/Index";
import Layout from "./Components/Layout";
import Services from "./Components/Services";
import About from "./Components/AboutUs";

import "bootstrap/dist/css/bootstrap.css";
function App() {
  return (
    <BrowserRouter>
    <Layout>
    <Switch>
          <Route path="/servicios" component={Services}/>
          <Route path="/nosotros" component={About}/>
          <Route path="/" component={Index}/>
    </Switch>
    </Layout>
    </BrowserRouter>
  );
}
export default App;
