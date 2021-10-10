import React from "react";
import { productContext } from "../../../App";
import { getDatabaseCart, removeFromDatabaseCart } from "../../../utilities/databaseManager";
import Footer from "../../Shared/Footer/Footer";
import NavbarComponent from "../../Shared/Navbar/NavbarComponent";
import CartPreviewItem from "../CartPreviewItem/CartPreviewItem";
import Cart from './../Cart/Cart';
import styled  from 'styled-components';
import { Link } from 'react-router-dom';

const Top = styled.div`
  display: flex;
  align-items: center;
  justify-content:space-around;  
  padding: 20px;
   
`;
const TopButton = styled.button`
  padding: 10px;
  cursor: pointer;
  border-radius: 5px;
  border: ${(props) => props.type === "filled" && "none"};
  background-color: ${(props) =>
    props.type === "filled" ? "black" : "transparent"};
  color: ${(props) => props.type === "filled" && "white"};
  font-size: 16px;
`;


const CartPreview = () => {
  const [products, setProducts] = React.useContext(productContext);
  const [cart, setCart] = React.useState([]);
  

  React.useEffect(() => {
    const saveCart = getDatabaseCart();
    const productKey = Object.keys(saveCart);
    if (products.length>0) {
      const countProduct = productKey.map((key) => {
        const product = products.find((pd) => pd._id === key);
        product.quantity = saveCart[key];
        return product;
      });
      setCart(countProduct);
    }
  }, [products]);

  const removeProduct = (productKey) => {
    const newCart = cart.filter(pd => pd._id !== productKey);
    setCart(newCart);
    removeFromDatabaseCart(productKey);
}
 
  return (
    <>
    <NavbarComponent/>
    <Top>
           <Link to="/shop"><TopButton type="filled">Continue Shopping</TopButton></Link>
             
           <Link to="/cartItem"> <TopButton type="filled">CHECKOUT NOW</TopButton></Link>
          </Top>
    <div className="d-flex justify-content-center py-5">
          <div className="row w-75">
      {cart.map((pd) => (
        <CartPreviewItem pd={pd} id={pd._id}   removeProduct={removeProduct}/>
      ))}
      </div>
      <Cart cart={cart}/> 
      </div>
      <Footer/>
    </>
  );
};

export default CartPreview;
