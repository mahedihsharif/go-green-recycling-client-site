import React from 'react';
import { useParams } from 'react-router-dom';
import { productContext } from '../../../App';
import Footer from '../../Shared/Footer/Footer';
import UserDashboard from '../../UserDashboard/UserDashboard/UserDashboard';
import { Button, Card } from 'react-bootstrap';
import "./Orders.css"
import { useForm } from 'react-hook-form';
import { userContext } from './../../../App';
import Stripes from './../PaymentGateWay/Stripes/Stripes';
const Orders = () => {
    const { id } = useParams();
    const [products, setProducts] = React.useContext(productContext);
    const [display,setDisplay]=React.useState(true);
    const [shipmentUserData, setShipmentUserData] = React.useState(null);
    const { register, handleSubmit, watch, errors } = useForm();
    const [shipmentProduct, setShipmentProduct] = React.useState({});
    const productData = products.find(pd => pd._id === id);
    const [login, setLogin] = React.useContext(userContext);
    console.log(login)
    const handleEventClick=()=>{
      setDisplay(false);
  }

    const onSubmit = data => {
      setShipmentUserData(data)
  };

  const handlePaymentSuccess = (paymentId) => {
    const orderDetails = {
        ...login,
        ...shipmentProduct,
        shipment: shipmentUserData,
        paymentId,
        orderDate: new Date(),

    }
  
    fetch('http://localhost:7000/shipments', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(orderDetails)
    })
        .then(res => res.json())
        .then(data => {

        })

}

 React.useEffect(() => {
        fetch('http://localhost:7000/product/'+id)
            .then(res => res.json())
            .then(data => {
                setShipmentProduct(data[0])
            })
    }, [id])

    return (
        <>
        <UserDashboard/>
       {
         display ?  <div className="m-3 p-5 card-design">
        <div className="mx-auto " style={{ width: "25rem" }}>
         
         <Card.Body className="style-card-body">
         <p className="ready-product text-center">Your Product is ready for order</p>
           <Card.Img
             variant="top"
             src={`data:image/jpeg;base64,${productData?.image?.img}`}
           />
           <Card.Title className="mt-3">{productData?.productName}</Card.Title>
           <Card.Text style={{ fontSize: "15px" }} className="text-muted">
             {productData?.description}
           </Card.Text>
           <Card.Text style={{ fontSize: "20px", color: "tomato" }} className="text-muted mt-2">
             ${productData?.price}
           </Card.Text>
           <Button onClick={handleEventClick} className="mt-3">Replace Order</Button>
         </Card.Body>
       
     </div>
        </div>:
        <div className=" m-3 p-5 pr-5 w-50 mx-auto">
               
                <form style={{ display: shipmentUserData ? "none" : "block" }} onSubmit={handleSubmit(onSubmit)}>
                <h5 className="p-3 text-center ready-product">Your Shipment Information...</h5>
                    <div className="form-group">
                        <label htmlFor="exampleInputPassword1" className="writeInput mt-3">Name</label>
                        <input type="text" className="form-control writeInput mt-3" name="name" placeholder="Enter Your Name"  {...register("name", { required: true })}/>
                        {/* {errors.name && <span className="error">Name is required</span>} */}
                    </div>

                    <div className="form-group">
                        <label htmlFor="exampleInputPassword1" className="writeInput mt-3">Email</label>
                        <input type="text"  className="form-control mt-3 writeInput" name="email" placeholder="Enter Your Email" {...register("email", { required: true })}/>
                        {/* {errors.email && <span className="error">Email is required</span>} */}
                    </div>


                    <div className="form-group">
                        <label htmlFor="exampleInputPassword1" className="writeInput mt-3">Address</label>
                        <input type="text" className="mt-3 form-control writeInput" name="address" placeholder="Enter Your Address" {...register("address", { required: true })}/>
                        {/* {errors.address && <span className="error">Address is required</span>} */}
                    </div>

                    <div className="form-group">
                        <label htmlFor="exampleInputPassword1" className="writeInput mt-3">Phone</label>
                        <input type="text" className="form-control mt-3 writeInput" name="phone" placeholder="Enter Your Phone Number" {...register("phone", { required: true })} />
                        {/* {errors.phone && <span className="error">Phone number is required</span>} */}
                    </div>


                    <button type="submit" className="submit mt-3">Submit</button>
                </form>
                <div className="" style={{ display: shipmentUserData ? "block" : "none" }} >
                <h5 className="pt-3 pb-3  ready-product">Your Payment Gateway System.</h5>
                    <Stripes handlePaymentSuccess={handlePaymentSuccess}></Stripes>

                </div>
            </div>

       }
        <Footer/>
            
        </>
    );
};

export default Orders;