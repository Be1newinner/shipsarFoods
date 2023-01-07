import React from "react";
import { TouchableOpacity } from "react-native";
import { Card } from "react-native-paper";
import styled from "styled-components";
import { useTheme } from "react-native-paper";

export const CategoryBlocks = ({ title = "setTile" }) => {
  const { sizes, colors } = useTheme();

  const Cards = styled(Card)`
    width: 47%;
    margin: ${sizes.sm};
    margin-right: ${sizes.xl};
    margin-left: ${sizes.xl};
    overflow: hidden;
    background: ${colors.componentBg};
  `;

  const CardCover = styled(Card.Cover)`
    margin: ${sizes.sm};
    width: 140px;
    height: 100px;
    margin-bottom: 0;
  `;

  // console.log(Card.Cover)

  return (
    <Cards>
      <TouchableOpacity activeOpacity={0.8}>
        <CardCover source={{ uri: "https://picsum.photos/300" }} />
        <Card.Title title={title} />
      </TouchableOpacity>
    </Cards>
  );
};
