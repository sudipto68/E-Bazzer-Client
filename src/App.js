import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Header from "./Components/Header/Header";
import Login from "./Components/Login/Login";
import Home from "./Components/Home/Home";
import Admin from "./Components/Admin/Admin";
import AddProducts from "./Components/AddProducts/AddProducts";
import ManageProduct from "./Components/ManageProduct/ManageProduct";
import { createContext, useState } from "react";
import PrivateRoute from "./Components/PrivateRoute/PrivateRoute";
import Order from "./Components/Order/Order";
import Checkout from "./Components/Checkout/Checkout";

export const UserContext = createContext();
function App() {
  const [loggedInUser, setLoggedInUser] = useState({});
  return (
    <UserContext.Provider value={[loggedInUser, setLoggedInUser]}>
      <Router>
        <Header />
        <Switch>
          <Route path="/home">
            <Home />
          </Route>
          <Route path="/login">
            <Login />
          </Route>
          <PrivateRoute path="/order">
            <Order />
          </PrivateRoute>
          <PrivateRoute path="/admin">
            <Admin />
          </PrivateRoute>
          <PrivateRoute path="/checkout/:_id">
            <Checkout />
          </PrivateRoute>
          <PrivateRoute path="/addproducts">
            <AddProducts />
          </PrivateRoute>
          <PrivateRoute path="/manageproduct">
            <ManageProduct />
          </PrivateRoute>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="*">
            <h2 className="text-center py-5 mt-5">
              Error 404 - Page Not Found!
            </h2>
          </Route>
        </Switch>
      </Router>
    </UserContext.Provider>
  );
}

export default App;
