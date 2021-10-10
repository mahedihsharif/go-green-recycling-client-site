import React from 'react';
import {  useParams } from 'react-router-dom';
import { productContext } from '../../../App';
import Footer from '../../Shared/Footer/Footer';
import UserDashboard from '../../UserDashboard/UserDashboard/UserDashboard';
import "./Orders.css"
import { useForm } from 'react-hook-form';
import { userContext } from './../../../App';
import Stripes from './../PaymentGateWay/Stripes/Stripes';
import styled  from 'styled-components';

const Wrapper = styled.div`
  padding: 50px;
  display: flex;
`;
const ImageContainer = styled.div`
  flex: 1;
`;
const InfoContainer = styled.div`
  flex: 1;
  margin: 0 60px;
`;
const Image = styled.img`
  width: 80%;
  height: 60vh;
  object-fit: cover;
  border-radius: 5px;
`;
const Title = styled.h1`
  font-weight: 400;
  font-size:23px;
`;
const Desc = styled.p`
  margin: 30px 0px;
  font-size: 20px;
`;
const Price = styled.span`
  font-size: 23px;
`;

const AddContainer = styled.div`
width:50%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  
`;
 
const Button = styled.button`
  padding:10px;
  margin-top:15px;
  color: white;
  border: 1px solid #f8f4f4;
  cursor: pointer;
  border-radius: 5px;
    background-color: teal;
    border: 1px solid teal;
    border-radius: 5px;
    font-size:16px;
 
`;
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
  
    fetch('https://go-green-recycling.herokuapp.com/shipments', {
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
        fetch('https://go-green-recycling.herokuapp.com/product/'+id)
            .then(res => res.json())
            .then(data => {
                setShipmentProduct(data[0])
            })
    }, [id])

    return (
        <>
        <UserDashboard/>
       {
         display ?   <div className="m-5">
         <Wrapper>
        <ImageContainer>
          <Image src={`data:image/jpeg;base64,${productData?.image?.img}`}/>
        </ImageContainer>
        <InfoContainer>
          <Title><b>Product:</b> {productData?.productName}</Title>
          <Desc>
          <b>Description:</b> {productData?.description}
          </Desc>
          <Price><b>Price:</b> ৳{productData?.price}</Price>
          <AddContainer>
             
            <Button onClick={handleEventClick}>Place Order</Button>
          </AddContainer>
        </InfoContainer>
      </Wrapper>
         </div>
        :
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