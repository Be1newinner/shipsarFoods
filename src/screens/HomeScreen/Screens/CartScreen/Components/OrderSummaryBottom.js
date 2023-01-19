import React from "react";
import { View } from "react-native";
import { DataTable, Text } from "react-native-paper";
import styled from "styled-components";

const OrderSummaryBottom = () => {
  const Background = styled.View`
    background: white;
    border-radius: 8px;
    margin: 8px;
    padding: 12px;
    margin-bottom: 70px;
  `;

  const Rows = styled.View`
    flex-direction: row;
  `;

  const RData = styled.Text``;

  const LData = styled.Text`
    flex: 1;
  `;

  const GTotalL = styled.Text`
    flex: 1;
    font-weight: bold;
    font-size: 18px;
  `;

  const GTotalR = styled.Text`
    font-weight: bold;
    font-size: 18px;
  `;

  const SummaryText = styled.Text`
    margin-bottom: 7px;
    font-weight: 600;
  `;

  return (
    <>
      <Background>
        <SummaryText>Order Summary</SummaryText>
        <Rows>
          <LData>Sub Total</LData>
          <RData>Rs. 150.0 /-</RData>
        </Rows>

        <Rows>
          <LData>Tax and Service Charges</LData>
          <RData>Rs. 120.0 /-</RData>
        </Rows>

        <Rows>
          <LData>Delivery Fees</LData>
          <RData>Rs. 30.0 /-</RData>
        </Rows>

        <Rows>
          <GTotalL>Grand Total</GTotalL>
          <GTotalR>Rs. 188.0 /-</GTotalR>
        </Rows>
      </Background>
    </>
  );
};

export default OrderSummaryBottom;
