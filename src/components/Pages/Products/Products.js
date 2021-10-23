import React from "react";
import { productContext } from "../../../App";
import UserDashboard from "../../UserDashboard/UserDashboard/UserDashboard";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
import "./Products.css";
import Modal from 'react-modal';

// const customStyles = {
//   content: {
//       top: '50%',
//       left: '50%',
//       right: 'auto',
//       bottom: 'auto',
//       marginRight: '-50%',
//       transform: 'translate(-50%, -50%)',
//       boxShadow: '0 4px 8px 0 rgba(0,0,0,0.5)',
//       transition: '0.3s',
//       borderRadius: '15px'
      
//   }
  
// };

// Modal.setAppElement('#root')
const Products = () => {
  const [products, setProducts] = React.useContext(productContext);
  const [deleteItem, setDeleteItem] = React.useState("");
  const deleteService = (id) => {
    fetch("https://go-green-recycling.herokuapp.com/productDelete/" + id, {
      method: "DELETE",
    })
      .then((res) => res.json())
      .then((data) => {
        setDeleteItem("Your Item is Deleted Successfully!!");
        window.location.replace("/");
      });
  };

  // const updateService = (id) => {};

  // const [modalIsOpen, setIsOpen] = React.useState(false);

  // function openModal() {
  //   setIsOpen(true);
  // }

  // function closeModal() {
  //   setIsOpen(false);
  // }

    const [info, setInfo] = React.useState({});
    const handleBlur = e => {
        const newInfo = { ...info };
        newInfo[e.target.name] = e.target.value;
        setInfo(newInfo);
    }
  
    const handleSubmit = () => {
        const formData = new FormData()
      
        formData.append('name', info.name);
        formData.append('price', info.price);
        formData.append('description', info.description);
        
        //Image upload in Backend side system.
  
        fetch('https://go-green-recycling.herokuapp.com/addProduct', {
            method: 'POST',
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
    <div>
      <UserDashboard />

      <div className="mt-5 pt-5 w-75 mx-auto">
        <h4
          className="text-center pb-3"
          style={{ color: "green", fontSize: "20px" }}
        >
          Your Total Order is {products.length}
        </h4>
        <table className="table table-borderless">
          <thead>
            <tr>
              <th className="text-secondary text-left" scope="col">
                <h5>SL No</h5>
              </th>
              <th className="text-secondary" scope="col">
                <h5>Product Name</h5>
              </th>
              <th className="text-secondary" scope="col">
                <h5>Product</h5>
              </th>
              <th className="text-secondary" scope="col">
                <h5>Price</h5>
              </th>
              <th className="text-secondary" scope="col">
                <h5>Delete</h5>
              </th>
              {/* <th className="text-secondary" scope="col">
                <h5>Delete</h5>
              </th> */}
            </tr>
          </thead>
          <tbody>
            {products.map((pd, index) => (
              <tr>
                <td>
                  <h5>{index + 1}</h5>
                </td>
                <td>
                  <h5>{pd?.productName}</h5>
                </td>
                <td>
                  <img
                    src={`data:image/jpeg;base64,${pd?.image?.img}`}
                    style={{ width: "60px" }}
                  />{" "}
                </td>
                <td>
                  <h5>{pd?.price}</h5>
                </td>
                {/* <td onClick={()=>{updateService(pd?._id)}}>
                   
                    <h4 onClick={openModal} className="update-Btn">
                      {" "}
                      Update
                    </h4>
                  
                </td> */}

                <td>
                  <h4
                    onClick={() => {
                      deleteService(pd?._id);
                    }}
                    className=" deleteBtn"
                  >
                    Delete
                  </h4>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
        {/* <div>
              
              <Modal
                isOpen={modalIsOpen}
               
                onRequestClose={ closeModal}
                style={customStyles}
                contentLabel="Example Modal"
              >
               <form onSubmit={handleSubmit}>
                  <div className="form-group">
                    <label htmlFor="exampleInputPassword1" className="writeInput">
                      Product Name
                    </label>
                    <input
                    onBlur={handleBlur}
                   
                      type="text"
                      className="form-control writeInput mt-2 mb-3"
                      name="name"
                      placeholder="Product Name"
                       
                    />
                  </div>
        
                  <div className="form-group">
                    <label htmlFor="exampleInputPassword1" className="writeInput">
                      Price
                    </label>
                    <input
                    onBlur={handleBlur}
                   
                      type="text"
                      className="form-control writeInput mt-2 mb-3"
                      name="price"
                      placeholder="Enter a Price"
                      
                    />
                  </div>
        
                  <div className="form-group">
                    <label htmlFor="exampleInputPassword1" className="writeInput">
                      Description
                    </label>
                    <textarea
                   onBlur={handleBlur}
                 
                      type="text"
                      className="form-control writeInput mt-2 mb-3"
                      cols="30"
                      rows="5"
                      name="description"
                      placeholder="description"
                      
                    />
                  </div>
         
                  <button type="submit" className="submit mt-3" modal>Update</button>
                   
                </form>
              </Modal>
                </div> */}
      </div>
    </div>
  );
};

export default Products;
