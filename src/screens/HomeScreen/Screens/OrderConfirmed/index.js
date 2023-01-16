import React from "react";
import { Image, View } from "react-native";
import { Divider, Text, useTheme } from "react-native-paper";
import styled from "styled-components";
import { Entypo } from "@expo/vector-icons";

const OrderConfirmed = () => {
  const { colors } = useTheme();
  const Background = styled.View`
    background: ${colors.appBackground};
    flex: 1;
  `;

  const DeliveryBox = styled.View`
    background: ${colors.componentBg};
    width: 100%;
    margin: 5px;
    border-top-left-radius: 10px;
    padding: 10px;
    align-content: center;
    flex: 1;
  `;

  const DeliveryText = styled.Text`
    font-weight: 700;
    font-size: 18px;
  `;

  const OrderStatus = styled.View`
    border: 1px dotted silver;
    flex-direction: row;
    justify-content: space-between;
    padding: 15px;
    margin: 10px 0px;
    border-radius: 10px;
  `;
  const StatusText = styled.Text`
    font-size: 18px;
  `;
  const CardImage = styled(Image)`
    width: 40px;
    height: 40px;
    border-radius: 10px;
  `;

  return (
    <Background>
      <DeliveryBox>
        <DeliveryText>Delivery in Less than 30 Mins</DeliveryText>
        <Text>to H550, G9, M1, sangam Vihar, ND 62</Text>
        <OrderStatus>
          <CardImage source={{ uri: "https://picsum.photos/100" }} />
          <StatusText> We are Preparing your Order </StatusText>
          <Entypo name="phone" size={30} color={colors.primary} />
        </OrderStatus>
        <Text>Bill Details</Text>
        <OrdersItems />
      </DeliveryBox>
    </Background>
  );
};

const OrdersItems = () => {
  const { colors } = useTheme();

  const Background = styled.View`
    background: ${colors.appBackground};
    margin-top: 10px;
    margin-left: 5px;
    margin-right: -5px;
    padding: 10px;
    border-top-left-radius: 10px;
    border-bottom-left-radius: 10px;
  `;

  const Row = styled.View`
    flex-direction: row;
    justify-content: space-between;
    padding-right: 10px;
    margin: 2px 0px;
  `;

  const MyDivider = styled(Divider)`
    margin: 10px 0;
  `;

  const TotalText = styled.Text`
    font-weight: bold;
    font-size: 14px;
    margin-top: 5px;
  `;

  return (
    <Background>
      <Row>
        <Text>Paneer Paratha x 1</Text>
        <Text> Rs. 40</Text>
      </Row>
      <Row>
        <Text>Paneer Paratha x 1</Text>
        <Text>Rs. 30</Text>
      </Row>
      <Row>
        <Text>Paneer Paratha x 1</Text>
        <Text>Rs. 20</Text>
      </Row>
      <Row>
        <Text>Paneer Paratha x 1</Text>
        <Text>Rs. 40</Text>
      </Row>
      <MyDivider />
      <Row>
        <Text>Item Total</Text>
        <Text>Rs. 40</Text>
      </Row>
      <Row>
        <Text>Order Packing Charges</Text>
        <Text>Rs. 10</Text>
      </Row>
      <Row>
        <Text>Delivery Partner fees</Text>
        <Text>Rs. 30</Text>
      </Row>
      <Row>
        <Text>Taxes</Text>
        <Text>Rs. 9</Text>
      </Row>
      <Row>
        <Text>To pay</Text>
        <TotalText>Bill Total Rs. 209</TotalText>
      </Row>
    </Background>
  );
};

export default OrderConfirmed;
