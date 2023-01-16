import React from "react";
// import { Text  } from "react-native";
import { createStackNavigator } from "@react-navigation/stack";
import { ViewItemsHome } from "../../screens/HomeScreen/Screens/ViewItemsHome";
import { useTheme } from "react-native-paper";
import CartScreen from "../../screens/HomeScreen/Screens/CartScreen";
import BottomNavigator from "./BottomNavigator";
import OrderConfirmed from "../../screens/HomeScreen/Screens/OrderConfirmed";

const StackNavigator = () => {
  const Stack = createStackNavigator();
  const { size, colors } = useTheme();

  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Home"
        component={BottomNavigator}
        options={{ headerShown: false, title: "Food Categories" }}
      />
      <Stack.Screen
        name="CartSummary"
        component={CartScreen}
        options={{ headerShown: true, title: "Your Cart" }}
      />
      <Stack.Screen
        name="OrderConfirmed"
        component={OrderConfirmed}
        options={{ headerShown: true, title: "Order Confirmed" }}
      />
      <Stack.Screen
        name="ViewItemsHome"
        component={ViewItemsHome}
        options={({ route }) => ({
          title: `${route.params.title}`,
          headerStyle: {
            backgroundColor: colors.componentBg,
            height: 75,
          },
        })}
      />
    </Stack.Navigator>
  );
};
false;

export default StackNavigator;
