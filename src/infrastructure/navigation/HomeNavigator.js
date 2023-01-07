import React from "react";
// import { Text  } from "react-native";
import { createStackNavigator } from '@react-navigation/stack';
import { ExploreHomeScreen, ViewItemsHomeScreen } from "../../screens/HomeScreen/index.js";

export const HomeNavigator = () => {
    const Stack = createStackNavigator();

    return (
        <Stack.Navigator screenOptions={{headerShown: false}}>
            <Stack.Screen name="ExploreHome" component={ExploreHomeScreen} />
            <Stack.Screen name="ViewItemsHome" component={ViewItemsHomeScreen} />
        </Stack.Navigator>
    )
}