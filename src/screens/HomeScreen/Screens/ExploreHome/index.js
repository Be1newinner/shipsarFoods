import React from "react";
import { ScrollView, Text, View } from "react-native";
import { useTheme } from "react-native-paper";
import styled from "styled-components";

import { SearchBar } from "./../../components/SearchbarComponent";
import { CategoryBlocks } from "./CategoryBlocks";

export const ExploreHome = () => {

    const { sizes, colors } = useTheme();

    const Container = styled.View`
        justify-content: space-between;
        align-items: center;
        display: flex;
        flex-flow: row wrap;
        padding : ${sizes.sm}
    `;

    return(
    <>
    <SearchBar placeholder="Search Food" />
    <ScrollView>
        <Container>
            <CategoryBlocks title="Veg only"/>
            <CategoryBlocks title="Rice and Biryani"/>
            <CategoryBlocks title="Egg and Chicken"/>
            <CategoryBlocks title="Naan and Chapati"/>
            <CategoryBlocks title="Chinese"/>
            <CategoryBlocks title="Thali"/>
        </Container>
    </ScrollView>
    </>
    )
}