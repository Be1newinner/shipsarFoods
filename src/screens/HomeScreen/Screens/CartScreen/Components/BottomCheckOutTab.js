import React from "react";
import { View } from "react-native";
import { Text, Button } from "react-native-paper";
import styled from "styled-components";

const BottomCheckOutTab = ({ onPress }) => {
  const Background = styled.View`
    background: white;
    width: 100%;
    padding: 5px;
    flex-direction: row;
    border: 1px dotted silver;
    border-radius: 10px;
    justify-content: space-between;
    align-items: center;
  `;

  const CButton = styled(Button)`
    border-radius: 8px;
    padding: 7px;
  `;

  const PriceText = styled.Text`
    font-weight: 500;
    font-size: 18px;
    margin-left: 20px;
  `;

  return (
    <Background>
      <View>
        <PriceText> Total </PriceText>
        <PriceText>Rs. 270</PriceText>
      </View>
      <CButton mode="contained" icon="store" onPress={() => onPress()}>
        <PriceText> Proceed to Checkout </PriceText>
      </CButton>
    </Background>
  );
};

export default BottomCheckOutTab;
