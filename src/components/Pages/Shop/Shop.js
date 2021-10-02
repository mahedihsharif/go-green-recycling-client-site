import React from "react";
import NavbarComponent from "./../../Shared/Navbar/NavbarComponent";
import Footer from "./../../Shared/Footer/Footer";
import ShopCard from "../ShopCard/ShopCard";
import { productContext } from "../../../App";

const Shop = () => {
  const [products, setProducts] = React.useContext(productContext);
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
              <ShopCard pd={pd} id={pd.id} />
            ))}
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
};

export default Shop;
