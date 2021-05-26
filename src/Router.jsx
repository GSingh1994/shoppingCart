import { BrowserRouter, Switch, Route } from "react-router-dom";
import App from "./App";
import Catalog from "./Components/Catalog";
import Product from "./Components/Product";

export default function Router() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={App} />
        <Route exact path="/catalog" component={Catalog} />
        <Route path="/catalog/:id" component={Product} />
      </Switch>
    </BrowserRouter>
  );
}
