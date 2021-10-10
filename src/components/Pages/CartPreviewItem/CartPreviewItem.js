import { Link } from 'react-router-dom';
import React from 'react';
import styled from 'styled-components';
 
const Container = styled.div``;
const Wrapper = styled.div`
  padding: 20px;
`;
const Title = styled.h1`
  text-align: center;
  font-weight: 400;
  padding-top: 15px;
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
const ProductDesc = styled.p``;

const Hr = styled.hr`
  background-color:gray;
  border: none;
  height: 1px;
`;

const Button = styled.button`
width:30%;
  padding: 10px;
  background-color: black;
  color: white;
  font-weight: 600;
  cursor: pointer;
  border-radius:10px;
`;
const ProductPrice=styled.div``;
const CartPreviewItem = (props) => {
    const cart=props.pd;
   
    const {productName,quantity,image,description,price,_id}=cart;
    return (
        <Container> 
        <Wrapper>
        
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
                    <ProductPrice>
                      <b>Price:</b> {price}  
                    </ProductPrice>
                    <Button onClick={() =>props.removeProduct(_id)}>
                    Remove Order
                    </Button>
                          </Details>
                      </ProductDetail>
                  </Product>
                  <Hr/> 
              </Info>  
          </Bottom>
        </Wrapper>
      </Container>
    );
};

export default CartPreviewItem;