import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";
import TopMenu from "./components/TopMenu";
import LandingPage from "./components/LandingPage";
import Products from "./components/products/Products";
import ContactUs from "./components/ContactUs";
import NotFound from "./components/NotFound";
import NewProduct from "./components/products/NewProduct";
import UpdateProduct from "./components/products/UpdateProduct";
import Login from "./components/auth/Login";
import Register from "./components/auth/Register";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import NewToy from "./components/toys/NewToy";
import UpdateToy from "./components/toys/UpdateToy";
import Toys from "./components/toys/Toys";
function App() {
  return (
    <Router>
      <div>
        <ToastContainer />
        <TopMenu />
        <div style={{ padding: "10px" }}>
          <Switch>
            <Route path="/login" exact component={Login} />
            <Route path="/register" exact component={Register} />
            <Route path="/contact-us" exact component={ContactUs} />
            <Route path="/contact-us" exact component={ContactUs} />
            <Route path="/products/new" component={NewProduct} />
            <Route path="/products/update/:id" component={UpdateProduct} />
            <Route path="/products/:page?" component={Products} />
            <Route path="/toys/new" component={NewToy} />
            <Route path="/toys/update/:id" component={UpdateToy} />
            <Route path="/toys/:page?" component={Toys} />
            <Route path="/not-found" component={NotFound} />
            <Route path="/" exact component={LandingPage} />
            <Redirect to="/not-found" />
          </Switch>
        </div>
      </div>
    </Router>
  );
}

export default App;
