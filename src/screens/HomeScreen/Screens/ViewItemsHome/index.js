import React, { useContext, useState } from "react";
import { FlatList, Pressable, View } from "react-native";
import { OrderItem } from "./OrderItem";
import { ResturantItemsContext } from "../../../../services/Resturantitems/ResturantItemsContext";
import { ActivityIndicator, useTheme } from "react-native-paper";
import styled from "styled-components";
import { Ionicons } from "@expo/vector-icons";

export const ViewItemsHome = ({ navigation }) => {
  const { loading, menuItems } = useContext(ResturantItemsContext);
  const { colors } = useTheme();
  const [ItemsInCart, setItemsInCart] = useState(1);
  const [ToalInCart, setToalInCart] = useState(0);

  const Loader = styled(ActivityIndicator)`
    top: 50%;
  `;

  const GoToCart = styled(View)`
    background: ${colors.primary};
    margin: 8px;
    padding: 7px;
    border-radius: 10px;
    justify-content: space-between;
    align-items: center;
    flex-flow: row wrap;
  `;

  const CartContainer = styled.View`
    justify-content: space-between;
    align-items: center;
    flex-flow: row wrap;
  `;

  const CartText = styled.Text`
    color: white;
  `;

  const renderItem = ({ item }) => {
    return (
      <OrderItem
        Name={item.Name}
        Description={item.Description}
        Price={item.Price}
        item={item}
        quanity={0}
        Key={item.Sr}
      />
    );
  };

  return (
    <>
      {loading ? (
        <Loader size={40} />
      ) : (
        <>
          <FlatList
            renderItem={renderItem}
            data={menuItems.items}
            keyExtractor={(item) => item.Sr}
            initialNumToRender={6}
            removeClippedSubviews={true}
          />
          {ItemsInCart ? (
            <GoToCart>
              <View>
                <CartText>{ItemsInCart} Items</CartText>
                <CartText>Total :- {ToalInCart} /- </CartText>
              </View>
              <Pressable onPress={() => navigation.navigate("CartSummary")}>
                <CartContainer>
                  <CartText>Go To Cart</CartText>
                  <Ionicons
                    name="chevron-forward-outline"
                    size={24}
                    color="white"
                  />
                </CartContainer>
              </Pressable>
            </GoToCart>
          ) : (
            ""
          )}
        </>
      )}
    </>
  );
};
