import React from "react";
import { ScrollView } from "react-native";
import styled from "styled-components";
import CartItems from "./Components/CartItems";
import DeliveryAddressTopBar from "./Components/DeliveryAddressTopBar";
import Voucher from "./Components/Voucher";
import OrderSummaryBottom from "./Components/OrderSummaryBottom";
import BottomCheckOutTab from "./Components/BottomCheckOutTab";
import { useTheme } from "react-native-paper";

const CartScreen = ({ navigation }) => {
  const { colors } = useTheme();

  const Background = styled.View`
    background: ${colors.appBackground};
    flex: 1;
  `;
  return (
    <Background>
      <ScrollView>
        <DeliveryAddressTopBar />
        <CartItems />
        <Voucher />
        <OrderSummaryBottom />
      </ScrollView>
      <BottomCheckOutTab
        onPress={() => navigation.navigate("OrderConfirmed")}
      />
    </Background>
  );
};

export default CartScreen;
