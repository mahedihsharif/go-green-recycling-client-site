import React from 'react';
import { productContext } from '../../../App';
import UserDashboard from '../../UserDashboard/UserDashboard/UserDashboard';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrash } from '@fortawesome/free-solid-svg-icons';
import "./Products.css";
const Products = () => {
    const [products,setProducts] = React.useContext(productContext);
    const [deleteItem,setDeleteItem]=React.useState("")
    const deleteService=(id) => {
        fetch('https://go-green-recycling.herokuapp.com/productDelete/'+id,{
            method: 'DELETE',
        })
        .then(res=>res.json())
        .then(data=>{
            setDeleteItem("Your Item is Deleted Successfully!!");
            window.location.replace('/');
        })
    }
    return (
        <div>
        <UserDashboard/>
           
           <div className="mt-5 pt-5 w-75 mx-auto">
           <h4 className="text-center pb-3" style={{color:"green",fontSize:"20px"}}>Your Total Order is {products.length}</h4>
           <table className="table table-borderless">
       <thead>
           <tr>
           <th className="text-secondary text-left" scope="col"><h5>SL No</h5></th>
           <th className="text-secondary" scope="col"><h5>Product Name</h5></th>
           <th className="text-secondary" scope="col"><h5>Product</h5></th>
           <th className="text-secondary" scope="col"><h5>Price</h5></th>
           <th className="text-secondary" scope="col"><h5>Action</h5></th>
           </tr>
       </thead>
       <tbody>
           {
            products.map((pd, index) => 
                   
               <tr>
                   <td><h5>{index + 1}</h5></td>
                   <td><h5>{pd?.productName}</h5></td>
                   <td><img src={`data:image/jpeg;base64,${pd?.image?.img}`} style={{width:"60px"}}/> </td>
                   <td><h5>{pd?.price}</h5></td>
                   <td><h5><FontAwesomeIcon icon={faTrash} onClick={()=>{deleteService(pd?._id)}} className="deleteBtn"></FontAwesomeIcon></h5></td>
                    
               </tr>
               )
           }
       </tbody>
   </table>

           </div>
           </div>
    );
};

export default Products;