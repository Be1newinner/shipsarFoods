import React from "react";
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { AntDesign } from '@expo/vector-icons'; 

import { OrderScreen } from "../../screens/OrderScreen/OrderScreen";
import { ProfileScreen } from "../../screens/ProfileScreen/ProfileScreen";
import { HomeNavigator } from "./HomeNavigator";

export const AppNavigator = () => {
    const Tab = createBottomTabNavigator();

  const TabIconNames = {
    Home: "home",
    Orders: "shoppingcart",
    Profile : "user"
  }
  
  const createScreenOptions = ({ route }) => {
   return { tabBarIcon: ({ size, color }) => (
      <AntDesign
        name={TabIconNames[route.name]}
        size={size}
        color={color} />
    ),
     headerShown: false,
    tabBarActiveTintColor: "tomato",
  }
  };
  
  return (
    <Tab.Navigator
      screenOptions={createScreenOptions}
    >
          <Tab.Screen name="Home" component={HomeNavigator} />
          <Tab.Screen name="Orders" component={OrderScreen} />
        <Tab.Screen name="Profile" component={ProfileScreen} />
      </Tab.Navigator>
    )
}