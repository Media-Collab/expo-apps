/* import "react-native-gesture-handler"; */
import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";
import NavigationStack from "./src/screens/Home/HomeStack";

export default function App() {
  return (
    <NavigationContainer>
      <NavigationStack />
    </NavigationContainer>
  );
}
