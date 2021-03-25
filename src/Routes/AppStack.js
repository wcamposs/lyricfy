// libraries
import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

// components
import LandingPage from "../Screens/Landing/LandingScreen";
import SearchPage from "../Screens/Search/SearchScreen";

const { Navigator, Screen } = createStackNavigator();

function AppStack() {
  return (
    <NavigationContainer>
      <Navigator screenOptions={{ headerShown: false }}>
        <Screen name="LandingPage" component={LandingPage} />
        <Screen name="SearchPage" component={SearchPage} />
      </Navigator>
    </NavigationContainer>
  );
}

export default AppStack;