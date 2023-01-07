import React from "react";
import { Searchbar } from 'react-native-paper';
import styled from "styled-components";
import { useTheme } from "react-native-paper";

export const SearchBar = () => {
    
    const {sizes, colors} = useTheme();
    
    const SearchContainer = styled.View`
        padding: ${sizes.md};
    `;
    
    const SearchBar = styled(Searchbar)`
        // background: ${colors.background}
    `;

return (
    <SearchContainer>
        <SearchBar placeholder="Search Food"/>
    </SearchContainer>
)
}