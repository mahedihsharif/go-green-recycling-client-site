import React from "react";
import NavbarComponent from "./../../Shared/Navbar/NavbarComponent";
import Footer from "./../../Shared/Footer/Footer";
import ShopCard from "../ShopCard/ShopCard";
import { productContext } from "../../../App";
import Cart from './../Cart/Cart';
import styled   from 'styled-components';
import { addToDatabaseCart, getDatabaseCart } from "../../../utilities/databaseManager";
 
const Shop = () => {
  const [products, setProducts] = React.useContext(productContext);
  const [cart, setCart] = React.useState([]);

  React.useEffect(() => {
    const saveCart = getDatabaseCart();
    const productKey = Object.keys(saveCart);
    if(products.length>0){
      const previousCart=productKey.map(existingKey =>{
        const product =products.find(pd=>pd._id === existingKey);
        product.quantity=saveCart[existingKey];
        return product;
    })
    setCart(previousCart);
    }
}, [products])
   
  const addEventHandler=(product)=>{
    const toBeAddedKey =product._id;
    const sameProduct=cart.find(pd=>pd._id===toBeAddedKey);
    let count =1;
    let newCart;
    if(sameProduct){
        count=sameProduct.quantity + 1;
        sameProduct.quantity=count;
        const others=cart.filter(pd=>pd._id!==toBeAddedKey);
        newCart=[...others,sameProduct];
    }
        else{
            product.quantity=1;
            newCart=[...cart,product];
        }
        setCart(newCart);

        addToDatabaseCart(product._id,count);
    }
  return (
    <>
      <NavbarComponent />
      <section className="bg-gray-50 p-5">
        <h1 className="text-center font-bold gogreen mt-3 font-monospace service">
          Shop
        </h1>
    
        <div className="d-flex justify-content-center py-5">
          <div className="row w-75">
            {products.map((pd) => (
              <ShopCard showAddToCart={true} pd={pd} id={pd.id} addEventHandler={addEventHandler}/>
            ))}
          </div>
          
          <Cart cart={cart}/>
          
        </div>
      </section>
      <Footer />
    </>
  );
};

export default Shop;
