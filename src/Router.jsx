import { BrowserRouter, Switch, Route } from "react-router-dom";
import App from "./App";
import Catalog from "./Components/Catalog";
import Product from "./Components/Product";
import CartPage from "./Components/CartPage";

export default function Router() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={App} />
        <Route exact path="/shoppingCart" component={App} />
        <Route exact path="/catalog" component={Catalog} />
        <Route path="/catalog/:id" component={Product} />
        <Route exact path="/CartPage" component={CartPage} />
      </Switch>
    </BrowserRouter>
  );
}
