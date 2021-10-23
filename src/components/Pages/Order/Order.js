import React from 'react';
import UserDashboard from '../../UserDashboard/UserDashboard/UserDashboard';
 
import "./Order.css"
import { Context } from './../../../context/Context';

const OrderList = () => {
    const {user}=React.useContext(Context);
    const [orderProducts,setOrderProduct]=React.useState([]);
    //loaded user orders information matching by email.
    React.useEffect(() => {
        fetch('https://go-green-recycling.herokuapp.com/orderlistByAdmin', {
            method: 'POST',
            headers: { 'content-type': 'application/json' },
            body: JSON.stringify({email: user.email})
        })
            .then(res => res.json())
            .then(data => setOrderProduct(data))
    }, [user.email])
    return (
        <div>
         <UserDashboard/>
            
            <div className="mt-5 pt-5 w-75 mx-auto">
            <h4 className="text-center pb-3" style={{color:"green",fontSize:"20px"}}>Your Total Order is {orderProducts.length}</h4>
            <table className="table table-borderless">
        <thead>
            <tr>
            <th className="text-secondary text-left" scope="col"><h5>SL No</h5></th>
            <th className="text-secondary" scope="col"><h5>Name</h5></th>
            <th className="text-secondary" scope="col"><h5>Email</h5></th>
            <th className="text-secondary" scope="col"><h5>Address</h5></th>
            <th className="text-secondary" scope="col"><h5>Phone</h5></th>
           
            <th className="text-secondary" scope="col"><h5>Date</h5></th>
               
            <th className="text-secondary" scope="col"><h5>Status</h5></th>
             
            </tr>
        </thead>
        <tbody>
            {
                orderProducts.map((pd, index) => 
                    
                <tr className="box-container">
                    <td ><h5>{index + 1}</h5></td>
                    <td><h5>{pd?.shipment?.name}</h5></td>
                    <td><h5>{pd?.shipment?.email}</h5></td>
                    <td><h5>{pd?.shipment?.address}</h5></td>
                    <td><h5>{pd?.shipment?.phone}</h5></td>
                    <td><h5>{new Date(pd?.orderDate).toDateString()}</h5></td>
                    
                    <td>
                            
                            <select>
                                <option   className="text-white p-5" style={{backgroundColor:'orange'}}>Pending</option>
                                <option  style={{backgroundColor:'green'}} className="text-white p-5">Approved</option>
                                <option style={{backgroundColor:'red'}} className="  text-white p-5">Rejected</option>
                            </select>
 
                        </td>
                     
                </tr>
                )
            }
        </tbody>
    </table>

            </div>
            </div>
    );
};

export default OrderList;