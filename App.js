import 'react-native-gesture-handler';
import React from 'react';
import {SafeAreaProvider} from 'react-native-safe-area-context';
import { NavigationContainer } from '@react-navigation/native';
import { StatusBar } from 'expo-status-bar';
import { Provider } from 'react-native-paper';

import { AppNavigator } from './src/infrastructure/navigation/AppNavigator';
import { SafeArea } from './src/components/SafeAreaView';
import userTheme from './src/infrastructure/theme';

export default function App() {

  return (
    <SafeAreaProvider>
      <Provider theme={userTheme} >
        <SafeArea>
          <NavigationContainer>
            <AppNavigator />
          </NavigationContainer>
        </SafeArea>
        <StatusBar style="auto" />
      </Provider>
    </SafeAreaProvider>

  );
};