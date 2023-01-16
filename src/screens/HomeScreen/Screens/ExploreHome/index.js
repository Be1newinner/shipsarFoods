import React, { useContext } from "react";
import { ScrollView, Text, View, TouchableOpacity } from "react-native";
import { useTheme } from "react-native-paper";
import styled from "styled-components";
import { GlobalContext } from "../../../../services/GlobalContext";

// import { SearchBar } from "./../../components/SearchbarComponent";
import { CategoryBlocks } from "./CategoryBlocks";

export const ExploreHome = ({ navigation }) => {
  const { selectCategory } = useContext(GlobalContext);

  const { sizes } = useTheme();

  const Container = styled.View`
    justify-content: space-between;
    align-items: center;
    flex-flow: row wrap;
    padding: ${sizes.sm};
  `;

  return (
    <>
      {/* <SearchBar placeholder="Search Food" /> */}
      <ScrollView>
        <Container>
          <CategoryBlocks
            navigate={() => {
              navigation.navigate("ViewItemsHome", {
                category: "cat1",
                title: "Vegies",
              });
              selectCategory("cat1");
            }}
            title="Vegies"
          />
          <CategoryBlocks
            navigate={() => {
              navigation.navigate("ViewItemsHome", {
                category: "cat2",
                title: "Rice and Biryani",
              });
              selectCategory("cat2");
            }}
            title="Rice and Biryani"
          />
          <CategoryBlocks
            navigate={() => {
              navigation.navigate("ViewItemsHome", {
                category: "cat3",
                title: "Egg and Chicken",
              });
              selectCategory("cat3");
            }}
            title="Egg and Chicken"
          />
          <CategoryBlocks
            navigate={() => {
              navigation.navigate("ViewItemsHome", {
                category: "cat4",
                title: "Naan and Chapati",
              });
              selectCategory("cat4");
            }}
            title="Naan and Chapati"
          />
          <CategoryBlocks
            navigate={() => {
              navigation.navigate("ViewItemsHome", {
                category: "cat5",
                title: "Chinese Foods",
              });
              selectCategory("cat5");
            }}
            title="Chinese"
          />
          <CategoryBlocks
            navigate={() => {
              navigation.navigate("ViewItemsHome", {
                category: "cat6",
                title: "Thali Specials",
              });
              selectCategory("cat6");
            }}
            title="Thali"
          />
        </Container>
      </ScrollView>
    </>
  );
};
