import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import "./App.css";
import Home from "./components/Home/Home/Home";
import Profile from "./components/UserDashboard/Profile/Profile";
import UpdateProfile from "./components/UserDashboard/UpdateProfile/UpdateProfile";
import UserDashboard from "./components/UserDashboard/UserDashboard/UserDashboard";
import Services from "./components/Pages/Services/Services";
import Shop from "./components/Pages/Shop/Shop";
import Contact from "./components/Pages/Contact/Contact";
import AddNew from "./components/UserDashboard/AddNew/AddNew";
import Login from "./components/Pages/Login/Login";
import Orders from './components/Pages/Orders/Orders';
import BookedList from "./components/Pages/BookedList/BookedList";
import PrivateRoute from "./components/Pages/PrivateRoute/PrivateRoute";
import Order from "./components/Pages/Order/Order";
import Admin from './components/Pages/Admin/Admin';
import Products from "./components/Pages/Products/Products";
import Review from './components/UserDashboard/Review/Review';
import Blog from './components/Pages/Blog/Blog';
import Cart from './components/Pages/Cart/Cart';
import CartPreview from "./components/Pages/CartPreview/CartPreview";
import Shipment from "./components/Pages/Shipment/Shipment";
import CartBookedList from "./components/Pages/CartBookedList/CartBookedList";
export const userContext = React.createContext();
export const productContext = React.createContext();

function App() {
  const [login, setLogin] = React.useState({});
  const [products,setProducts] = React.useState([]);

  React.useEffect(() => {
    fetch('http://localhost:7000/allProduct')
    .then(res=>res.json())
    .then(data =>{
      setProducts(data)
    })
},[products])
 
  return (
    <>
      <userContext.Provider value={[login, setLogin]}>
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
              <Route path="/admin" component={Admin}/>
              <Route path="/cart" component={Cart} /> 
              <Route path="/all-products" component={Products}/>
              <Route path="/blog" component={Blog}/> 
              <Route path="/cartPreview" component={CartPreview}/>
              <Route path="/cartItem" component={Shipment} />
              <PrivateRoute path="/orderList">
                <BookedList/> 
              </PrivateRoute>

              <PrivateRoute path="/cartOrderList">
                <CartBookedList/> 
              </PrivateRoute>

              <PrivateRoute path="/orders">
                <Order/>
              </PrivateRoute>
              
              <PrivateRoute path="/dashboard">
                <UserDashboard/> 
              </PrivateRoute>
              
              <Route path="/shop">
                <Shop/> 
              </Route>

              <PrivateRoute path="/profile">
                <Profile/> 
              </PrivateRoute>

              <Route path="/updateProfile" component={UpdateProfile} />
              <Route exact path="/" component={Home} />
            </Switch>
          </Router>
        </productContext.Provider>
      </userContext.Provider>
    </>
  );
}

export default App;
