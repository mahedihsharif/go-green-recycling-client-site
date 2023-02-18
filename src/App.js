import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "./App.css";
import AddNew from "./components/Dashboard/AddNew/AddNew";
import UserDashboard from "./components/Dashboard/Dashboard/Dashboard";
import Profile from "./components/Dashboard/Profile/Profile";
import Review from "./components/Dashboard/Review/Review";
import UpdateProfile from "./components/Dashboard/UpdateProfile/UpdateProfile";
import Home from "./components/Home/Home/Home";
import Admin from "./components/Pages/Admin/Admin";
import Blog from "./components/Pages/Blog/Blog";
import BookedList from "./components/Pages/BookedList/BookedList";
import Cart from "./components/Pages/Cart/Cart";
import CartBookedList from "./components/Pages/CartBookedList/CartBookedList";
import CartPreview from "./components/Pages/CartPreview/CartPreview";
import Contact from "./components/Pages/Contact/Contact";
import Login from "./components/Pages/Login/Login";
import Order from "./components/Pages/Order/Order";
import Orders from "./components/Pages/Orders/Orders";
import Products from "./components/Pages/Products/Products";
import Services from "./components/Pages/Services/Services";
import Shipment from "./components/Pages/Shipment/Shipment";
import Shop from "./components/Pages/Shop/Shop";
import UpdateProduct from "./components/Pages/UpdateProduct/UpdateProduct";
import { Context } from "./context/Context";
export const productContext = React.createContext();

function App() {
  const [products, setProducts] = React.useState([]);

  React.useEffect(() => {
    fetch("http://localhost:7000/allProduct")
      .then((res) => res.json())
      .then((data) => {
        setProducts(data);
      });
  }, [products]);

  const { user } = React.useContext(Context);

  return (
    <>
      <productContext.Provider value={[products, setProducts]}>
        <Router>
          <Switch>
            <Route exact path="/home" component={Home} />
            <Route path="/services" component={Services} />
            <Route path="/contact" component={Contact} />
            <Route path="/addNew" component={AddNew} />
            <Route path="/comments" component={Review} />
            <Route path="/orders/:id" component={Orders} />
            <Route path="/login" component={Login} />
            <Route path="/admin" component={Admin} />
            <Route path="/cart" component={Cart} />
            <Route path="/all-products" component={Products} />
            <Route path="/blog" component={Blog} />
            <Route path="/cartPreview" component={CartPreview} />
            <Route path="/cartItem" component={Shipment} />
            <Route path="/orderList">{user ? <BookedList /> : <Login />}</Route>

            <Route path="/cartOrderList">
              {user ? <CartBookedList /> : <Login />}
            </Route>

            <Route path="/orders">{user ? <Order /> : <Login />}</Route>

            <Route path="/dashboard">
              {" "}
              {user ? <UserDashboard /> : <Login />}
            </Route>

            <Route path="/shop">
              <Shop />
            </Route>

            <Route path="/profile">{user ? <Profile /> : <Login />}</Route>

            <Route path="/updateProfile" component={UpdateProfile} />
            <Route path="/updateProduct/:pId" component={UpdateProduct} />
            <Route exact path="/" component={Home} />
          </Switch>
        </Router>
      </productContext.Provider>
    </>
  );
}

export default App;
