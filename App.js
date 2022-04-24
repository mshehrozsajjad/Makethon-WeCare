import React from 'react'
import RootNavigator from './navigation/RootNavigator';
import { AppLoading } from "expo";
import { useFonts } from "@use-expo/font";
import 'react-native-gesture-handler';

const customFonts = {
  MontserratBlack: require('./assets/fonts/Montserrat-Black.ttf'),
  MontserratMedium: require('./assets/fonts/Montserrat-Medium.ttf'),
};
export default function App() {
  const [isLoaded] = useFonts(customFonts);
  return (
    <RootNavigator />
  );
}
