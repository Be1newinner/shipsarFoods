import React from "react";
import styled from "styled-components";
import { CartItem } from "./CartItem";

const CartItems = () => {
  const Background = styled.View`
    background: white;
    border-radius: 8px;
    margin-top: 8px;
    margin-left: 8px;
    margin-right: 8px;
    padding: 12px;
  `;

  const Heading = styled.Text`
    font-weight: 700;
  `;

  return (
    <Background>
      <Heading>Your Cart Items</Heading>
      <CartItem
        Name={"item.Name"}
        Description={"item.Description"}
        Price={50}
        item={2}
        quanity={2}
        Key={1}
      />
      <CartItem
        Name={"item.Name"}
        Description={"item.Description"}
        Price={50}
        item={2}
        quanity={2}
        Key={1}
      />
    </Background>
  );
};

export default CartItems;
