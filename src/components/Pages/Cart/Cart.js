import React from 'react';
import styled from 'styled-components';
import {Link} from 'react-router-dom'
const Container = styled.div``;
const Wrapper = styled.div`
  padding: 20px;
`;
const Summary = styled.div`
flex: 1;
  border: 0.5px solid lightgray;
  border-radius: 10px;
  padding: 50px;
  height: 50vh;
  margin-top:25px;
`;
const SummaryTitle=styled.h1`
font-weight: 500;
margin:5px;
`;
const SummaryItem = styled.div`
 margin: 30px 0px;
  display: flex;
  justify-content: space-between;
  font-weight: ${(props) => props.type === "total" && "500"};
  font-size: ${(props) => props.type === "total" && "24px"};
`;
const SummaryItemPrice = styled.span`
font-size:20px;
`;
const SummaryItemText = styled.span`
font-size:20px;
`;
const Button = styled.button`
width: 100%;
  padding: 10px;
  margin-bottom: 10px;
  background-color: black;
  color: white;
  font-weight: 600;
  cursor: pointer;
  border-radius:10px;
`;
const Cart = ( props) => {
    
  const cart=props.cart;
  const total=cart.reduce((total,pd)=>(total+pd.price*pd.quantity),0);
  
  let shipping =0;
  if(total>=15 && total<=35){
      shipping=4.99;
  }
  else if(total>35){
      shipping=0.00;
  }
  else if(total>0 && total<15){
      shipping=12.99;
  }
  let tax=(total*0.1).toFixed(2);
  let totalPrice=(total+shipping+Number(tax)).toFixed(2);
  
     
    return (
        <Container>
      
      <Wrapper>
       
            <Summary>
            <SummaryTitle>ORDER SUMMARY</SummaryTitle>
            <SummaryItem>
              <SummaryItemText>Total order:</SummaryItemText>
              <SummaryItemPrice>{cart.length}</SummaryItemPrice>
            </SummaryItem>
            <SummaryItem>
              <SummaryItemText>Estimated Shipping:</SummaryItemText>
              <SummaryItemPrice> ৳{shipping} </SummaryItemPrice>
            </SummaryItem>
            <SummaryItem>
              <SummaryItemText>Tax + VAT: </SummaryItemText>
              <SummaryItemPrice> ৳{tax}</SummaryItemPrice>
            </SummaryItem>
            <SummaryItem type="total">
              <SummaryItemText>Total:</SummaryItemText>
              <SummaryItemPrice> ৳{totalPrice}</SummaryItemPrice>
            </SummaryItem>
            <Link to="/cartPreview"><Button>VIEW CART</Button></Link>
            <Link to="/cartItem"><Button>CHECKOUT NOW</Button></Link>
          </Summary>
      
      </Wrapper>
      
    </Container>
    );
};

export default Cart;