import "react-native-gesture-handler";
import React from "react";
import { SafeAreaProvider } from "react-native-safe-area-context";
import { NavigationContainer } from "@react-navigation/native";
import { StatusBar } from "expo-status-bar";
import { Provider } from "react-native-paper";

// import { AppNavigator } from "./src/infrastructure/navigation/AppNavigator";
import { SafeArea } from "./src/components/SafeAreaView";
import userTheme from "./src/infrastructure/theme";

import { ResturantItemsContextProvider } from "./src/services/Resturantitems/ResturantItemsContext";
import { GlobalContextProvider } from "./src/services/GlobalContext";
import { Provider as ReduxProvider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";
import { store, persistor } from "./src/infrastructure/redux/state/store";
import StackNavigator from "./src/infrastructure/navigation/StackNavigator";

export default function App() {
  // ResturantItemsService();
  return (
    <SafeAreaProvider>
      <ReduxProvider store={store}>
        <PersistGate persistor={persistor} loading={null}>
          <Provider theme={userTheme}>
            <SafeArea>
              <GlobalContextProvider>
                <ResturantItemsContextProvider>
                  <NavigationContainer>
                    <StackNavigator />
                    <StatusBar style="auto" />
                  </NavigationContainer>
                </ResturantItemsContextProvider>
              </GlobalContextProvider>
            </SafeArea>
          </Provider>
        </PersistGate>
      </ReduxProvider>
    </SafeAreaProvider>
  );
}
