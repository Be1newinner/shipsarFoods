import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { AntDesign } from "@expo/vector-icons";

import { OrderScreen } from "../../screens/OrderScreen/OrderScreen";
import { ProfileScreen } from "../../screens/ProfileScreen/ProfileScreen";
import { ExploreHome } from "../../screens/HomeScreen/Screens/ExploreHome";

const BottomNavigator = () => {
  const Tab = createBottomTabNavigator();

  const TabIconNames = {
    ExploreHome: "home",
    Orders: "shoppingcart",
    Profile: "user",
  };

  const createScreenOptions = ({ route }) => {
    return {
      tabBarIcon: ({ size, color }) => (
        <AntDesign name={TabIconNames[route.name]} size={size} color={color} />
      ),
      headerShown: false,
      tabBarActiveTintColor: "tomato",
    };
  };

  return (
    <Tab.Navigator screenOptions={createScreenOptions}>
      <Tab.Screen
        name="ExploreHome"
        options={{ headerShown: true, title: "Food Categories" }}
        component={ExploreHome}
      />
      <Tab.Screen
        name="Orders"
        component={OrderScreen}
        options={{ headerShown: true, title: "My Orders" }}
      />
      <Tab.Screen name="Profile" component={ProfileScreen} />
    </Tab.Navigator>
  );
};

export default BottomNavigator;
