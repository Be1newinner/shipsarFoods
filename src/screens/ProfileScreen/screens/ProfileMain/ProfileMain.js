import React from "react";
import { Text, View } from "react-native";
import { Button, useTheme } from "react-native-paper";
import styled from "styled-components";
import { AntDesign } from "@expo/vector-icons";

export const ProfileScreen = () => {
  const { colors } = useTheme();

  const TopBar = styled.View`
    background: brown;
    width: 100%;
    height: 140px;
    justify-content: center;
    align-items: center;
  `;

  const Background = styled.View`
    background: ${colors.appBackground};
    flex: 1;
    padding-right: 10px;
  `;

  const LogoText = styled.Text`
    color: white;
    font-weight: 500;
    font-size: 18px;
  `;

  const UserName = styled.Text`
    font-weight: 700;
    font-size: 22px;
  `;

  const NameBox = styled.View`
    background: white;
    padding: 15px;
  `;

  const AccountText = styled.Text`
    margin: 20px;
    margin-bottom: 15px;
  `;

  const Row = styled.View`
    background: white;
    margin: 5px 0;
    margin-right: 10px;
    padding: 20px;
    flex-direction: row;
    justify-content: space-between;
    border-top-right-radius: 20px;
    border-bottom-right-radius: 20px;
  `;

  const LogOutButton = styled(Button)`
    width: 100px;
  `;

  return (
    <Background>
      <TopBar>
        <AntDesign name="windows" size={35} color="white" />
        <LogoText>The Shipsar Foods</LogoText>
      </TopBar>
      <NameBox>
        <UserName>Vijay Kumar</UserName>
        <Text>+91 8130 506 284</Text>
      </NameBox>
      <AccountText>Account Settings</AccountText>
      <Row>
        <Text>Feedback</Text>
        <AntDesign name="right" size={24} color="silver" />
      </Row>
      <Row>
        <Text>Feedback</Text>
        <AntDesign name="right" size={24} color="silver" />
      </Row>
      <Row>
        <Text>Feedback</Text>
        <AntDesign name="right" size={24} color="silver" />
      </Row>
      <LogOutButton mode="contained">Log Out</LogOutButton>
    </Background>
  );
};
