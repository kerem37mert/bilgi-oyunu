import React from "react";
import {SafeAreaView} from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Home from "./pages/Home";
import Game from "./pages/Game";
import Settings from "./pages/Settings";
import Statistic from "./pages/Statistic";
import Contributors from "./pages/Contributors";

const Stack = createNativeStackNavigator();

const App = () => {
  return(
    <NavigationContainer>
      <Stack.Navigator screenOptions={{headerShown: false}}>
        <Stack.Screen name="HomeScreen" component={Home} />
        <Stack.Screen name="GameScreen" component={Game} />
        <Stack.Screen name="SettingsScreen" component={Settings} />
        <Stack.Screen name="StatisticScreen" component={Statistic} />
        <Stack.Screen name="ContributorsScreen" component={Contributors} /> 
      </Stack.Navigator> 
    </NavigationContainer>
  );
}

export default App;