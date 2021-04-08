// libraries
import { StatusBar } from "expo-status-bar";
import React from "react";
import AppLoading from 'expo';
import { ThemeProvider } from 'styled-components';
import { ToastProvider } from 'react-native-styled-toast';

// fonts
import {
  useFonts,
  Oswald_400Regular,
  Oswald_700Bold,
} from "@expo-google-fonts/oswald";

import AppStack from "./src/Routes/AppStack";

export default function App() {
  let [fontsLoaded] = useFonts({
    Oswald_400Regular,
    Oswald_700Bold,
  });

  const theme = {
    fg: "palevioletred",
    bg: "white",
    backgroundSuccess: '#7DBE31',
    backgroundError: '#FC0021',
    backgroundInfo: '#00FFFF',
    space: [0, 4, 8, 12, 16, 20, 24, 32, 40, 48],
    colors: {
      text: '#0A0A0A',
      background: '#FFF',
      border: '#E2E8F0',
      muted: '#F0F1F3',
      success: '#7DBE31',
      error: '#FC0021',
      info: '#00FFFF'
    }
  };


  // if (!fontsLoaded) {
  //   return <AppLoading />;
  // } else {
    return (
      <ThemeProvider theme={theme}>
        <ToastProvider maxToasts={1} offset={-10} position="BOTTOM">
          <StatusBar style="auto" />
          <AppStack />
        </ToastProvider>
      </ThemeProvider>
    );
  // }
}