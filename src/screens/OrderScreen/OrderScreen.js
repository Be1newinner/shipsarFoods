import React from "react";
import styled from "styled-components";
import { useTheme } from "react-native-paper";

import { OrderItem } from "./OrderItem";
import { ScrollView } from "react-native";

export const OrderScreen = () => {
  const { colors } = useTheme();

  const Background = styled(ScrollView)`
    background: ${colors.appBackground};
    padding-top: 5px;
    padding-bottom: 5px;
    flex: 1;
  `;

  return (
    <Background>
      <OrderItem />
      <OrderItem />
      <OrderItem />
      <OrderItem />
      <OrderItem />
      <OrderItem />
      <OrderItem />
      <OrderItem />
      <OrderItem />
      <OrderItem />
    </Background>
  );
};
