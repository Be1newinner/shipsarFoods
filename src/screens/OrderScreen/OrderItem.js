import { Text } from "react-native";
import { useTheme } from "react-native-paper";
import styled from "styled-components";

export const OrderItem = ({
  date = "15/01/2023 10:45 PM",
  price = 55,
  items = 6,
  status = "Delivered",
}) => {
  const { colors } = useTheme();

  const Container = styled.View`
    background: ${colors.componentBg};
    width: 90%;
    margin-left: 5%;
    margin-right: 5%;
    margin-top: 5px;
    margin-bottom: 5px;
    padding: 5px;
    border-radius: 5px;
  `;

  const Row = styled.View`
    flex-flow: row;
    justify-content: space-between;
    padding-left: 10px;
    padding-right: 10px;
  `;
  return (
    <Container>
      <Row>
        <Text>{date}</Text>
        <Text>Rs. {price} /- </Text>
      </Row>
      <Row>
        <Text>{items} Items</Text>
        <Text>{status}</Text>
      </Row>
    </Container>
  );
};
