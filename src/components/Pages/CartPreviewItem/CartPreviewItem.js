import { Add, Remove } from '@material-ui/icons';
import React from 'react';
import styled from 'styled-components';
import Footer from '../../Shared/Footer/Footer';
import NavbarComponent from './../../Shared/Navbar/NavbarComponent';

const Container = styled.div``;
const Wrapper = styled.div`
  padding: 20px;
`;
const Title = styled.h1`
  text-align: center;
  font-weight: 400;
  padding-top: 15px;
`;
const Top = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 20px;
`;
const TopButton = styled.button`
  padding: 10px;
  cursor: pointer;
  border-radius: 5px;
  border: ${(props) => props.type === "filled" && "none"};
  background-color: ${(props) =>
    props.type === "filled" ? "black" : "transparent"};
  color: ${(props) => props.type === "filled" && "white"};
  font-size: 16px;
`;
const TopTexts = styled.div``;
const TopText = styled.span`
  margin: 10px;
  font-size: 16px;
  text-decoration: underline;
  cursor: pointer;
`;
const Bottom = styled.div`
display: flex;
  justify-content: space-between;
`;

const Info = styled.div`
flex:3;
`;
const Product = styled.div`
display: flex;
  justify-content: space-between;
`;
const ProductDetail = styled.div`
flex: 2;
  display: flex;
`;
const Image = styled.img`
width:300px;
`;
const Details = styled.div`
display: flex;
padding: 40px;
justify-content: space-around;
flex-direction: column;
`;
const ProductName = styled.div``;
const ProductId = styled.div``;
const ProductColor = styled.div`
width: 20px;
  height: 20px;
  border-radius: 50%;
  background-color: ${(props) => props.color};
`;
const ProductDesc = styled.p``;
const PriceDetail = styled.div`
flex: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content:center;
`;
const ProductAmountContainer= styled.div`
display: flex;
  align-items: center;
  margin-bottom: 20px;
  cursor: pointer;
`;
const ProductAmount=styled.div`
font-size: 24px;
  margin: 5px;
`;
const ProductPrice = styled.div`
font-size: 30px;
  font-weight: 200;
`;
const Hr = styled.hr`
  background-color:gray;
  border: none;
  height: 1px;
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
font-weight: 200;
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
  background-color: black;
  color: white;
  font-weight: 600;
  cursor: pointer;
  border-radius:10px;
`;
const CartPreviewItem = (props) => {
    const cart=props.pd;
    console.log(cart)
    const {productName,quantity,image,description}=cart;
//   const total=cart.reduce((total,pd)=>(total+pd.price*pd.quantity),0);
  
//   let shipping =0;
//   if(total>=15 && total<=35){
//       shipping=4.99;
//   }
//   else if(total>35){
//       shipping=0.00;
//   }
//   else if(total>0 && total<15){
//       shipping=12.99;
//   }
//   let tax=(total*0.1).toFixed(2);
//   let totalPrice=(total+shipping+Number(tax)).toFixed(2);
    return (
        <Container> 
        <Wrapper>
           <Title>Your Bag</Title>
          <Top>
            <TopButton>Continue Shopping</TopButton>
            <TopTexts>
              <TopText>Your Bag(2)</TopText>
              <TopText>Your Wishlist(0)</TopText>
            </TopTexts>
            <TopButton type="filled">CHECKOUT NOW</TopButton>
          </Top>
  
          <Bottom>
              <Info>
                  <Product>
                      <ProductDetail>
                          <Image src={`data:image/jpeg;base64,${image?.img}`}/> 
                          <Details>
                          <ProductName>
                      <b>Product:</b>  {productName} 
                    </ProductName>
                    <ProductId>
                      <b>Quantity:</b> {quantity}
                    </ProductId>
                     
                    <ProductDesc>
                      <b>Description:</b> {description}
                    </ProductDesc>
                          </Details>
                      </ProductDetail>
                      <PriceDetail>
                  <ProductAmountContainer>
                    <Add />
                    <ProductAmount>2</ProductAmount>
                    <Remove/>
                  </ProductAmountContainer>
                  <ProductPrice>$ 30</ProductPrice>
                </PriceDetail>
                  </Product>
                  <Hr/> 
              </Info>  
              {/* <Summary>
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
              <Button>CHECKOUT NOW</Button>
            </Summary> */}
          </Bottom>
        </Wrapper>
      </Container>
    );
};

export default CartPreviewItem;