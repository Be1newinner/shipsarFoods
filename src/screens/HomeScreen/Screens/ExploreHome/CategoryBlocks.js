import React from "react";
import { TouchableOpacity } from "react-native";
import { Card } from "react-native-paper";
import styled from "styled-components";
import { useTheme } from "react-native-paper";

export const CategoryBlocks = (props) => {
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
    width: 90%;
    height: 100px;
    margin-bottom: 0;
  `;

  return (
    <Cards>
      <TouchableOpacity onPress={() => props.navigate()} activeOpacity={0.8}>
        <CardCover source={{ uri: "https://picsum.photos/300" }} />
        <Card.Title title={props.title} />
      </TouchableOpacity>
    </Cards>
  );
};
