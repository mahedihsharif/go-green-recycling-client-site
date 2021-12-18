import React from "react";
import { Link } from "react-router-dom";
import "./UpdateProduct.css";

import { Publish } from "@material-ui/icons";
import { useLocation } from "react-router";

import { useEffect, useState } from "react";
import UserDashboard from "../../Dashboard/Dashboard/Dashboard";
import { productContext } from "./../../../App";

const UpdateProduct = () => {
  const [products, setProducts] = React.useContext(productContext);
  const location = useLocation();
  const productId = location.pathname.split("/")[2];
  const updateProduct = products.find((pId) => pId._id === productId);
  const [info, setInfo] = React.useState({});
   

  const handleBlur = (e) => {
    const newInfo = { ...info };
    newInfo[e.target.name] = e.target.value;
    setInfo(newInfo);
  };
  
  const handleSubmit = () => {
    const formData = new FormData()
    
    formData.append('name', info.name);
    formData.append('price', info.price);
    formData.append('description', info.description);
    
    //Image upload in Backend side system.

    fetch('http://localhost:7000/updateProduct/'+productId, {
        method: 'PATCH',
        body: formData
    })
        .then(response => response.json())
        .then(data => {
            console.log(data)
        })
        .catch(error => {
            console.error(error)
        })
}
  return (
    <>
      <div className="row">
        <div className="col-md-2">
          <UserDashboard />
        </div>
        <div className="col-md-10">
          <div className="product mt-5 pt-5 mx-left">
            <div className="productTitleContainer">
              <h1 className="productTitle">Product</h1>
              <Link to="/addNew">
                <button className="productAddButton">Create</button>
              </Link>
            </div>
            <div className="productTop">
              <div className="productTopRight">
                <div className="productInfoTop">
                  <img
                    src={`data:image/jpeg;base64,${updateProduct?.image?.img}`}
                    alt=""
                    className="productInfoImg"
                  />
                  <span className="productName">
                    {updateProduct?.productName}
                  </span>
                </div>
                <div className="productInfoBottom">
                  <div className="productInfoItem">
                    <span className="productInfoKey">id:</span>
                    <span className="productInfoValue">
                      {updateProduct?._id}
                    </span>
                  </div>
                  <div className="productInfoItem">
                    <span className="productInfoKey">sales:</span>
                    <span className="productInfoValue">51</span>
                  </div>

                  <div className="productInfoItem">
                    <span className="productInfoKey">in stock:</span>
                    <span className="productInfoValue">Yes</span>
                  </div>
                </div>
              </div>
            </div>
            <div className="productBottom">
              <form className="productForm" onSubmit={handleSubmit}>
                <div className="productFormLeft">
                  <label>Product Name</label>
                  <input
                    type="text" name="name"  
                    placeholder={updateProduct?.productName}
                    onBlur={handleBlur}
                  />
                  <label>Product Price</label>
                  <input
                    type="text" name="price"
                    placeholder={updateProduct?.price}
                    onBlur={handleBlur}
                  />
                  <label>Product Description</label>
                  <input
                    type="text" name="description"
                    placeholder={updateProduct?.description}
                    onBlur={handleBlur}
                  />
                </div>
                <div className="productFormRight">
                  <div className="productUpload">
                    <img
                      src={`data:image/jpeg;base64,${updateProduct?.image?.img}`}
                      alt=""
                      className="productUploadImg"
                    />
                   
                  </div>
                  <button className="productButton">Update</button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default UpdateProduct;
