import React from 'react';
import { useForm } from 'react-hook-form';
import Footer from '../../Shared/Footer/Footer';
import NavbarComponent from '../../Shared/Navbar/NavbarComponent';
import { productContext, } from './../../../App';
import Stripes from './../PaymentGateWay/Stripes/Stripes';
import { Context } from './../../../context/Context';

const Shipment = () => {
    
    const [products, setProducts] = React.useContext(productContext);
    const [display,setDisplay]=React.useState(true);
    const [shipmentUserData, setShipmentUserData] = React.useState(null);
    const { register, handleSubmit, watch, errors } =useForm();
    // const [shipmentProduct, setShipmentProduct] = React.useState({});
     
    const {user}=React.useContext(Context);

    const onSubmit = data => {
        setShipmentUserData(data)
    };
    const handlePaymentSuccess = (paymentId) => {
        const orderDetails = {
            ...user,
            shipment: shipmentUserData,
            paymentId,
            orderDate: new Date(),
    
        }
      
        fetch('https://go-green-recycling.herokuapp.com/cartProduct', {
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
    return (
        <>
        <NavbarComponent/>
        <div className=" m-3 p-5 pr-5 w-50 mx-auto">
               
        <form style={{ display: shipmentUserData ? "none" : "block" }} onSubmit={handleSubmit(onSubmit)}>
        <h5 className="p-5 text-center ready-product">Your Shipment Information...</h5>
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
        <h5 className="pt-5 pb-3  ready-product">Your Payment Gateway System.</h5>
            <Stripes handlePaymentSuccess={handlePaymentSuccess}></Stripes>

        </div>
    </div>
    <Footer/>
</>
    );
};

export default Shipment;