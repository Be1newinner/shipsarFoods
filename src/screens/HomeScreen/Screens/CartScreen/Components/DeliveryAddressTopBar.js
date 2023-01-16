import React from "react";
import { TouchableHighlight } from "react-native";
import { useTheme } from "react-native-paper";
import styled from "styled-components";

export default function DeliveryAddressTopBar() {
  const { colors, sizes } = useTheme();

  const Background = styled.View`
    background: ${colors.primaryLight};
    padding: ${sizes.sm};
    padding-left: ${sizes.lg};
  `;

  const Heading = styled.Text`
    font-weight: 600;
  `;

  const Tag = styled.Text`
    font-weight: 700;
  `;

  const Content = styled.Text`
    color: #0009;
  `;

  const Clicked = styled.Text`
    color: #000990;
    font-weight: 500;
    margin-right: 10px;
  `;

  const TopBar = styled.View`
    flex-direction: row;
    justify-content: space-between;
  `;

  return (
    <Background>
      <TopBar>
        <Heading>Delivery Address</Heading>
        <TouchableHighlight>
          <Clicked>Change</Clicked>
        </TouchableHighlight>
      </TopBar>
      <Content>
        <Tag>Home :- </Tag>
        H550, G9, Near Norani Masjid, Sangam VIhar, New Delhi 110062
      </Content>
    </Background>
  );
}
