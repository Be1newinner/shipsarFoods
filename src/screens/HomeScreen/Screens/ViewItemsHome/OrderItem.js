import React, { useContext, useState } from "react";
import { Image, Pressable, View } from "react-native";
import styled from "styled-components";
import { useTheme } from "react-native-paper";
import { GlobalContext } from "../../../../services/GlobalContext";

export const OrderItem = ({
  Name,
  Description = "Description",
  imagesrc = "https://picsum.photos/200",
  Price,
  Key,
}) => {
  const { colors } = useTheme();

  const { cart, Carting } = useContext(GlobalContext);

  const CardItem = styled(View)`
    background: ${colors.componentBg};
    justify-content: space-between;
    align-items: center;
    flex-flow: row wrap;
    margin-top: 5px;
    margin-bottom: 5px;
    margin-left: 10px;
    margin-right: 10px;
    border-radius: 10px;
    padding: 7px;
  `;

  const CardImage = styled(Image)`
    width: 60px;
    height: 60px;
    border-radius: 10px;
  `;

  const TextTitle = styled.Text`
    font-weight: 600;
    font-size: 16px;
  `;

  const TextDiscription = styled.Text`
    font-size: 14px;
    color: #0007;
  `;

  const MiddleContainer = styled.View`
    flex: 1;
    height: 100%;
    margin-left: 10px;
    margin-right: 10px;
  `;

  const PriceContainer = styled.View`
    padding-top: 4px;
    height: 100%;
    align-items: center;
  `;

  const Options = styled.View`
    background: white;
    flex-flow: row wrap;
    border-radius: 100px;
    border: 2px solid blue;
    margin-bottom: 5px;
  `;

  const OptionItem = styled.View`
    width: 23px;
    height: 23px;
    margin-bottom: 3px;
    justify-content: center;
    align-items: center;
  `;

  const TextOptionItem = styled.Text`
    font-weight: 600;
    font-size: 16px;
  `;

  const [Quantity, setQuantity] = useState(0);

  const Increase = () => {
    if (Quantity < 20) {
      setQuantity(Quantity + 1);
      // CardContext();
    }
  };

  const Decrease = () => {
    if (Quantity > 0) {
      setQuantity(Quantity - 1);
      // CardContext();
    }
  };

  // const CardContext = () => Carting({ key: Key, item: Quantity, price: Price });

  return (
    <CardItem>
      <CardImage source={{ uri: imagesrc }} />
      <MiddleContainer>
        <TextTitle>{Name}</TextTitle>
        <TextDiscription>{Description}</TextDiscription>
      </MiddleContainer>

      <PriceContainer>
        <Options>
          <Pressable onPress={Decrease}>
            <OptionItem>
              <TextOptionItem>-</TextOptionItem>
            </OptionItem>
          </Pressable>
          <OptionItem>
            <TextOptionItem>{Quantity}</TextOptionItem>
          </OptionItem>
          <Pressable onPress={Increase}>
            <OptionItem>
              <TextOptionItem>+</TextOptionItem>
            </OptionItem>
          </Pressable>
        </Options>

        <TextDiscription>{"Rs. " + Price + " /-"}</TextDiscription>
      </PriceContainer>
    </CardItem>
  );
};
